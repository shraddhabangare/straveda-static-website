"use client"

import React, { useEffect, useRef } from "react"
import { useCursorStyle, type CursorStyle } from "@/lib/utils/cursor-context"
import { useTheme } from "next-themes"

// ─── Tuning ───────────────────────────────────────────────────────────────────
const LERP_RING   = 0.11   // ring trail speed (lower = more trail)
const LERP_DOT    = 0.85   // dot snaps near-instantly
const LERP_SIZE   = 0.14   // ring size morph speed
const LERP_FILL   = 0.13   // ring fill alpha lerp
const LERP_STRETCH = 0.13
const STRETCH_DECAY = 0.13
const VELOCITY_THRESHOLD = 5
const MAX_STRETCH = 1.22
const SNAP = 0.04
const VELOCITY_SMOOTH = 0.18

// ─── Size config: [ring px, dot px] ──────────────────────────────────────────
const SIZES: Record<CursorStyle, [number, number]> = {
  default: [32, 5],
  nav:     [22, 4],
  link:    [44, 0],   // dot hidden on hover
  text:    [20, 3],
}

// ─── Ring fill alpha (0 = hollow, 1 = filled) ────────────────────────────────
const FILLS: Record<CursorStyle, number> = {
  default: 0,
  nav:     0.08,
  link:    0.12,
  text:    0,
}

// ─── Ring border width ────────────────────────────────────────────────────────
const BORDERS: Record<CursorStyle, number> = {
  default: 1.5,
  nav:     1.5,
  link:    1.5,
  text:    1,
}

// ─── Ring border radius (% or px) ────────────────────────────────────────────
const RADII: Record<CursorStyle, string> = {
  default: "50%",
  nav:     "50%",
  link:    "50%",
  text:    "50%",
}

// ─── Ring height override for text style (tall/narrow) ───────────────────────
const TEXT_RING_HEIGHT = 28  // px — tall pill for text mode
const TEXT_RING_WIDTH  = 16  // px

function lerp(cur: number, tgt: number, f: number): number {
  const d = tgt - cur
  return Math.abs(d) < SNAP ? tgt : cur + d * f
}

// ─── Color helpers ────────────────────────────────────────────────────────────
function ringColor(isDark: boolean, fill: number): string {
  const [r, g, b] = isDark ? [255, 255, 255] : [20, 20, 30]
  return `rgba(${r},${g},${b},${fill})`
}
function ringBorder(isDark: boolean): string {
  return isDark ? "rgba(255,255,255,0.6)" : "rgba(20,20,30,0.55)"
}
function dotColor(isDark: boolean): string {
  return isDark ? "rgba(255,255,255,0.9)" : "rgba(20,20,30,0.85)"
}

export const Cursor: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef  = useRef<HTMLDivElement>(null)
  const rafRef  = useRef<number>(0)

  const state = useRef({
    // Mouse
    mouseX: -200, mouseY: -200,
    // Dot (near-instant)
    dotX: -200, dotY: -200,
    // Ring (lerped)
    ringX: -200, ringY: -200,
    // Velocity
    velX: 0, velY: 0,
    // Sizes
    ringW: SIZES.default[0],
    ringH: SIZES.default[0],
    dotSize: SIZES.default[1],
    // Fill alpha
    fillAlpha: 0,
    targetFillAlpha: 0,
    // Stretch
    stretchX: 1, stretchY: 1, rotation: 0,
    // Visibility
    visible: false,
    // Style
    style: "default" as CursorStyle,
    isDark: false,
    pressed: false,
  })

  const { cursorStyle, setCursorStyle } = useCursorStyle()
  const { theme } = useTheme()

  useEffect(() => { state.current.isDark = theme === "dark" }, [theme])

  useEffect(() => {
    const s = state.current
    s.style = cursorStyle
    s.targetFillAlpha = FILLS[cursorStyle]
  }, [cursorStyle])

  // ─── Auto-detect interactive hovers ─────────────────────────────────────
  useEffect(() => {
    const INTERACTIVE = "a, button, [data-cursor-hover]"
    const prevStyle = { current: "default" as CursorStyle }
    let hovering = false

    const onOver = (e: MouseEvent) => {
      if (hovering) return
      if (!(e.target as HTMLElement).closest(INTERACTIVE)) return
      hovering = true
      prevStyle.current = state.current.style === "link" ? prevStyle.current : state.current.style
      setCursorStyle("link")
    }
    const onOut = (e: MouseEvent) => {
      if (!hovering) return
      const t = e.target as HTMLElement
      if (!t.closest(INTERACTIVE)) return
      const rel = e.relatedTarget as HTMLElement | null
      if (rel?.closest(INTERACTIVE)) return
      hovering = false
      setCursorStyle(prevStyle.current)
    }

    document.addEventListener("mouseover", onOver, { passive: true })
    document.addEventListener("mouseout", onOut, { passive: true })
    return () => {
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)
    }
  }, [setCursorStyle])

  // ─── Animation loop ──────────────────────────────────────────────────────
  useEffect(() => {
    const tick = () => {
      const s = state.current
      const ring = ringRef.current
      const dot  = dotRef.current

      // Dot snaps nearly instantly
      s.dotX = lerp(s.dotX, s.mouseX, LERP_DOT)
      s.dotY = lerp(s.dotY, s.mouseY, LERP_DOT)

      // Ring lerps behind
      s.ringX = lerp(s.ringX, s.mouseX, LERP_RING)
      s.ringY = lerp(s.ringY, s.mouseY, LERP_RING)

      // Velocity for stretch
      const dx = s.mouseX - s.ringX
      const dy = s.mouseY - s.ringY
      s.velX = s.velX * (1 - VELOCITY_SMOOTH) + dx * VELOCITY_SMOOTH
      s.velY = s.velY * (1 - VELOCITY_SMOOTH) + dy * VELOCITY_SMOOTH
      const vmag = Math.sqrt(s.velX * s.velX + s.velY * s.velY)

      if (vmag > VELOCITY_THRESHOLD) {
        const f = Math.min(1 + (vmag - VELOCITY_THRESHOLD) * 0.005, MAX_STRETCH)
        s.stretchX = lerp(s.stretchX, f, LERP_STRETCH)
        s.stretchY = lerp(s.stretchY, 1 / f, LERP_STRETCH)
        s.rotation = lerp(s.rotation, Math.atan2(s.velY, s.velX) * (180 / Math.PI), 0.15)
      } else {
        s.stretchX = lerp(s.stretchX, 1, STRETCH_DECAY)
        s.stretchY = lerp(s.stretchY, 1, STRETCH_DECAY)
        s.rotation = lerp(s.rotation, 0, STRETCH_DECAY)
      }

      // Size targets
      const isText = s.style === "text"
      const targetW = isText ? TEXT_RING_WIDTH  : SIZES[s.style][0] * (s.pressed ? 0.88 : 1)
      const targetH = isText ? TEXT_RING_HEIGHT : SIZES[s.style][0] * (s.pressed ? 0.88 : 1)
      const targetDot = SIZES[s.style][1] * (s.pressed ? 0.75 : 1)
      s.ringW = lerp(s.ringW, targetW, LERP_SIZE)
      s.ringH = lerp(s.ringH, targetH, LERP_SIZE)
      s.dotSize = lerp(s.dotSize, targetDot, LERP_SIZE * 1.3)

      // Fill alpha
      s.fillAlpha = lerp(s.fillAlpha, s.visible ? s.targetFillAlpha : 0, LERP_FILL)

      const globalOp = s.visible ? 1 : 0

      if (ring) {
        const hw = s.ringW / 2
        const hh = s.ringH / 2
        ring.style.transform =
          `translate3d(${s.ringX - hw}px, ${s.ringY - hh}px, 0) ` +
          `rotate(${s.rotation}deg) ` +
          `scale3d(${s.stretchX}, ${s.stretchY}, 1)`
        ring.style.width  = `${s.ringW}px`
        ring.style.height = `${s.ringH}px`
        ring.style.opacity = `${globalOp}`
        ring.style.backgroundColor = ringColor(s.isDark, s.fillAlpha)
        ring.style.borderColor = ringBorder(s.isDark)
        ring.style.borderWidth = `${BORDERS[s.style]}px`
        ring.style.borderRadius = isText ? "9999px" : RADII[s.style]
      }

      if (dot) {
        const h = s.dotSize / 2
        dot.style.transform = `translate3d(${s.dotX - h}px, ${s.dotY - h}px, 0)`
        dot.style.width  = `${s.dotSize}px`
        dot.style.height = `${s.dotSize}px`
        dot.style.opacity = `${globalOp}`
        dot.style.backgroundColor = dotColor(s.isDark)
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  // ─── Mouse events ────────────────────────────────────────────────────────
  useEffect(() => {
    const s = state.current
    const onMove  = (e: MouseEvent) => { s.mouseX = e.clientX; s.mouseY = e.clientY; s.visible = true }
    const onLeave = () => { s.visible = false }
    const onEnter = () => { s.visible = true }
    const onDown  = () => { s.pressed = true }
    const onUp    = () => { s.pressed = false }

    document.addEventListener("mousemove",  onMove,  { passive: true })
    document.addEventListener("mouseleave", onLeave, { passive: true })
    document.addEventListener("mouseenter", onEnter, { passive: true })
    document.addEventListener("mousedown",  onDown,  { passive: true })
    document.addEventListener("mouseup",    onUp,    { passive: true })

    return () => {
      document.removeEventListener("mousemove",  onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mousedown",  onDown)
      document.removeEventListener("mouseup",    onUp)
    }
  }, [])

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full"
        style={{
          border: "1.5px solid rgba(20,20,30,0.55)",
          backgroundColor: "transparent",
          width: SIZES.default[0],
          height: SIZES.default[0],
          opacity: 0,
          willChange: "transform, opacity, width, height, border-radius",
          transition: "none",
        }}
      />
      {/* Snap dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full"
        style={{
          backgroundColor: "rgba(20,20,30,0.85)",
          width: SIZES.default[1],
          height: SIZES.default[1],
          opacity: 0,
          willChange: "transform, opacity, width, height",
          transition: "none",
        }}
      />
    </>
  )
}

export default Cursor
