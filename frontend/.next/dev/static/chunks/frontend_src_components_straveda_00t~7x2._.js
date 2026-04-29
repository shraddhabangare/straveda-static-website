(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/straveda/MagneticButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MagneticButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function MagneticButton({ children, className = '', strength = 0.3 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MagneticButton.useCallback[handleMouseMove]": (e)=>{
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            ref.current.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
        }
    }["MagneticButton.useCallback[handleMouseMove]"], [
        strength
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MagneticButton.useCallback[handleMouseLeave]": ()=>{
            if (ref.current) {
                ref.current.style.transform = 'translate3d(0, 0, 0)';
            }
        }
    }["MagneticButton.useCallback[handleMouseLeave]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: `inline-block ${className}`,
        style: {
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/MagneticButton.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(MagneticButton, "a3q1VZ4JjRrRea6PsdRFiEkS7wY=");
_c = MagneticButton;
var _c;
__turbopack_context__.k.register(_c, "MagneticButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StravedaHeroBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * StravedaHeroBackground — Combined gradient animation + grain shader
 *
 * PERF FIX: Replaced 4 React useState (curX/curY/tgX/tgY) with refs + a single
 * RAF loop — mouse-following now does ZERO React re-renders per frame.
 *
 * PERF FIX: Removed SVG goo filter (feGaussianBlur + feColorMatrix + feBlend)
 * from the orb container. That forced the browser to run an SVG filter pipeline
 * on every animation tick across all 6 animated orbs = very expensive CPU
 * compositing. Replaced with simple CSS blur only.
 *
 * PERF FIX: Reduced GrainGradient speed 0.8 → 0.25. WebGL shader now animates
 * slowly (barely noticeable) using ~3× less GPU bandwidth each frame.
 *
 * PERF FIX: Added will-change: transform + contain: paint to orb container
 * to promote it to its own GPU layer and limit repaint scope.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$grain$2d$gradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paper-design/shaders-react/dist/shaders/grain-gradient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function StravedaHeroBackground() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const interactiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = resolvedTheme === 'dark';
    // ── Set CSS custom properties on container (scoped, not body) ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StravedaHeroBackground.useEffect": ()=>{
            const el = containerRef.current;
            if (!el) return;
            if (isDark) {
                el.style.setProperty('--gradient-bg-start', 'rgb(5, 5, 15)');
                el.style.setProperty('--gradient-bg-end', 'rgb(18, 14, 35)');
                el.style.setProperty('--c1', '255, 72, 0');
                el.style.setProperty('--c2', '43, 35, 88');
                el.style.setProperty('--c3', '200, 50, 0');
                el.style.setProperty('--c4', '70, 55, 130');
                el.style.setProperty('--c5', '255, 110, 30');
                el.style.setProperty('--c-pointer', '255, 72, 0');
                el.style.setProperty('--c-blend', 'hard-light');
            } else {
                el.style.setProperty('--gradient-bg-start', 'rgb(255, 255, 255)');
                el.style.setProperty('--gradient-bg-end', 'rgb(250, 248, 253)');
                el.style.setProperty('--c1', '255, 72, 0');
                el.style.setProperty('--c2', '255, 140, 90');
                el.style.setProperty('--c3', '43, 35, 88');
                el.style.setProperty('--c4', '255, 200, 165');
                el.style.setProperty('--c5', '200, 195, 225');
                el.style.setProperty('--c-pointer', '255, 72, 0');
                el.style.setProperty('--c-blend', 'soft-light');
            }
            el.style.setProperty('--orb-size', '80%');
        }
    }["StravedaHeroBackground.useEffect"], [
        isDark
    ]);
    // ── Mouse-following via RAF + refs — ZERO React re-renders ──
    // IntersectionObserver gates the RAF: stops when hero scrolls out of view.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StravedaHeroBackground.useEffect": ()=>{
            const tg = {
                x: 0,
                y: 0
            };
            const cur = {
                x: 0,
                y: 0
            };
            let rafId = 0;
            let visible = true;
            function tick() {
                if (visible) {
                    cur.x += (tg.x - cur.x) / 20;
                    cur.y += (tg.y - cur.y) / 20;
                    if (interactiveRef.current) {
                        interactiveRef.current.style.transform = `translate(${Math.round(cur.x)}px, ${Math.round(cur.y)}px)`;
                    }
                }
                rafId = requestAnimationFrame(tick);
            }
            function onMouseMove(e) {
                if (!visible) return;
                const rect = containerRef.current?.getBoundingClientRect();
                if (!rect) return;
                tg.x = e.clientX - rect.left;
                tg.y = e.clientY - rect.top;
            }
            // Stop doing work when hero is off-screen — but keep RAF alive to
            // cheaply restart without re-running the effect
            const observer = new IntersectionObserver({
                "StravedaHeroBackground.useEffect": ([entry])=>{
                    visible = entry.isIntersecting;
                }
            }["StravedaHeroBackground.useEffect"], {
                threshold: 0
            });
            if (containerRef.current) observer.observe(containerRef.current);
            rafId = requestAnimationFrame(tick);
            window.addEventListener('mousemove', onMouseMove, {
                passive: true
            });
            return ({
                "StravedaHeroBackground.useEffect": ()=>{
                    cancelAnimationFrame(rafId);
                    window.removeEventListener('mousemove', onMouseMove);
                    observer.disconnect();
                }
            })["StravedaHeroBackground.useEffect"];
        }
    }["StravedaHeroBackground.useEffect"], []);
    const isSafari = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StravedaHeroBackground.useMemo[isSafari]": ()=>typeof navigator !== 'undefined' && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    }["StravedaHeroBackground.useMemo[isSafari]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute inset-0 overflow-hidden', 'bg-[linear-gradient(40deg,var(--gradient-bg-start),var(--gradient-bg-end))]'),
        style: {
            zIndex: 0,
            contain: 'paint layout'
        },
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('gradients-container h-full w-full', isSafari ? 'blur-2xl' : 'blur-[40px]'),
                style: {
                    willChange: 'contents',
                    contain: 'paint'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute [background:radial-gradient(circle_at_center,_rgba(var(--c1),1)_0,_rgba(var(--c1),0)_50%)_no-repeat]', '[mix-blend-mode:var(--c-blend)] w-[var(--orb-size)] h-[var(--orb-size)]', 'top-[calc(50%-var(--orb-size)/2)] left-[calc(50%-var(--orb-size)/2)]', '[transform-origin:center_center] animate-hero-first'),
                        style: {
                            willChange: 'transform'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute [background:radial-gradient(circle_at_center,_rgba(var(--c2),0.8)_0,_rgba(var(--c2),0)_50%)_no-repeat]', '[mix-blend-mode:var(--c-blend)] w-[var(--orb-size)] h-[var(--orb-size)]', 'top-[calc(50%-var(--orb-size)/2)] left-[calc(50%-var(--orb-size)/2)]', '[transform-origin:calc(50%-400px)] animate-hero-second'),
                        style: {
                            willChange: 'transform'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute [background:radial-gradient(circle_at_center,_rgba(var(--c3),0.8)_0,_rgba(var(--c3),0)_50%)_no-repeat]', '[mix-blend-mode:var(--c-blend)] w-[var(--orb-size)] h-[var(--orb-size)]', 'top-[calc(50%-var(--orb-size)/2)] left-[calc(50%-var(--orb-size)/2)]', '[transform-origin:calc(50%+400px)] animate-hero-third'),
                        style: {
                            willChange: 'transform'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute [background:radial-gradient(circle_at_center,_rgba(var(--c4),0.8)_0,_rgba(var(--c4),0)_50%)_no-repeat]', '[mix-blend-mode:var(--c-blend)] w-[var(--orb-size)] h-[var(--orb-size)] opacity-70', 'top-[calc(50%-var(--orb-size)/2)] left-[calc(50%-var(--orb-size)/2)]', '[transform-origin:calc(50%-200px)] animate-hero-fourth'),
                        style: {
                            willChange: 'transform'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute [background:radial-gradient(circle_at_center,_rgba(var(--c5),0.8)_0,_rgba(var(--c5),0)_50%)_no-repeat]', '[mix-blend-mode:var(--c-blend)] w-[var(--orb-size)] h-[var(--orb-size)]', 'top-[calc(50%-var(--orb-size)/2)] left-[calc(50%-var(--orb-size)/2)]', '[transform-origin:calc(50%-800px)_calc(50%+800px)] animate-hero-fifth'),
                        style: {
                            willChange: 'transform'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: interactiveRef,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute [background:radial-gradient(circle_at_center,_rgba(var(--c-pointer),0.8)_0,_rgba(var(--c-pointer),0)_50%)_no-repeat]', '[mix-blend-mode:var(--c-blend)] w-full h-full -top-1/2 -left-1/2 opacity-70'),
                        style: {
                            willChange: 'transform'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    zIndex: 1,
                    opacity: isDark ? 0.35 : 0.12
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paper$2d$design$2f$shaders$2d$react$2f$dist$2f$shaders$2f$grain$2d$gradient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GrainGradient"], {
                    style: {
                        height: '100%',
                        width: '100%'
                    },
                    colorBack: isDark ? 'hsl(240, 30%, 4%)' : 'hsl(270, 20%, 98%)',
                    softness: 0.8,
                    intensity: 0.5,
                    noise: 0,
                    shape: "corners",
                    offsetX: 0.3,
                    offsetY: 0.2,
                    scale: 1,
                    rotation: 15,
                    speed: 0,
                    colors: isDark ? [
                        'hsl(14, 100%, 50%)',
                        'hsl(248, 43%, 20%)',
                        'hsl(14, 80%, 25%)'
                    ] : [
                        'hsl(14, 100%, 57%)',
                        'hsl(40, 100%, 85%)',
                        'hsl(248, 30%, 88%)'
                    ]
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    zIndex: 2,
                    background: isDark ? 'radial-gradient(ellipse at 30% 50%, transparent 40%, rgba(0,0,0,0.4) 100%)' : 'radial-gradient(ellipse at 30% 50%, transparent 50%, rgba(0,0,0,0.03) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(StravedaHeroBackground, "oWN09wVxKDhw/JyxlMT+S9q7Afo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = StravedaHeroBackground;
var _c;
__turbopack_context__.k.register(_c, "StravedaHeroBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/straveda/AnimatedHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.mjs [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.mjs [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$MagneticButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/MagneticButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$StravedaHeroBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/StravedaHeroBackground.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const ease = [
    0.4,
    0,
    0.2,
    1
];
function AnimatedHero({ onNavigate }) {
    _s();
    const [reviewsOpen, setReviewsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gradientRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { theme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    // SSR-safe client detection
    const mounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])({
        "AnimatedHero.useSyncExternalStore[mounted]": ()=>({
                "AnimatedHero.useSyncExternalStore[mounted]": ()=>{}
            })["AnimatedHero.useSyncExternalStore[mounted]"]
    }["AnimatedHero.useSyncExternalStore[mounted]"], {
        "AnimatedHero.useSyncExternalStore[mounted]": ()=>true
    }["AnimatedHero.useSyncExternalStore[mounted]"], {
        "AnimatedHero.useSyncExternalStore[mounted]": ()=>false
    }["AnimatedHero.useSyncExternalStore[mounted]"]);
    const isDark = mounted && (resolvedTheme === 'dark' || theme === 'dark');
    // ── Color tokens ──
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatedHero.useMemo[colors]": ()=>({
                headline: isDark ? '#f0f0f5' : '#1a1a2e',
                headlineHover: '#FF4800',
                tagline: isDark ? '#a1a1aa' : '#4a4a5a',
                badgeText: isDark ? '#e5e5ea' : '#1a1a2e',
                badgeBg: isDark ? 'rgba(0, 0, 0, 0.55)' : 'rgba(255, 255, 255, 0.92)',
                badgeBorder: 'rgba(255, 72, 0, 0.25)',
                badgeDivider: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
                ratingNum: isDark ? '#f0f0f5' : '#1a1a2e',
                ratingLabel: isDark ? '#9ca3af' : '#6b7280',
                scrollText: isDark ? '#6b7280' : '#6b7280',
                scrollBorder: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(43, 35, 88, 0.3)',
                statLine: 'rgba(255, 72, 0, 0.5)',
                secondaryBtnBorder: isDark ? 'rgba(255, 72, 0, 0.35)' : 'rgba(43, 35, 88, 0.3)',
                secondaryBtnText: isDark ? '#f0f0f5' : '#2B2358',
                secondaryBtnBg: isDark ? 'rgba(255, 72, 0, 0.08)' : 'rgba(255, 255, 255, 0.7)',
                borderLine: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)'
            })
    }["AnimatedHero.useMemo[colors]"], [
        isDark
    ]);
    const taglineWords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatedHero.useMemo[taglineWords]": ()=>'AI  Powered  Business  Systems  and  Custom Software  for  Mid Market Companies in India. We build the Automation, CRMs, and Workflows that cut manual work by 50%.'.split(' ')
    }["AnimatedHero.useMemo[taglineWords]"], []);
    // Mouse-following gradient glow — scoped to hero section
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedHero.useEffect": ()=>{
            const section = containerRef.current?.parentElement;
            const gradient = gradientRef.current;
            if (!section || !gradient) return;
            const el = gradient;
            function onMouseMove(e) {
                el.style.left = e.clientX - 192 + 'px';
                el.style.top = e.clientY - 192 + 'px';
                el.style.opacity = '1';
            }
            function onMouseLeave() {
                el.style.opacity = '0';
            }
            section.addEventListener('mousemove', onMouseMove);
            section.addEventListener('mouseleave', onMouseLeave);
            return ({
                "AnimatedHero.useEffect": ()=>{
                    section.removeEventListener('mousemove', onMouseMove);
                    section.removeEventListener('mouseleave', onMouseLeave);
                }
            })["AnimatedHero.useEffect"];
        }
    }["AnimatedHero.useEffect"], []);
    // Word stagger animation for tagline
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedHero.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const words = container.querySelectorAll('.hero-word');
            words.forEach({
                "AnimatedHero.useEffect": (word)=>{
                    const delay = parseInt(word.getAttribute('data-delay') || '0', 10);
                    setTimeout({
                        "AnimatedHero.useEffect": ()=>{
                            word.style.animation = 'hero-word-appear 0.8s ease-out forwards';
                        }
                    }["AnimatedHero.useEffect"], delay);
                }
            }["AnimatedHero.useEffect"]);
        }
    }["AnimatedHero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex min-h-screen items-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes hero-word-appear {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.15; }
          33% { transform: translateY(-14px) rotate(3deg); opacity: 0.25; }
          66% { transform: translateY(6px) rotate(-2deg); opacity: 0.18; }
        }
        @keyframes hero-float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.12; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.2; }
        }
        @keyframes hero-float-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.1; }
          25% { transform: translate(5px, -10px); opacity: 0.18; }
          50% { transform: translate(-3px, -18px); opacity: 0.14; }
          75% { transform: translate(8px, -8px); opacity: 0.16; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$StravedaHeroBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: gradientRef,
                className: "fixed pointer-events-none w-96 h-96 rounded-full opacity-0",
                style: {
                    zIndex: 2,
                    background: 'radial-gradient(circle, rgba(255,72,0,0.08) 0%, transparent 100%)',
                    transition: 'opacity 0.5s ease-out',
                    filter: 'blur(32px)'
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[22%] right-[14%] w-2 h-2 rounded-full",
                style: {
                    zIndex: 1,
                    background: '#FF4800',
                    animation: 'hero-float-1 6s ease-in-out infinite',
                    animationDelay: '1s'
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[58%] right-[9%] w-1.5 h-1.5 rounded-full",
                style: {
                    zIndex: 1,
                    background: isDark ? '#FF4800' : '#2B2358',
                    animation: 'hero-float-2 8s ease-in-out infinite',
                    animationDelay: '2.5s'
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[28%] left-[7%] w-1.5 h-1.5 rounded-full",
                style: {
                    zIndex: 1,
                    background: '#FF4800',
                    animation: 'hero-float-3 7s ease-in-out infinite',
                    animationDelay: '4s'
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 mx-auto hidden min-h-screen w-full max-w-[860px] lg:block",
                style: {
                    zIndex: 3
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-0 h-full w-px",
                        style: {
                            background: colors.borderLine,
                            maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 right-0 h-full w-px",
                        style: {
                            background: colors.borderLine,
                            maskImage: 'linear-gradient(to bottom, black 80%, transparent)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 size-full overflow-hidden",
                style: {
                    zIndex: 3
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-4 w-px md:left-8",
                        style: {
                            background: `linear-gradient(to bottom, transparent, ${colors.borderLine}, ${colors.borderLine})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 right-4 w-px md:right-8",
                        style: {
                            background: `linear-gradient(to bottom, transparent, ${colors.borderLine}, ${colors.borderLine})`
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 left-8 w-px md:left-12",
                        style: {
                            background: `linear-gradient(to bottom, transparent, ${colors.borderLine}80, ${colors.borderLine}80)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 right-8 w-px md:right-12",
                        style: {
                            background: `linear-gradient(to bottom, transparent, ${colors.borderLine}80, ${colors.borderLine}80)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "relative z-10 mx-auto w-full max-w-[860px] px-4 sm:px-6 lg:px-8 pt-24 pb-14 sm:pt-28 sm:pb-20 md:py-28 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.5,
                            ease
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-sm', 'cursor-default transition-all duration-300 hover:shadow-md', 'backdrop-blur-sm max-w-full'),
                            style: {
                                background: colors.badgeBg,
                                borderColor: colors.badgeBorder
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                    className: "size-3 shrink-0",
                                    style: {
                                        color: '#FF4800'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium min-w-0 truncate",
                                    style: {
                                        color: colors.badgeText
                                    },
                                    children: "Pune, Maharashtra · Serving clients across India"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block h-5 w-px shrink-0",
                                    style: {
                                        background: colors.badgeDivider
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "size-3 shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-1",
                                    style: {
                                        color: '#FF4800'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.1,
                            ease
                        },
                        className: "mt-6 mb-6 font-normal w-full",
                        style: {
                            fontSize: 'clamp(2rem, 8vw, 5.125rem)',
                            lineHeight: 1.05,
                            letterSpacing: '-1.5px',
                            color: colors.headline,
                            wordBreak: 'break-word',
                            overflowWrap: 'break-word'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block cursor-default",
                                style: {
                                    color: colors.headline
                                },
                                children: "AI that eliminates work."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block cursor-default",
                                style: {
                                    color: '#FF4800'
                                },
                                children: "Software that runs your operations."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.2,
                            ease
                        },
                        className: "w-full max-w-[600px] text-left text-[16px] font-normal leading-relaxed md:text-[20px]",
                        style: {
                            color: colors.tagline,
                            overflowWrap: 'break-word'
                        },
                        children: taglineWords.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hero-word inline-block opacity-0",
                                "data-delay": 800 + i * 50,
                                children: [
                                    word,
                                    i < taglineWords.length - 1 ? '\u00A0' : ''
                                ]
                            }, i, true, {
                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.3,
                            ease
                        },
                        className: "mt-10 flex flex-wrap items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$MagneticButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    onClick: ()=>onNavigate('contact'),
                                    className: "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-medium text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:scale-[1.03] hover:shadow-xl",
                                    style: {
                                        background: '#FF4800'
                                    },
                                    children: [
                                        "Book Strategy Call",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                onClick: ()=>onNavigate('services'),
                                className: "inline-flex items-center justify-center gap-2 rounded-full border-[1.5px] px-7 py-3.5 text-[14px] font-medium transition-all duration-200 hover:scale-[1.02] hover:border-[#FF4800]/50 backdrop-blur-sm",
                                style: {
                                    borderColor: colors.secondaryBtnBorder,
                                    color: colors.secondaryBtnText,
                                    background: colors.secondaryBtnBg
                                },
                                children: [
                                    "See What We Build",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.4,
                            ease
                        },
                        className: "mt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[13px]",
                                style: {
                                    color: colors.ratingLabel
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 359,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-0 left-0 right-0 h-32",
                style: {
                    zIndex: 5,
                    background: isDark ? 'linear-gradient(to bottom, transparent, #0a0a14)' : 'linear-gradient(to bottom, transparent, var(--background))'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.6,
                    delay: 0.8
                },
                className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        y: [
                            0,
                            8,
                            0
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    },
                    className: "flex flex-col items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] uppercase tracking-widest",
                            style: {
                                color: colors.scrollText
                            },
                            children: "Scroll"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                            lineNumber: 396,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-8 w-5 items-start justify-center rounded-full pt-1.5",
                            style: {
                                border: `2px solid ${colors.scrollBorder}`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    y: [
                                        0,
                                        8,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                },
                                className: "h-2 w-1 rounded-full",
                                style: {
                                    background: '#FF4800'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                    lineNumber: 391,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: reviewsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "fixed inset-0 z-[9999] flex items-center justify-center p-4",
                    style: {
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(6px)'
                    },
                    onClick: ()=>setReviewsOpen(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.92,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.92,
                            y: 20
                        },
                        transition: {
                            duration: 0.25,
                            ease: [
                                0.34,
                                1.56,
                                0.64,
                                1
                            ]
                        },
                        onClick: (e)=>e.stopPropagation(),
                        className: "relative w-full max-w-lg rounded-2xl overflow-hidden",
                        style: {
                            background: isDark ? '#13131f' : '#ffffff',
                            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
                            boxShadow: '0 24px 64px rgba(0,0,0,0.25)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-6 py-5",
                                style: {
                                    borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-0.5",
                                                children: [
                                                    ...Array(5)
                                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: "h-5 w-5 fill-current",
                                                        style: {
                                                            color: '#FF4800'
                                                        }
                                                    }, i, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                lineNumber: 447,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[15px] font-semibold",
                                                        style: {
                                                            color: isDark ? '#f0f0f5' : '#1a1a2e'
                                                        },
                                                        children: "5.0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-1.5 text-[13px]",
                                                        style: {
                                                            color: isDark ? '#9ca3af' : '#6b7280'
                                                        },
                                                        children: "· Google Reviews"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                lineNumber: 452,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                        lineNumber: 446,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setReviewsOpen(false),
                                        className: "flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200",
                                        style: {
                                            background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                                            color: isDark ? '#9ca3af' : '#6b7280'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                            lineNumber: 466,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                        lineNumber: 461,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                lineNumber: 442,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-5 flex flex-col gap-5",
                                children: [
                                    {
                                        name: 'James Whitfield',
                                        role: 'VP of Engineering, FinServ Corp',
                                        avatar: 'JW',
                                        date: 'March 2024',
                                        text: 'Straveda transformed our entire infrastructure strategy. Their enterprise architecture expertise is second to none we modernized our core platform in under 6 months with zero disruption.'
                                    },
                                    {
                                        name: 'Priya Nambiar',
                                        role: 'CTO, HealthBridge Systems',
                                        avatar: 'PN',
                                        date: 'January 2024',
                                        text: 'Outstanding team. They aligned our IT roadmap with business goals in ways we couldn\'t achieve internally. The ROI was evident within the first quarter. Highly recommend Straveda.'
                                    }
                                ].map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl p-5",
                                        style: {
                                            background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)',
                                            border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.05)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-semibold text-white",
                                                        style: {
                                                            background: 'linear-gradient(135deg, #FF4800, #ff7040)'
                                                        },
                                                        children: review.avatar
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[14px] font-semibold",
                                                                style: {
                                                                    color: isDark ? '#f0f0f5' : '#1a1a2e'
                                                                },
                                                                children: review.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[12px]",
                                                                style: {
                                                                    color: isDark ? '#6b7280' : '#9ca3af'
                                                                },
                                                                children: review.role
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                                lineNumber: 504,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 shrink-0",
                                                        children: [
                                                            ...Array(5)
                                                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "h-3.5 w-3.5 fill-current",
                                                                style: {
                                                                    color: '#FF4800'
                                                                }
                                                            }, i, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                                lineNumber: 510,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                lineNumber: 493,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                size: 14,
                                                className: "mb-1.5 opacity-30",
                                                style: {
                                                    color: '#FF4800'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                lineNumber: 514,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] leading-relaxed",
                                                style: {
                                                    color: isDark ? '#9ca3af' : '#4a4a5a'
                                                },
                                                children: review.text
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                lineNumber: 515,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[11px]",
                                                style: {
                                                    color: isDark ? '#4b5563' : '#d1d5db'
                                                },
                                                children: review.date
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                lineNumber: 518,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, review.name, true, {
                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                        lineNumber: 488,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                lineNumber: 471,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 flex items-center justify-between",
                                style: {
                                    borderTop: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px]",
                                        style: {
                                            color: isDark ? '#6b7280' : '#9ca3af'
                                        },
                                        children: "Verified reviews via Google"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                        lineNumber: 530,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.google.com/search?q=Straveda+reviews",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-90",
                                        style: {
                                            background: '#FF4800'
                                        },
                                        children: [
                                            "View on Google",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                                lineNumber: 541,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                        lineNumber: 533,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                                lineNumber: 526,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                        lineNumber: 428,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                    lineNumber: 419,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/AnimatedHero.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(AnimatedHero, "X5gqyzUtQPUJsErm/lhVaUYJNqo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = AnimatedHero;
var _c;
__turbopack_context__.k.register(_c, "AnimatedHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/straveda/SubscribeSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SubscribeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const ease = [
    0.4,
    0,
    0.2,
    1
];
function SubscribeSection({ onNavigate }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [emailError, setEmailError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = resolvedTheme === 'dark';
    const validateEmail = (value)=>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }
        setEmailError('');
        setIsSubmitting(true);
        // Mocking the API response for static site
        setTimeout(()=>{
            setIsSuccess(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Welcome aboard! (Static Mode)', {
                description: 'You\'ve been subscribed to Straveda insights.'
            });
            setEmail('');
            setIsSubmitting(false);
            setTimeout(()=>setIsSuccess(false), 4000);
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "subscribe-section relative overflow-hidden py-24 md:py-28",
        style: {
            background: isDark ? '#12121e' : '#f8f8fc'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full",
                style: {
                    background: 'radial-gradient(circle, rgba(255,72,0,0.05) 0%, transparent 70%)'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full",
                style: {
                    background: 'radial-gradient(circle, rgba(255,72,0,0.03) 0%, transparent 70%)'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]",
                children: Array.from({
                    length: 8
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 h-full w-[1px]",
                        style: {
                            left: `${15 + i * 10}%`,
                            background: `linear-gradient(to bottom, transparent, ${isDark ? '#ffffff' : '#000000'}, transparent)`
                        }
                    }, i, false, {
                        fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-5xl mx-auto px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -40
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true,
                                margin: '-100px'
                            },
                            transition: {
                                duration: 0.8,
                                ease
                            },
                            className: "flex-1 text-center md:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.9
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    viewport: {
                                        once: true,
                                        margin: '-100px'
                                    },
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.1,
                                        ease
                                    },
                                    className: "inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6",
                                    style: {
                                        background: 'rgba(255,72,0,0.1)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        className: "h-6 w-6",
                                        style: {
                                            color: '#FF4800'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[32px] md:text-[40px] font-normal mb-4",
                                    style: {
                                        fontWeight: 400,
                                        color: isDark ? '#f0f0f5' : '#1a1a2e',
                                        lineHeight: 1.15,
                                        letterSpacing: '-1.5px'
                                    },
                                    children: "Stay ahead on AI and automation."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] leading-[1.5] max-w-[440px]",
                                    style: {
                                        color: isDark ? '#9ca3af' : '#6b7280',
                                        fontWeight: 400
                                    },
                                    children: "Weekly insights on AI integration, automation strategy, and mid-market technology. No fluff. No vendor pitches. Unsubscribe anytime."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex items-center gap-6 justify-center md:justify-start",
                                    children: [
                                        {
                                            label: 'Weekly digest',
                                            icon: '●'
                                        }
                                    ].map((badge, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: '#FF4800',
                                                        fontSize: '10px'
                                                    },
                                                    children: badge.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[13px]",
                                                    style: {
                                                        color: isDark ? '#9ca3af' : '#6b7280'
                                                    },
                                                    children: badge.label
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: 40
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true,
                                margin: '-100px'
                            },
                            transition: {
                                duration: 0.8,
                                delay: 0.15,
                                ease
                            },
                            className: "w-full md:w-auto md:min-w-[400px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "subscribe-card rounded-2xl p-8 md:p-10",
                                style: {
                                    background: isDark ? '#1a1a2e' : '#FFFFFF',
                                    border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)',
                                    boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.3)' : '0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[22px] font-normal mb-4",
                                        style: {
                                            fontWeight: 400,
                                            color: isDark ? '#f0f0f5' : '#1a1a2e',
                                            letterSpacing: '-0.5px'
                                        },
                                        children: "Get Weekly Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] leading-[1.5] mb-6",
                                        style: {
                                            color: isDark ? '#9ca3af' : '#6b7280',
                                            fontWeight: 400
                                        },
                                        children: "AI and automation strategy, delivered weekly."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.9
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        className: "flex flex-col items-center py-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center w-14 h-14 rounded-full mb-4",
                                                style: {
                                                    background: 'rgba(34,197,94,0.15)'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                    className: "h-7 w-7",
                                                    style: {
                                                        color: '#22c55e'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-[16px]",
                                                style: {
                                                    color: isDark ? '#f0f0f5' : '#1a1a2e'
                                                },
                                                children: "You're subscribed!"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] mt-1",
                                                style: {
                                                    color: isDark ? '#9ca3af' : '#6b7280'
                                                },
                                                children: "Check your inbox for a welcome email."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "flex flex-col gap-4",
                                        noValidate: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "subscribe-email",
                                                        className: "block text-[13px] font-medium mb-2",
                                                        style: {
                                                            color: isDark ? '#d1d5db' : '#1a1a2e'
                                                        },
                                                        children: "Email address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        id: "subscribe-email",
                                                        placeholder: "your@company.com",
                                                        className: `subscribe-input text-[14px] w-full py-3 px-4 rounded-lg outline-none transition-all duration-200 placeholder:text-[#9ca3af] ${emailError ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-transparent focus:ring-1 focus:ring-[#FF4800]'}`,
                                                        style: {
                                                            background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
                                                            border: emailError ? '1px solid #ef4444' : isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e5e7eb',
                                                            color: isDark ? '#f0f0f5' : '#1a1a2e'
                                                        },
                                                        value: email,
                                                        onChange: (e)=>{
                                                            setEmail(e.target.value);
                                                            if (emailError) setEmailError('');
                                                        },
                                                        "aria-invalid": !!emailError,
                                                        "aria-describedby": "subscribe-email-error"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 21
                                                    }, this),
                                                    emailError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        id: "subscribe-email-error",
                                                        className: "text-red-500 text-xs mt-1.5",
                                                        children: emailError
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                type: "submit",
                                                disabled: isSubmitting,
                                                whileHover: {
                                                    scale: 1.02
                                                },
                                                whileTap: {
                                                    scale: 0.98
                                                },
                                                className: "glow-hover w-full flex items-center justify-center gap-2 rounded-lg py-3 px-4 text-[14px] font-medium text-white transition-all duration-200 shadow-lg shadow-orange-500/15 disabled:opacity-50 disabled:cursor-not-allowed",
                                                style: {
                                                    background: '#FF4800'
                                                },
                                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-4 w-4 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Subscribing..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        "Get Weekly Insights",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[12px] text-center mt-1",
                                                style: {
                                                    color: '#9ca3af'
                                                },
                                                children: "One email per week. Real insights, not sales pitches."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/SubscribeSection.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(SubscribeSection, "owBD9qUWF/ao9KRqWJRne8V2BkM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SubscribeSection;
var _c;
__turbopack_context__.k.register(_c, "SubscribeSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/straveda/WaveDivider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaveDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
function WaveDivider({ color = '#f8f8fc', flip = false, height = 80 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        viewport: {
            once: true,
            margin: '-20px'
        },
        transition: {
            duration: 0.8,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        },
        style: {
            position: 'relative',
            width: '100%',
            height: `${height}px`,
            overflow: 'hidden',
            marginTop: '-1px',
            transform: flip ? 'scaleY(-1)' : 'none'
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1440 80",
            preserveAspectRatio: "none",
            style: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z",
                fill: color
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/WaveDivider.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/WaveDivider.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/WaveDivider.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = WaveDivider;
var _c;
__turbopack_context__.k.register(_c, "WaveDivider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/straveda/pages/HomePage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.mjs [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.mjs [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.mjs [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$AnimatedHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/AnimatedHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$SubscribeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/SubscribeSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$WaveDivider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/WaveDivider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const ease = [
    0.4,
    0,
    0.2,
    1
];
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease
        }
    }
};
const bentoItems = [
    {
        title: "Weekly Shipping, Not Quarterly Roadmaps",
        description: "One week sprints with public progress logs. You see builds every Friday, approve Monday, ship Tuesday. No black box discovery phases that last three months.",
        size: "large",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
    },
    {
        title: "Automation First, Always",
        description: "Before we build feature one, we audit what can be removed, integrated, or automated. Most agencies pad scope. We prune it then automate what's left.",
        size: "normal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"]
    },
    {
        title: "You Own Everything",
        description: "Full code ownership. Complete documentation. Zero vendor lock in. If we disappear tomorrow, you can run and maintain every system we built. That's non negotiable.",
        size: "normal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
    },
    {
        title: "Priced to ROI in 60 Days",
        description: "Every proposal includes projected time savings, cost reduction, or revenue lift. If a system doesn't pay for itself in one quarter, we don't recommend building it.",
        size: "normal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
    },
    {
        title: "One Team, End to End",
        description: "Strategy, AI engineering, design, and deployment under one roof. One Slack channel. One point of accountability. No vendor chains. No handoff loss.",
        size: "normal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"]
    },
    {
        title: "Senior Execution",
        description: "We cap engagements each quarter so we can ship fast and stay accountable. You get senior attention on every build not a deck from partners and delivery from juniors.",
        size: "normal",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    }
];
const services = [
    {
        badge: 'Automation',
        title: 'AI & Business Automation',
        bullets: [
            'WhatsApp flows that qualify leads and drive conversions',
            'Behavior Triggered email sequences for engagement and retention',
            'AI agents handling tier 1 customer support',
            'Workflow automation reducing manual operational load'
        ],
        metric: '30 to 60% reduction in manual operations within the first 90 days',
        ctaLabel: 'See automation',
        ctaDesc: 'Book a free strategy call'
    },
    {
        badge: 'Software',
        title: 'Custom Software & Systems',
        bullets: [
            'AI powered CRMs designed for real team adoption',
            'Real time dashboards replacing fragmented monitoring tools',
            'Internal systems built around your workflows (not rigid SaaS tools)',
            'Centralized data systems for better decision making'
        ],
        ctaLabel: 'Explore custom',
        ctaDesc: 'Built around your workflow'
    },
    {
        badge: 'Strategy',
        title: 'AI Strategy & Integration',
        bullets: [
            'Deployment of GPT Class models and advanced AI APIs',
            'Custom LLM integration tailored to business workflows',
            'End To End AI architecture, training, and deployment',
            'Seamless integration into your existing tech stack'
        ],
        ctaLabel: 'Talk AI strategy',
        ctaDesc: 'Embedded in your operations'
    },
    {
        badge: 'Digital',
        title: 'Web Development & 3D Experiences',
        bullets: [
            'High Performance websites built using modern frameworks (e.g., Next.js)',
            '3D interactive experiences for premium brand differentiation',
            'Conversion Focused landing pages (not just visual design)',
            'Fast loading, SEO Ready, Edge Deployed architecture'
        ],
        metric: '2 to 4x improvement in conversion rates compared to Template Based sites',
        ctaLabel: 'View web capabilities',
        ctaDesc: 'Edge Deployed, conversion first'
    }
];
// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ service, onNavigate, isDark }) {
    const bg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.70)';
    const border = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)';
    const shadow = isDark ? '0 4px 24px rgba(0,0,0,0.30)' : '0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "svc-card relative flex h-full flex-col overflow-hidden rounded-[24px]",
        style: {
            background: bg,
            backdropFilter: 'blur(16px) saturate(1.8)',
            WebkitBackdropFilter: 'blur(16px) saturate(1.8)',
            border: `1px solid ${border}`,
            boxShadow: shadow,
            transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease',
            fontFamily: "var(--font-geist-sans), system-ui, sans-serif"
        },
        onMouseEnter: (e)=>{
            const el = e.currentTarget;
            el.style.transform = 'translateY(-6px)';
            el.style.borderColor = 'rgba(255,72,0,0.22)';
            el.style.boxShadow = isDark ? '0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,72,0,0.18)' : '0 8px 32px rgba(0,0,0,0.09), 0 0 0 1px rgba(255,72,0,0.14), 0 20px 40px rgba(255,72,0,0.08)';
            const glow = el.querySelector('.svc-glow');
            if (glow) glow.style.opacity = '1';
        },
        onMouseLeave: (e)=>{
            const el = e.currentTarget;
            el.style.transform = '';
            el.style.borderColor = border;
            el.style.boxShadow = shadow;
            const glow = el.querySelector('.svc-glow');
            if (glow) glow.style.opacity = '0';
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "svc-glow pointer-events-none absolute inset-x-[10%] top-0 h-px",
                style: {
                    background: 'linear-gradient(90deg, transparent, rgba(255,72,0,0.6), transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-[128px] flex-col justify-start p-[26px] pb-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mb-[14px] w-fit rounded-full px-[11px] py-[4px] text-[10px] font-bold uppercase tracking-[0.18em]",
                        style: {
                            color: '#FF4800',
                            background: 'rgba(255,72,0,0.09)',
                            border: '1px solid rgba(255,72,0,0.15)'
                        },
                        children: service.badge
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[21px] font-bold leading-[1.2] tracking-[-0.035em] text-gray-900 dark:text-white",
                        children: service.title
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-[26px] my-[20px] h-px",
                style: {
                    background: isDark ? 'rgba(255,255,255,0.07)' : 'linear-gradient(90deg, rgba(0,0,0,0.06), rgba(0,0,0,0.03), rgba(0,0,0,0.06))'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-[26px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-col gap-[11px]",
                    children: service.bullets.map((bullet, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-start gap-[10px] text-[13.5px] font-normal leading-[1.5] text-gray-700 dark:text-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full",
                                    style: {
                                        background: '#FF4800',
                                        boxShadow: '0 0 4px rgba(255,72,0,0.4)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: bullet
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            service.metric ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-[26px] mt-[20px] rounded-[10px] px-[14px] py-[11px]",
                style: {
                    background: 'rgba(255,72,0,0.07)',
                    border: '1px solid rgba(255,72,0,0.13)',
                    minHeight: '62px',
                    display: 'flex',
                    alignItems: 'flex-start'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[12px] font-semibold leading-[1.55]",
                    style: {
                        color: '#FF4800'
                    },
                    children: [
                        "→ ",
                        service.metric
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-[26px] mt-[20px] px-[14px] py-[11px] invisible",
                "aria-hidden": "true",
                style: {
                    minHeight: '62px',
                    display: 'flex',
                    alignItems: 'flex-start'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[12px] leading-[1.55]",
                    children: "30–60% reduction in manual operations within the first 90 days"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                    lineNumber: 189,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-[20px] flex items-center justify-between gap-3 px-[26px] pb-[22px] pt-[18px]",
                style: {
                    background: 'linear-gradient(135deg, rgba(255,72,0,0.18) 0%, rgba(255,72,0,0.11) 60%, rgba(255,72,0,0.07) 100%)',
                    borderTop: '1px solid rgba(255,72,0,0.12)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-x-0 top-0 h-px",
                        style: {
                            background: 'linear-gradient(90deg, transparent, rgba(255,72,0,0.35), transparent)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 flex-1 flex-col gap-[3px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "whitespace-nowrap text-[12.5px] font-bold tracking-[0.01em]",
                                style: {
                                    color: '#FF4800'
                                },
                                children: [
                                    service.ctaLabel,
                                    " →"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11.5px] font-medium leading-[1.3]",
                                style: {
                                    color: 'rgba(255,72,0,0.75)'
                                },
                                children: service.ctaDesc
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onNavigate('services'),
                        "aria-label": service.ctaLabel,
                        className: "flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full transition-all duration-200",
                        style: {
                            background: '#FF4800',
                            boxShadow: '0 4px 12px rgba(255,72,0,0.35)'
                        },
                        onMouseEnter: (e)=>{
                            const b = e.currentTarget;
                            b.style.background = '#e03e00';
                            b.style.transform = 'scale(1.1) translateX(1px)';
                            b.style.boxShadow = '0 6px 20px rgba(255,72,0,0.45)';
                        },
                        onMouseLeave: (e)=>{
                            const b = e.currentTarget;
                            b.style.background = '#FF4800';
                            b.style.transform = '';
                            b.style.boxShadow = '0 4px 12px rgba(255,72,0,0.35)';
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            size: 14,
                            color: "#fff",
                            strokeWidth: 2.5
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c = ServiceCard;
// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
    {
        name: 'Rachel M.',
        role: 'Director of Operations',
        company: 'Professional Services',
        quote: 'We had too many manual processes before working with Straveda Tech. Their business process automation streamlined our workflows and reporting. Now everything runs faster with fewer errors and much better visibility.',
        stars: 5
    }
];
function getInitials(name) {
    return name.split(' ').map((n)=>n.charAt(0)).join('').toUpperCase();
}
function TestimonialsCarousel() {
    const t = testimonials[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-16 md:py-24 overflow-hidden",
        style: {
            background: 'linear-gradient(135deg, #0e0c1c 0%, #1a1535 50%, #0e0c1c 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                style: {
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '28px 28px'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                style: {
                    width: '700px',
                    height: '400px',
                    background: 'radial-gradient(ellipse at center, rgba(255,72,0,0.10) 0%, rgba(255,72,0,0.03) 40%, transparent 70%)'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute top-0 left-0 right-0 h-px",
                style: {
                    background: 'linear-gradient(90deg, transparent, rgba(255,72,0,0.4) 50%, transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 16
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: '-80px'
                        },
                        transition: {
                            duration: 0.6,
                            ease
                        },
                        className: "mb-6 text-[11px] font-semibold uppercase tracking-widest",
                        style: {
                            color: '#FF4800'
                        },
                        children: "Client Feedback"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: '-80px'
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.1,
                            ease
                        },
                        className: "mb-6 flex items-center justify-center gap-1",
                        children: [
                            ...Array(t.stars)
                        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                className: "h-4 w-4 fill-current",
                                style: {
                                    color: '#FBBF24'
                                }
                            }, i, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 242,
                                columnNumber: 46
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        initial: {
                            opacity: 0,
                            scale: 0.8
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: true,
                            margin: '-80px'
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.15,
                            ease
                        },
                        className: "block leading-none mb-2",
                        style: {
                            fontSize: '64px',
                            color: '#FF4800',
                            opacity: 0.6
                        },
                        children: "❝"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: '-80px'
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.2,
                            ease
                        },
                        className: "text-[clamp(1.1rem,2.5vw,1.45rem)] italic leading-[1.75] font-light",
                        style: {
                            color: 'rgba(255,255,255,0.85)'
                        },
                        children: t.quote
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scaleX: 0
                        },
                        whileInView: {
                            scaleX: 1
                        },
                        viewport: {
                            once: true,
                            margin: '-80px'
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.35,
                            ease: [
                                0.4,
                                0,
                                0.2,
                                1
                            ]
                        },
                        className: "mx-auto my-8",
                        style: {
                            width: '48px',
                            height: '1px',
                            background: 'rgba(255,72,0,0.6)',
                            transformOrigin: 'center'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: '-80px'
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.4,
                            ease
                        },
                        className: "flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white",
                                style: {
                                    background: 'linear-gradient(135deg, #FF4800 0%, #2B2358 100%)'
                                },
                                children: getInitials(t.name)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] font-semibold",
                                        style: {
                                            color: 'rgba(255,255,255,0.9)'
                                        },
                                        children: t.name
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px]",
                                        style: {
                                            color: 'rgba(255,255,255,0.45)'
                                        },
                                        children: [
                                            t.role,
                                            t.company && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    " · ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'rgba(255,72,0,0.8)'
                                                        },
                                                        children: t.company
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 115
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 251,
                                                columnNumber: 106
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, this);
}
_c1 = TestimonialsCarousel;
// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
    {
        question: 'What services does Straveda Tech offer?',
        answer: 'We provide AI automation, custom software development, cloud & DevOps, cybersecurity, and data analytics solutions built to reduce manual work and scale your operations.'
    },
    {
        question: 'How can AI automation benefit my business?',
        answer: 'AI automation reduces repetitive tasks, lowers costs, and improves decision making. Common use cases include lead qualification, customer support, and workflow automation.'
    },
    {
        question: 'Do you build custom solutions or use ready made tools?',
        answer: 'We build fully custom solutions tailored to your workflows, goals, and scalability needs — ensuring better performance and long term ROI.'
    },
    {
        question: 'How long does a project take?',
        answer: 'Small systems: 1 to 2 weeks. Medium projects: 3 to 5 weeks. Large solutions: 6 to 9+ weeks. We follow a structured process from planning to deployment.'
    },
    {
        question: 'Is AI automation suitable for startups?',
        answer: 'Yes. Startups use it to scale faster, while enterprises use it to optimize operations. We tailor solutions to your growth stage.'
    },
    {
        question: 'How secure are your solutions?',
        answer: 'We follow industry standards like GDPR, ISO, SOC2, and HIPAA to ensure strong data protection and system security.'
    },
    {
        question: 'Do you provide post launch support?',
        answer: 'Yes. We offer ongoing maintenance, optimization, and upgrades to keep your system aligned with business growth.'
    },
    {
        question: 'Can you integrate with existing tools?',
        answer: 'Yes. We integrate with CRMs, ERPs, payment systems, and third party APIs without disrupting your current setup.'
    },
    {
        question: 'Which industries do you work with?',
        answer: 'We serve healthcare, finance, retail, manufacturing, education, and tech startups.'
    },
    {
        question: 'What makes Straveda Tech different?',
        answer: 'We focus on outcomes not just development. Our approach is AI First, fully custom, and built for scalability and ROI.'
    },
    {
        question: 'How do I get started?',
        answer: 'Share your requirements → Get a tailored strategy → Start with a clear execution roadmap. Book a 30 Min call and we\'ll send a proposal within 48 hours.'
    }
];
function FAQSection() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggle = (index)=>setOpenIndex(openIndex === index ? null : index);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "section-faq",
        className: "glow-hover py-24 bg-white dark:bg-[#0a0a14] border-t border-black/[0.06] dark:border-white/[0.06]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: '-100px'
                    },
                    transition: {
                        duration: 0.8,
                        ease
                    },
                    className: "mb-14 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-5 text-[11px] font-medium uppercase tracking-widest",
                            style: {
                                color: '#FF4800'
                            },
                            children: "FREQUENTLY ASKED QUESTIONS"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-5 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 hidden lg:block flex-shrink-0 w-1 rounded-full",
                                    style: {
                                        height: '52px',
                                        background: 'linear-gradient(180deg, #FF4800 0%, rgba(255,72,0,0.15) 100%)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-normal heading-gradient text-[clamp(2rem,5vw,3.5rem)]",
                                    style: {
                                        lineHeight: 1.0,
                                        letterSpacing: '-2.05px'
                                    },
                                    children: "Questions? Here's what teams ask first."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 283,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        margin: '-100px'
                    },
                    variants: {
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.08
                            }
                        }
                    },
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: {
                                hidden: {
                                    opacity: 0,
                                    y: 20
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        ease
                                    }
                                }
                            },
                            className: "overflow-hidden",
                            style: {
                                borderLeft: openIndex === index ? '3px solid #FF4800' : '3px solid transparent',
                                transition: 'border-color 0.3s ease'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-magnetic": true,
                                    onClick: ()=>toggle(index),
                                    className: "flex w-full items-center justify-between px-5 py-5 text-left transition-colors duration-200 border-b border-black/[0.06] dark:border-white/[0.06] hover:bg-[rgba(255,72,0,0.02)] dark:hover:bg-white/[0.03]",
                                    "aria-expanded": openIndex === index,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pr-4 text-[16px] font-medium text-[#1a1a2e] dark:text-[#e5e7eb]",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 292,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                            animate: {
                                                rotate: openIndex === index ? 45 : 0
                                            },
                                            transition: {
                                                duration: 0.3,
                                                ease
                                            },
                                            className: `flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${openIndex === index ? 'bg-[#FF4800] text-white' : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#6b7280] dark:text-[#9ca3af]'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 293,
                                                columnNumber: 357
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 291,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    initial: false,
                                    children: openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: 'auto',
                                            opacity: 1
                                        },
                                        exit: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.35,
                                            ease
                                        },
                                        style: {
                                            overflow: 'hidden'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "px-5 pb-5 text-[15px] leading-[1.5] text-[#6b7280] dark:text-[#9ca3af]",
                                            children: faq.answer
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 298,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 297,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 290,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
            lineNumber: 280,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
_s(FAQSection, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c2 = FAQSection;
function HomePage({ onNavigate }) {
    _s1();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = resolvedTheme === 'dark';
    const capScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [capActiveIdx, setCapActiveIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleCapScroll = ()=>{
        const el = capScrollRef.current;
        if (!el) return;
        const cardWidth = el.scrollWidth / bentoItems.length;
        setCapActiveIdx(Math.round(el.scrollLeft / cardWidth));
    };
    const scrollCapTo = (i)=>{
        const el = capScrollRef.current;
        if (!el) return;
        const cardWidth = el.scrollWidth / bentoItems.length;
        el.scrollTo({
            left: cardWidth * i,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-4a2575c74565639e" + " " + "overflow-x-hidden w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "4a2575c74565639e",
                children: ".no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "section-hero",
                className: "jsx-4a2575c74565639e",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$AnimatedHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onNavigate: onNavigate
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 340,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                id: "section-partners",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    margin: '-60px'
                },
                transition: {
                    duration: 0.7,
                    ease
                },
                className: "py-14 md:py-24 bg-white dark:bg-[#0a0a14] relative border-t border-black/[0.06] dark:border-white/[0.06] overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4a2575c74565639e" + " " + "mx-auto max-w-4xl px-4 sm:px-4 sm:px-6 lg:px-8 relative text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#FF4800'
                            },
                            className: "jsx-4a2575c74565639e" + " " + "mb-5 text-[11px] font-medium uppercase tracking-widest",
                            children: "Where we stand"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4a2575c74565639e" + " " + "flex items-start gap-5 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: '52px',
                                        background: 'linear-gradient(180deg, #FF4800 0%, rgba(255,72,0,0.15) 100%)'
                                    },
                                    className: "jsx-4a2575c74565639e" + " " + "mt-2 hidden lg:block flex-shrink-0 w-1 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                        lineHeight: 1.05,
                                        letterSpacing: '-1.5px',
                                        overflowWrap: 'break-word',
                                        wordBreak: 'break-word'
                                    },
                                    className: "jsx-4a2575c74565639e" + " " + "font-normal heading-gradient",
                                    children: "A Strong Foundation for Scalable Growth."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 350,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-4a2575c74565639e" + " " + "mt-4 text-[16px] leading-[1.7] text-[#6b7280] dark:text-[#9ca3af] max-w-2xl mx-auto",
                            children: "We take on a limited number of engagements each quarter so we can ship fast and stay accountable. Our current clients are in D2C, B2B SaaS, and professional services."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4a2575c74565639e" + " " + "mt-8 flex flex-wrap items-center justify-center gap-3",
                            children: [
                                {
                                    label: 'Fixed price after discovery',
                                    icon: '✓'
                                },
                                {
                                    label: 'Weekly progress updates',
                                    icon: '✓'
                                },
                                {
                                    label: 'Full code ownership',
                                    icon: '✓'
                                },
                                {
                                    label: 'No long term lock in',
                                    icon: '✓'
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'rgba(255,72,0,0.06)',
                                        border: '1px solid rgba(255,72,0,0.12)'
                                    },
                                    className: "jsx-4a2575c74565639e" + " " + "flex items-center gap-2 rounded-full px-4 py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#FF4800'
                                            },
                                            className: "jsx-4a2575c74565639e" + " " + "text-[13px] font-semibold",
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 356,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-4a2575c74565639e" + " " + "text-[13px] font-medium text-[#6b7280] dark:text-[#9ca3af]",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 357,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                    lineNumber: 346,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true,
                    margin: '-60px'
                },
                transition: {
                    duration: 0.7,
                    ease
                },
                className: "py-14 md:py-20 bg-white dark:bg-[#0a0a14] border-t border-black/[0.06] dark:border-white/[0.06]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4a2575c74565639e" + " " + "mx-auto max-w-7xl px-4 sm:px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4a2575c74565639e" + " " + "mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4a2575c74565639e" + " " + "flex items-start gap-5 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                height: '52px',
                                                background: 'linear-gradient(180deg, #FF4800 0%, rgba(255,72,0,0.15) 100%)'
                                            },
                                            className: "jsx-4a2575c74565639e" + " " + "mt-2 hidden lg:block flex-shrink-0 w-1 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                                                lineHeight: 1.1,
                                                letterSpacing: '-1.5px',
                                                overflowWrap: 'break-word'
                                            },
                                            className: "jsx-4a2575c74565639e" + " " + "font-normal heading-gradient",
                                            children: "Built on enterprise grade infrastructure"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-4a2575c74565639e" + " " + "text-[15px] leading-[1.65] text-[#6b7280] dark:text-[#9ca3af] max-w-lg lg:ml-6",
                                    children: "We use proven, scalable technologies not experimental tools. Your systems will be maintainable and upgradeable for years."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 'min(340px, 50%)',
                                        background: 'linear-gradient(to right, #FF4800, rgba(255,72,0,0.15))'
                                    },
                                    className: "jsx-4a2575c74565639e" + " " + "mt-6 h-px"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: containerVariants,
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true,
                                margin: '-60px'
                            },
                            className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4",
                            children: [
                                {
                                    name: 'AWS',
                                    brandColor: '#FF9900',
                                    src: '/logos/aws.png',
                                    w: 80,
                                    h: 40
                                },
                                {
                                    name: 'Google Cloud',
                                    brandColor: '#4285F4',
                                    src: '/logos/gcp.png',
                                    w: 100,
                                    h: 40
                                },
                                {
                                    name: 'Docker',
                                    brandColor: '#2496ED',
                                    src: '/logos/docker.png',
                                    w: 90,
                                    h: 40
                                },
                                {
                                    name: 'Microsoft Azure',
                                    brandColor: '#0078D4',
                                    src: '/logos/azure.png',
                                    w: 90,
                                    h: 40
                                },
                                {
                                    name: 'Vercel',
                                    brandColor: '#000000',
                                    src: '/logos/vercel.png',
                                    w: 90,
                                    h: 40
                                },
                                {
                                    name: 'PostgreSQL',
                                    brandColor: '#336791',
                                    src: '/logos/postgresql.jpg',
                                    w: 90,
                                    h: 40
                                },
                                {
                                    name: 'Next.js',
                                    brandColor: '#000000',
                                    src: '/logos/nextjs.svg',
                                    w: 90,
                                    h: 40
                                }
                            ].map((partner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: cardVariants,
                                    whileHover: {
                                        y: -5,
                                        scale: 1.02
                                    },
                                    transition: {
                                        duration: 0.25,
                                        ease
                                    },
                                    className: "group relative flex flex-col items-center justify-center gap-3 rounded-xl px-6 py-6 overflow-hidden cursor-default",
                                    style: {
                                        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.75)',
                                        backdropFilter: 'blur(20px) saturate(1.8) brightness(1.02)',
                                        WebkitBackdropFilter: 'blur(20px) saturate(1.8) brightness(1.02)',
                                        border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1.5px solid rgba(255,255,255,0.9)',
                                        boxShadow: isDark ? 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.45)' : 'inset 0 2px 0 rgba(255,255,255,0.95), 0 8px 24px rgba(0,0,0,0.08)',
                                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = `${partner.brandColor}88`;
                                        e.currentTarget.style.boxShadow = isDark ? `inset 0 1px 0 rgba(255,255,255,0.08), 0 12px 40px ${partner.brandColor}22` : `inset 0 2px 0 rgba(255,255,255,0.95), 0 12px 40px ${partner.brandColor}22`;
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.9)';
                                        e.currentTarget.style.boxShadow = isDark ? 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.45)' : 'inset 0 2px 0 rgba(255,255,255,0.95), 0 8px 24px rgba(0,0,0,0.08)';
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                backgroundColor: partner.brandColor
                                            },
                                            className: "jsx-4a2575c74565639e" + " " + "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4a2575c74565639e" + " " + "relative h-10 w-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: partner.src,
                                                alt: partner.name,
                                                fill: true,
                                                sizes: "(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 14vw",
                                                className: "object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 388,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-4a2575c74565639e" + " " + "relative text-[11px] font-medium tracking-wide text-[#9ca3af] dark:text-[#6b7280]",
                                            children: partner.name
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 390,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, partner.name, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "section-services",
                style: {
                    background: isDark ? `radial-gradient(at 15% 80%, rgba(255,72,0,0.06) 0%, transparent 50%),
               radial-gradient(at 85% 15%, rgba(43,35,88,0.08) 0%, transparent 50%),
               #0a0a14` : `radial-gradient(at 15% 80%, rgba(255,72,0,0.09) 0%, transparent 50%),
               radial-gradient(at 85% 15%, rgba(43,35,88,0.10) 0%, transparent 50%),
               radial-gradient(at 50% 50%, rgba(255,72,0,0.04) 0%, transparent 60%),
               #e8e8f0`,
                    borderTop: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)'
                },
                className: "jsx-4a2575c74565639e" + " " + "py-12 md:py-24 px-4 sm:px-6 section-glow-top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4a2575c74565639e" + " " + "mx-auto max-w-[1280px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: '-100px'
                            },
                            transition: {
                                duration: 0.8,
                                ease
                            },
                            className: "mb-8 md:mb-14",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#FF4800'
                                    },
                                    className: "jsx-4a2575c74565639e" + " " + "mb-3 text-[11px] font-semibold uppercase tracking-[0.18em]",
                                    children: "WHAT WE BUILD"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4a2575c74565639e" + " " + "flex items-start gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '3px',
                                                height: '52px',
                                                background: 'linear-gradient(180deg, #FF4800 0%, rgba(255,72,0,0.15) 100%)'
                                            },
                                            className: "jsx-4a2575c74565639e" + " " + "mt-1 hidden lg:block flex-shrink-0 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: 'clamp(1.6rem, 5vw, 3rem)',
                                                lineHeight: 1.1,
                                                letterSpacing: '-1px',
                                                overflowWrap: 'break-word'
                                            },
                                            className: "jsx-4a2575c74565639e" + " " + "font-normal heading-gradient",
                                            children: "One Goal: Systems That Run Without You."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 417,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: {
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            },
                            initial: "hidden",
                            whileInView: "visible",
                            viewport: {
                                once: true,
                                margin: '-60px'
                            },
                            className: "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4",
                            children: services.map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: {
                                        hidden: {
                                            opacity: 0,
                                            y: 40
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.6,
                                                ease
                                            }
                                        }
                                    },
                                    className: "h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                                        service: service,
                                        onNavigate: onNavigate,
                                        isDark: isDark
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 443,
                                        columnNumber: 17
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 442,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 434,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                    lineNumber: 415,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$WaveDivider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                color: isDark ? '#12121e' : '#f8f8fc',
                flip: true
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "section-capabilities",
                style: {
                    background: isDark ? '#12121e' : '#f8f8fc'
                },
                className: "jsx-4a2575c74565639e" + " " + "py-12 md:py-24 section-glow-top relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "pointer-events-none absolute inset-0 grid-pattern"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 455,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "pointer-events-none absolute inset-0 dot-grid-dense"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: '-100px'
                                },
                                transition: {
                                    duration: 0.8,
                                    ease
                                },
                                className: "mb-8 md:mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#FF4800'
                                        },
                                        className: "jsx-4a2575c74565639e" + " " + "mb-5 text-[11px] font-medium uppercase tracking-widest",
                                        children: "WHY STRAVEDA"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 459,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4a2575c74565639e" + " " + "flex items-start gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '52px',
                                                    background: 'linear-gradient(180deg, #FF4800 0%, rgba(255,72,0,0.15) 100%)'
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "mt-2 hidden lg:block flex-shrink-0 w-1 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 461,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    lineHeight: 1.0,
                                                    letterSpacing: '-2.05px'
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "font-normal heading-gradient text-[clamp(2rem,5vw,3.5rem)]",
                                                children: "Enterprise Grade Execution, Without the Complexity."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 462,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 460,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 458,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
                                },
                                className: "jsx-4a2575c74565639e" + " " + "relative -mx-6 lg:-mx-8 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    ref: capScrollRef,
                                    onScroll: handleCapScroll,
                                    variants: containerVariants,
                                    initial: "hidden",
                                    whileInView: "visible",
                                    viewport: {
                                        once: true,
                                        margin: '-100px'
                                    },
                                    className: "flex gap-5 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 no-scrollbar snap-x snap-mandatory",
                                    children: bentoItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            variants: cardVariants,
                                            className: "group relative flex-shrink-0 snap-center overflow-hidden rounded-2xl transition-all duration-300 cursor-default flex flex-col",
                                            style: {
                                                width: 'clamp(260px, 78vw, 440px)',
                                                minHeight: '300px',
                                                padding: 'clamp(24px, 5vw, 40px) clamp(20px, 4vw, 36px)',
                                                background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.75)',
                                                backdropFilter: 'blur(20px) saturate(1.8) brightness(1.02)',
                                                WebkitBackdropFilter: 'blur(20px) saturate(1.8) brightness(1.02)',
                                                border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1.5px solid rgba(255,255,255,0.9)',
                                                boxShadow: isDark ? 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.45)' : 'inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08)'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.borderColor = 'rgba(255,72,0,0.35)';
                                                e.currentTarget.style.boxShadow = isDark ? 'inset 0 1px 0 rgba(255,255,255,0.08), 0 12px 40px rgba(255,72,0,0.15), 0 24px 48px rgba(0,0,0,0.4)' : 'inset 0 2px 0 rgba(255,255,255,0.95), 0 12px 40px rgba(255,72,0,0.12), 0 24px 48px rgba(0,0,0,0.08)';
                                                e.currentTarget.style.transform = 'translateY(-6px)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.9)';
                                                e.currentTarget.style.boxShadow = isDark ? 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.45)' : 'inset 0 2px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: 'linear-gradient(135deg, rgba(255,72,0,0.04) 0%, transparent 55%)'
                                                    },
                                                    className: "jsx-4a2575c74565639e" + " " + "pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: isDark ? 'rgba(255,72,0,0.12)' : 'rgba(255,72,0,0.08)'
                                                    },
                                                    className: "jsx-4a2575c74565639e" + " " + "mb-8 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        className: "h-7 w-7",
                                                        style: {
                                                            color: '#FF4800'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                    lineNumber: 470,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                                                        lineHeight: 1.15,
                                                        letterSpacing: '-0.4px',
                                                        color: isDark ? '#f0f0f5' : '#1a1a2e'
                                                    },
                                                    className: "jsx-4a2575c74565639e" + " " + "mb-4 font-normal",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: isDark ? '#9ca3af' : '#6b7280'
                                                    },
                                                    className: "jsx-4a2575c74565639e" + " " + "text-[15px] leading-[1.7] flex-grow",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                    lineNumber: 474,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: 'linear-gradient(90deg, #FF4800, rgba(255,72,0,0.15))'
                                                    },
                                                    className: "jsx-4a2575c74565639e" + " " + "absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.title, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 468,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4a2575c74565639e" + " " + "mt-10 flex items-center justify-center gap-3",
                                children: bentoItems.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollCapTo(i),
                                        "aria-label": `Go to card ${i + 1}`,
                                        style: {
                                            width: capActiveIdx === i ? '36px' : '8px',
                                            height: capActiveIdx === i ? '36px' : '8px',
                                            borderRadius: '50%',
                                            border: capActiveIdx === i ? `1.5px solid ${isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)'}` : 'none',
                                            background: capActiveIdx === i ? 'transparent' : isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.18)',
                                            padding: 0,
                                            cursor: 'pointer'
                                        },
                                        className: "jsx-4a2575c74565639e" + " " + "transition-all duration-300 flex items-center justify-center",
                                        children: capActiveIdx === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: isDark ? '#f0f0f5' : '#1a1a2e'
                                            },
                                            className: "jsx-4a2575c74565639e" + " " + "w-2 h-2 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 483,
                                            columnNumber: 40
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 457,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 454,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "section-about",
                className: "jsx-4a2575c74565639e" + " " + "relative py-12 md:py-24 bg-[#f8f8fc] dark:bg-[#0a0a14]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "pointer-events-none absolute inset-0 grid-pattern"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 492,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "pointer-events-none absolute inset-0 dot-grid-dense"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 493,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "mx-auto flex w-full max-w-7xl flex-col gap-8 md:gap-16 px-6 lg:flex-row lg:px-8 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -40
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: '-100px'
                                },
                                transition: {
                                    duration: 0.8,
                                    ease
                                },
                                className: "flex w-full flex-col justify-center lg:w-[40%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderLeft: '4px solid #FF4800'
                                    },
                                    className: "jsx-4a2575c74565639e" + " " + "flex flex-col gap-8 pl-6",
                                    children: [
                                        {
                                            val: '55%',
                                            label: 'Manual Work Reduced'
                                        },
                                        {
                                            val: '3–5x',
                                            label: 'Operational Efficiency'
                                        },
                                        {
                                            val: '100%',
                                            label: 'Code Ownership'
                                        },
                                        {
                                            val: 'End-to-End',
                                            label: 'Strategy → Build → Deploy'
                                        }
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-4a2575c74565639e",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: 'clamp(36px, 5.5vw, 64px)',
                                                        fontWeight: 700,
                                                        lineHeight: 1,
                                                        letterSpacing: '-0.03em'
                                                    },
                                                    className: "jsx-4a2575c74565639e" + " " + "text-[#1a1a2e] dark:text-[#f0f0f5]",
                                                    children: s.val
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                    lineNumber: 504,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: '#6b7280',
                                                        letterSpacing: '0.01em'
                                                    },
                                                    className: "jsx-4a2575c74565639e" + " " + "mt-2 text-[14px] font-normal tracking-wide",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, s.label, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 503,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 496,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 495,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: '-100px'
                                },
                                transition: {
                                    duration: 0.8,
                                    ease
                                },
                                className: "flex w-full flex-col justify-center lg:w-[60%]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#FF4800'
                                        },
                                        className: "jsx-4a2575c74565639e" + " " + "mb-5 text-[11px] font-medium uppercase tracking-widest",
                                        children: "WHO WE ARE"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4a2575c74565639e" + " " + "flex items-start gap-5 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '52px',
                                                    background: 'linear-gradient(180deg, #FF4800 0%, rgba(255,72,0,0.15) 100%)'
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "mt-2 hidden lg:block flex-shrink-0 w-1 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 528,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                                    lineHeight: 1.1,
                                                    letterSpacing: '-1px'
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "font-normal heading-gradient",
                                                children: "We Get It. Because We've Lived It."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 529,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 527,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-4a2575c74565639e" + " " + "text-[18px] leading-[1.7] text-[#6b7280] dark:text-[#9ca3af] text-justify hyphens-auto",
                                        children: "Every growing company hits the same wall. Too many tools. Spreadsheets that don't sync. Your best people spending Friday afternoons doing work that shouldn't exist. You don't need another vendor; you need someone who actually understands the problem. We do. We've built companies. We've watched smart founders lose momentum to operational drag. We've felt the frustration of paying for five tools when you really need one well designed system that your team understands. That's why Straveda is different. We're focused on one thing: building AI Powered systems that replace chaos with structure. Not another platform. Not enterprise bloat. Just technology that actually reduces complexity. We move fast. We're completely transparent. And we measure success the only way that matters—by what changes in your business: hours reclaimed, decisions accelerated, operations that scale without proportional headcount growth."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 491,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialsCarousel, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-4a2575c74565639e" + " " + "relative py-16 md:py-28 bg-[#f8f8fc] dark:bg-[#0a0a14] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "pointer-events-none absolute inset-0 grid-pattern"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 543,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: '-100px'
                                },
                                transition: {
                                    duration: 0.8,
                                    ease
                                },
                                className: "text-center mb-12 md:mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#FF4800'
                                        },
                                        className: "jsx-4a2575c74565639e" + " " + "mb-5 text-[11px] font-medium uppercase tracking-widest",
                                        children: "THE REAL PROBLEM"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 546,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4a2575c74565639e" + " " + "flex items-start gap-5 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '52px',
                                                    background: 'linear-gradient(180deg, #FF4800 0%, rgba(255,72,0,0.15) 100%)'
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "mt-2 hidden lg:block flex-shrink-0 w-1 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 548,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    lineHeight: 1.05,
                                                    letterSpacing: '-2px'
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "font-normal heading-gradient text-[clamp(2rem,5vw,3.5rem)]",
                                                children: [
                                                    "You're not short on software.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                        className: "jsx-4a2575c74565639e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 176
                                                    }, this),
                                                    "You're drowning in it."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 549,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 547,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 545,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: '-100px'
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.1,
                                    ease
                                },
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    {
                                        num: '01',
                                        heading: 'The Tool Tax',
                                        body: "You're paying 6 to 14 SaaS subscriptions. Half overlap. None talk to each other. Your team spends 2 hours a day moving data between them manually."
                                    },
                                    {
                                        num: '02',
                                        heading: 'The Integration Debt',
                                        body: "Every new tool requires a Zapier hack. Every Zapier hack breaks monthly. IT says a \"proper integration\" is a 6 Month project. So nothing gets built."
                                    },
                                    {
                                        num: '03',
                                        heading: 'The Visibility Gap',
                                        body: "Leadership can't see pipeline health, ops can't see inventory, and finance finds out about problems when it's already too late to Course Correct."
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            backdropFilter: 'blur(18px) saturate(1.6)',
                                            WebkitBackdropFilter: 'blur(18px) saturate(1.6)'
                                        },
                                        className: "jsx-4a2575c74565639e" + " " + "glass-card rounded-xl p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: 'rgba(255,72,0,0.25)',
                                                    lineHeight: 1
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "text-[40px] font-light mb-4",
                                                children: item.num
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 559,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-4a2575c74565639e" + " " + "text-[18px] font-medium mb-3 text-[#1a1a2e] dark:text-[#f0f0f5]",
                                                children: item.heading
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 560,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-4a2575c74565639e" + " " + "text-[15px] leading-[1.6] text-[#6b7280] dark:text-[#9ca3af]",
                                                children: item.body
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 561,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.num, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 558,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 552,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: true,
                                    margin: '-100px'
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.25,
                                    ease
                                },
                                className: "mt-10 text-center text-[17px] leading-[1.6] text-[#6b7280] dark:text-[#9ca3af] max-w-2xl mx-auto",
                                children: "Straveda exists to fix this. We audit first, eliminate what's redundant, automate what remains, and build only what genuinely can't be bought off the shelf."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 542,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: isDark ? '#12121e' : '#ffffff'
                },
                className: "jsx-4a2575c74565639e" + " " + "relative py-16 md:py-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "pointer-events-none absolute inset-0 dot-grid-dense"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 573,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: '-100px'
                                },
                                transition: {
                                    duration: 0.8,
                                    ease
                                },
                                className: "mb-12 md:mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#FF4800'
                                        },
                                        className: "jsx-4a2575c74565639e" + " " + "mb-5 text-[11px] font-medium uppercase tracking-widest",
                                        children: "HOW WE WORK"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 576,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4a2575c74565639e" + " " + "flex items-start gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '52px',
                                                    background: 'linear-gradient(180deg, #FF4800 0%, rgba(255,72,0,0.15) 100%)'
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "mt-2 hidden lg:block flex-shrink-0 w-1 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 578,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    lineHeight: 1.05,
                                                    letterSpacing: '-2px',
                                                    overflowWrap: 'break-word'
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "font-normal heading-gradient text-[clamp(2rem,5vw,3.5rem)]",
                                                children: "From Strategy call to Live System."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 579,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 577,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 575,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4a2575c74565639e" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'linear-gradient(to right, #FF4800, rgba(255,72,0,0.1))'
                                        },
                                        className: "jsx-4a2575c74565639e" + " " + "hidden md:block absolute top-6 left-6 right-6 h-px"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 583,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4a2575c74565639e" + " " + "grid grid-cols-1 md:grid-cols-5 gap-8 relative",
                                        children: [
                                            {
                                                step: '1',
                                                label: 'Discovery',
                                                desc: '30-min strategy call to analyze your workflows, identify bottlenecks, and define high impact automation opportunities. You leave with a clear action plan not a sales pitch.'
                                            },
                                            {
                                                step: '2',
                                                label: 'Architecture',
                                                desc: 'We design your custom solution, define the tech stack, and scope the build. You receive a fixed price proposal within 24 hours no hidden costs or ambiguity.'
                                            },
                                            {
                                                step: '3',
                                                label: 'Build',
                                                desc: 'We develop your system in weekly sprints with full visibility. You review progress regularly, give feedback, and stay in control no black box development.'
                                            },
                                            {
                                                step: '4',
                                                label: 'Automate',
                                                desc: 'We wire in the automation layer  triggers, workflows, AI agents. The system starts running without human intervention before we hand over.'
                                            },
                                            {
                                                step: '5',
                                                label: 'Scale',
                                                desc: "Full handover with documentation. Your team owns it. We're available for retainer support if you need us but you won't need us to operate it."
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 30
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                viewport: {
                                                    once: true,
                                                    margin: '-80px'
                                                },
                                                transition: {
                                                    duration: 0.6,
                                                    delay: parseInt(item.step) * 0.08,
                                                    ease
                                                },
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: '#FF4800'
                                                        },
                                                        className: "jsx-4a2575c74565639e" + " " + "flex items-center justify-center w-12 h-12 rounded-full mb-4 text-white text-[14px] font-semibold flex-shrink-0 relative z-10",
                                                        children: item.step
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-4a2575c74565639e" + " " + "text-[16px] font-semibold mb-2 text-[#1a1a2e] dark:text-[#f0f0f5]",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-4a2575c74565639e" + " " + "text-[14px] leading-[1.6] text-[#6b7280] dark:text-[#9ca3af]",
                                                        children: item.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, item.step, true, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 592,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 584,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 582,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 574,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 572,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-4a2575c74565639e" + " " + "relative py-16 md:py-28 bg-[#f8f8fc] dark:bg-[#0a0a14] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "pointer-events-none absolute inset-0 grid-pattern"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 605,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 40
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true,
                                    margin: '-100px'
                                },
                                transition: {
                                    duration: 0.8,
                                    ease
                                },
                                className: "text-center mb-12 md:mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#FF4800'
                                        },
                                        className: "jsx-4a2575c74565639e" + " " + "mb-5 text-[11px] font-medium uppercase tracking-widest",
                                        children: "PRICING"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 608,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-4a2575c74565639e" + " " + "flex items-start gap-5 justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: '52px',
                                                    background: 'linear-gradient(180deg, #FF4800 0%, rgba(255,72,0,0.15) 100%)'
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "mt-2 hidden lg:block flex-shrink-0 w-1 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 610,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                style: {
                                                    lineHeight: 1.05,
                                                    letterSpacing: '-2px'
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "font-normal heading-gradient text-[clamp(2rem,5vw,3.5rem)]",
                                                children: "Flexible Engagement Models"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 611,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 609,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-4a2575c74565639e" + " " + "mt-4 text-[17px] leading-[1.6] text-[#6b7280] dark:text-[#9ca3af] max-w-xl mx-auto",
                                        children: "Tailored systems built around your business goals not predefined packages."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 613,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 607,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4a2575c74565639e" + " " + "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [
                                    {
                                        tier: 'Focused Automation Builds',
                                        coreValue: 'Streamline key workflows and reduce manual effort.',
                                        items: [
                                            'One custom automation workflow',
                                            'Seamless integration with your tools',
                                            'Documentation & handover'
                                        ],
                                        timeline: '2-3 weeks',
                                        cta: 'Start here',
                                        highlight: false
                                    },
                                    {
                                        tier: 'Custom Software & AI Systems',
                                        coreValue: 'Build scalable, business specific systems.',
                                        items: [
                                            'End To End custom development',
                                            'AI workflow integration',
                                            'Scalable, ownership ready code'
                                        ],
                                        timeline: 'Based on scope',
                                        cta: 'Book a call',
                                        highlight: true
                                    },
                                    {
                                        tier: 'Ongoing Optimization & Scale',
                                        coreValue: 'Improve, upgrade, and scale your systems.',
                                        items: [
                                            'Performance monitoring',
                                            'Feature enhancements',
                                            'Continuous optimization'
                                        ],
                                        timeline: 'Monthly',
                                        cta: 'Book a call',
                                        highlight: false
                                    }
                                ].map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true,
                                            margin: '-80px'
                                        },
                                        transition: {
                                            duration: 0.7,
                                            ease
                                        },
                                        className: `rounded-xl p-8 border flex flex-col ${plan.highlight ? 'border-[#FF4800]/40' : 'border-black/[0.06] dark:border-white/[0.08]'}`,
                                        style: {
                                            background: plan.highlight ? isDark ? 'rgba(255,72,0,0.08)' : 'rgba(255,72,0,0.04)' : isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.68)',
                                            backdropFilter: 'blur(18px) saturate(1.6)',
                                            WebkitBackdropFilter: 'blur(18px) saturate(1.6)',
                                            boxShadow: plan.highlight ? '0 8px 32px rgba(255,72,0,0.12), inset 0 1px 0 rgba(255,72,0,0.1)' : '0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)'
                                        },
                                        children: [
                                            plan.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    background: '#FF4800'
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "inline-block mb-4 self-start rounded-full px-3 py-1 text-[10px] font-medium text-white",
                                                children: "Most Popular"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 622,
                                                columnNumber: 36
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-4a2575c74565639e" + " " + "text-[11px] font-semibold uppercase tracking-widest mb-2 text-[#FF4800]",
                                                children: plan.tier
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 623,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-4a2575c74565639e" + " " + "text-[15px] font-medium leading-[1.5] mb-5 text-[#1a1a2e] dark:text-[#f0f0f5]",
                                                children: plan.coreValue
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 624,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4a2575c74565639e" + " " + "border-t border-black/[0.06] dark:border-white/[0.08] pt-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-4a2575c74565639e" + " " + "text-[11px] font-semibold uppercase tracking-wider mb-3 text-[#6b7280] dark:text-[#9ca3af]",
                                                        children: "Deliverables"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "jsx-4a2575c74565639e" + " " + "flex flex-col gap-2 flex-1",
                                                        children: plan.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "jsx-4a2575c74565639e" + " " + "flex items-start gap-2 text-[13px] text-[#6b7280] dark:text-[#9ca3af]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: '#FF4800'
                                                                        },
                                                                        className: "jsx-4a2575c74565639e" + " " + "mt-1 flex-shrink-0 text-[10px]",
                                                                        children: "●"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                                        lineNumber: 628,
                                                                        columnNumber: 144
                                                                    }, this),
                                                                    item
                                                                ]
                                                            }, item, true, {
                                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                                lineNumber: 628,
                                                                columnNumber: 47
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                        lineNumber: 627,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 625,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-4a2575c74565639e" + " " + "flex items-center gap-2 mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4a2575c74565639e" + " " + "text-[11px] font-semibold uppercase tracking-wider text-[#6b7280] dark:text-[#9ca3af]",
                                                        children: "Timeline:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 63
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-4a2575c74565639e" + " " + "text-[13px] text-[#6b7280] dark:text-[#9ca3af]",
                                                        children: plan.timeline
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 183
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 631,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>onNavigate('contact'),
                                                style: {
                                                    background: plan.highlight ? '#FF4800' : 'transparent',
                                                    color: plan.highlight ? '#ffffff' : '#FF4800',
                                                    border: plan.highlight ? 'none' : '1px solid rgba(255,72,0,0.3)'
                                                },
                                                onMouseEnter: (e)=>{
                                                    if (!plan.highlight) e.currentTarget.style.background = 'rgba(255,72,0,0.06)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    if (!plan.highlight) e.currentTarget.style.background = 'transparent';
                                                },
                                                className: "jsx-4a2575c74565639e" + " " + "w-full rounded-lg py-3 text-[14px] font-medium transition-all duration-200 mt-auto",
                                                children: plan.cta
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                lineNumber: 632,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, plan.tier, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                        lineNumber: 621,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 615,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-4a2575c74565639e" + " " + "mt-8 text-center text-[13px] text-[#9ca3af]",
                                children: "All engagements include full source code ownership and zero vendor lock in. Fixed price quote after a 30-min discovery call."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                lineNumber: 636,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 606,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 604,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    background: isDark ? '#12121e' : '#1a1a2e'
                },
                className: "jsx-4a2575c74565639e" + " " + "relative py-16 md:py-24 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,72,0,0.12) 0%, transparent 70%)'
                        },
                        className: "jsx-4a2575c74565639e" + " " + "pointer-events-none absolute inset-0"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 642,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4a2575c74565639e" + " " + "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: '-100px'
                            },
                            transition: {
                                duration: 0.8,
                                ease
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#FF4800'
                                    },
                                    className: "jsx-4a2575c74565639e" + " " + "mb-5 text-[11px] font-medium uppercase tracking-widest",
                                    children: "GET STARTED"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 645,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        lineHeight: 1.05,
                                        letterSpacing: '-2px'
                                    },
                                    className: "jsx-4a2575c74565639e" + " " + "text-white font-normal text-[clamp(2rem,5vw,3.75rem)] mb-6",
                                    children: "Stop paying a monthly tax on manual work."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 646,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'rgba(255,255,255,0.6)'
                                    },
                                    className: "jsx-4a2575c74565639e" + " " + "text-[17px] leading-[1.6] mb-10 max-w-2xl mx-auto",
                                    children: "Book a 30 Minute strategy call. You'll walk away with a working hypothesis for what to automate first. If it's a fit, we send a proposal within 48 hours."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 647,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-4a2575c74565639e" + " " + "flex flex-col sm:flex-row items-center justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            whileHover: {
                                                scale: 1.03
                                            },
                                            whileTap: {
                                                scale: 0.97
                                            },
                                            onClick: ()=>onNavigate('contact'),
                                            className: "glow-hover flex items-center gap-2 rounded-lg px-8 py-4 text-[15px] font-medium text-white shadow-lg shadow-orange-500/20",
                                            style: {
                                                background: '#FF4800'
                                            },
                                            children: [
                                                "Book a 30-min working call ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 44
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 649,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onNavigate('services'),
                                            style: {
                                                color: 'rgba(255,255,255,0.7)',
                                                border: '1px solid rgba(255,255,255,0.12)'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.color = '#ffffff';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                                            },
                                            className: "jsx-4a2575c74565639e" + " " + "flex items-center gap-2 rounded-lg px-8 py-4 text-[15px] transition-colors duration-200",
                                            children: "See how we work"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                            lineNumber: 652,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                                    lineNumber: 648,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                            lineNumber: 644,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                        lineNumber: 643,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 641,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$SubscribeSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
                lineNumber: 658,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/pages/HomePage.tsx",
        lineNumber: 333,
        columnNumber: 5
    }, this);
}
_s1(HomePage, "ja0Y2TScM2yxi6/iy/Mj/Gasmhw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c3 = HomePage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ServiceCard");
__turbopack_context__.k.register(_c1, "TestimonialsCarousel");
__turbopack_context__.k.register(_c2, "FAQSection");
__turbopack_context__.k.register(_c3, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_components_straveda_00t~7x2._.js.map