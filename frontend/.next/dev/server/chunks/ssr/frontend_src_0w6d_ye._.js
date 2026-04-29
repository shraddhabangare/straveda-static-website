module.exports = [
"[project]/frontend/src/components/straveda/SmoothScroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function SmoothScroll({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            // Snappier feel — reduced from 1.05 to 0.8
            duration: 0.8,
            // Quart ease-out: fast initial response, graceful slow finish
            easing: (t)=>1 - Math.pow(1 - t, 4),
            // Standard wheel sensitivity
            wheelMultiplier: 1.0,
            touchMultiplier: 1.5,
            smoothWheel: true,
            syncTouch: true,
            infinite: false
        });
        // Sync Lenis scroll position into GSAP ScrollTrigger each tick
        lenis.on('scroll', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
        // Drive Lenis via GSAP ticker (single unified RAF loop)
        const tickerCallback = (time)=>{
            lenis.raf(time * 1000);
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add(tickerCallback);
        // FIX 3: Re-enable lag smoothing (was 0 — caused scroll snaps on heavy frames).
        // 1000ms tolerance: GSAP catches up gradually instead of snapping.
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(1000, 16);
        // Throttled scroll value updates to reduce layout thrashing
        let lastUpdate = 0;
        lenis.on('scroll', ({ scroll, limit, velocity, direction, progress })=>{
            const now = performance.now();
            if (now - lastUpdate < 16) return; // Limit to ~60fps
            lastUpdate = now;
            const root = document.documentElement;
            root.style.setProperty('--scroll-y', String(Math.round(scroll)));
            root.style.setProperty('--scroll-progress', progress.toFixed(3));
            root.style.setProperty('--scroll-velocity', Math.abs(velocity).toFixed(2));
        });
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove(tickerCallback);
            lenis.destroy();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/frontend/src/components/straveda/Preloader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const LOAD_DURATION = 1500 // progress fills 0→100
;
const EXIT_DELAY = 200 // brief hold after load
;
const EXIT_DURATION = 800 // curtain split
;
function Preloader() {
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    // Derived motion values
    const brandClipPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(progress, [
        0,
        100
    ], [
        'inset(0 100% 0 0)',
        'inset(0 0% 0 0)'
    ]);
    const progressWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(progress, [
        0,
        100
    ], [
        '0%',
        '100%'
    ]);
    // Animate progress from 0 → 100 over LOAD_DURATION
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animate"])(progress, 100, {
            duration: LOAD_DURATION / 1000,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ],
            onUpdate (value) {
                setCount(Math.round(value));
            }
        });
        return ()=>controls.stop();
    }, [
        progress
    ]);
    // Transition: loading → exiting
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setPhase('exiting'), LOAD_DURATION + EXIT_DELAY);
        return ()=>clearTimeout(timer);
    }, []);
    // Transition: exiting → done (unmount after curtain animation)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (phase === 'exiting') {
            const timer = setTimeout(()=>setPhase('done'), EXIT_DURATION);
            return ()=>clearTimeout(timer);
        }
    }, [
        phase
    ]);
    if (phase === 'done') return null;
    const isExiting = phase === 'exiting';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] overflow-hidden",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-x-0 top-0 h-1/2",
                style: {
                    background: '#FFFFFF'
                },
                initial: {
                    y: 0
                },
                animate: isExiting ? {
                    y: '-100%'
                } : {
                    y: 0
                },
                transition: isExiting ? {
                    duration: EXIT_DURATION / 1000,
                    ease: [
                        0.76,
                        0,
                        0.24,
                        1
                    ]
                } : {
                    duration: 0
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-x-0 bottom-0 h-1/2",
                style: {
                    background: '#FFFFFF'
                },
                initial: {
                    y: 0
                },
                animate: isExiting ? {
                    y: '100%'
                } : {
                    y: 0
                },
                transition: isExiting ? {
                    duration: EXIT_DURATION / 1000,
                    ease: [
                        0.76,
                        0,
                        0.24,
                        1
                    ]
                } : {
                    duration: 0
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-0 right-0 top-1/2 h-[1px] -translate-y-1/2",
                initial: {
                    scaleX: 0
                },
                animate: isExiting ? {
                    scaleX: 1
                } : {
                    scaleX: 0
                },
                transition: isExiting ? {
                    duration: 0.4,
                    ease: [
                        0.76,
                        0,
                        0.24,
                        1
                    ]
                } : {
                    duration: 0
                },
                style: {
                    backgroundColor: 'rgba(255, 72, 0, 0.35)'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 flex flex-col items-center justify-center",
                animate: isExiting ? {
                    opacity: 0,
                    scale: 0.92,
                    y: -10
                } : {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                transition: {
                    duration: 0.35,
                    ease: [
                        0.4,
                        0,
                        1,
                        1
                    ]
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 14
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.55,
                            duration: 0.7,
                            ease: [
                                0.25,
                                0.1,
                                0.25,
                                1
                            ]
                        },
                        className: "text-[11px] md:text-xs font-medium tracking-[0.35em] uppercase mb-5 md:mb-7",
                        style: {
                            color: 'rgba(0, 0, 0, 0.35)'
                        },
                        children: "Enterprise IT Consulting"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                            className: "text-[3rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extralight tracking-[-0.03em] whitespace-nowrap",
                            style: {
                                clipPath: brandClipPath,
                                color: '#1a1a2e'
                            },
                            children: [
                                "STR",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#FF4800]",
                                    children: "A"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                                    lineNumber: 128,
                                    columnNumber: 16
                                }, this),
                                "VEDA"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 md:mt-8 flex items-baseline gap-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[3.5rem] sm:text-7xl md:text-[6rem] font-extralight tabular-nums leading-none",
                                style: {
                                    color: '#FF4800'
                                },
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg sm:text-2xl md:text-3xl font-extralight leading-none translate-y-1 md:translate-y-2",
                                style: {
                                    color: 'rgba(255, 72, 0, 0.5)'
                                },
                                children: "%"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 md:mt-12 w-[60%] max-w-[320px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[2px] w-full rounded-full overflow-hidden",
                            style: {
                                backgroundColor: 'rgba(0, 0, 0, 0.06)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "h-full rounded-full",
                                style: {
                                    width: progressWidth,
                                    backgroundColor: '#FF4800'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/Preloader.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/straveda/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ThemeToggle() {
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // hydration guard: defer setMounted to avoid synchronous setState in effect
        const id = requestAnimationFrame(()=>setMounted(true));
        return ()=>cancelAnimationFrame(id);
    }, []);
    if (!mounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-9 h-9"
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/ThemeToggle.tsx",
        lineNumber: 18,
        columnNumber: 24
    }, this);
    const isDark = theme === 'dark';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
        whileHover: {
            scale: 1.05
        },
        whileTap: {
            scale: 0.95
        },
        onClick: ()=>setTheme(isDark ? 'light' : 'dark'),
        className: "relative flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200 cursor-pointer",
        style: {
            color: isDark ? '#fbbf24' : '#1a1a2e',
            background: isDark ? 'rgba(251, 191, 36, 0.1)' : 'rgba(0, 0, 0, 0.04)'
        },
        "aria-label": isDark ? 'Switch to light mode' : 'Switch to dark mode',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    rotate: -90,
                    opacity: 0,
                    scale: 0.5
                },
                animate: {
                    rotate: 0,
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    rotate: 90,
                    opacity: 0,
                    scale: 0.5
                },
                transition: {
                    duration: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    className: "h-[18px] w-[18px]"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/ThemeToggle.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                }, this)
            }, "moon", false, {
                fileName: "[project]/frontend/src/components/straveda/ThemeToggle.tsx",
                lineNumber: 36,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    rotate: 90,
                    opacity: 0,
                    scale: 0.5
                },
                animate: {
                    rotate: 0,
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    rotate: -90,
                    opacity: 0,
                    scale: 0.5
                },
                transition: {
                    duration: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "h-[18px] w-[18px]"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/ThemeToggle.tsx",
                    lineNumber: 53,
                    columnNumber: 13
                }, this)
            }, "sun", false, {
                fileName: "[project]/frontend/src/components/straveda/ThemeToggle.tsx",
                lineNumber: 46,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ThemeToggle.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/ThemeToggle.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/lib/cursor-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorProvider",
    ()=>CursorProvider,
    "useCursorStyle",
    ()=>useCursorStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const CursorContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    cursorStyle: 'default',
    setCursorStyle: ()=>{}
});
function CursorProvider({ children }) {
    const [cursorStyle, setCursorStyleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('default');
    const setCursorStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((style)=>{
        setCursorStyleState(style);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CursorContext.Provider, {
        value: {
            cursorStyle,
            setCursorStyle
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/src/lib/cursor-context.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function useCursorStyle() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CursorContext);
}
}),
"[project]/frontend/src/components/straveda/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Navbar — Floating Glass Pill
 *
 * Scroll DOWN → pill shrinks 45% from both sides, white glass + faint orange tint
 * Scroll UP   → pill expands back to full, dark glass restored
 * At top      → always full dark glass
 *
 * All transitions are pure CSS on the wrapper padding — no layout reflow,
 * GPU-composited, zero Framer Motion scroll hooks.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cursor$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/cursor-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const NAV_LINKS = [
    {
        label: 'Home',
        page: 'home'
    },
    {
        label: 'Services',
        page: 'services'
    },
    {
        label: 'About',
        page: 'about'
    },
    {
        label: 'Insights',
        page: 'insights'
    },
    {
        label: 'Careers',
        page: 'careers'
    },
    {
        label: 'Contact',
        page: 'contact'
    }
];
const EASE = [
    0.4,
    0,
    0.2,
    1
];
// ─── Design tokens ────────────────────────────────────────────────────────
// Light mode — Full state (white + orange warm glass)
const FULL_LIGHT = {
    bg: 'rgba(255, 255, 255, 0.88)',
    border: 'rgba(255, 72, 0, 0.22)',
    shadow: '0 8px 40px rgba(255,72,0,0.10), 0 2px 12px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.90) inset',
    text: '#1a1a2e',
    textMuted: '#6b7280',
    ctaBg: '#FF4800',
    ctaColor: '#FFFFFF'
};
// Light mode — Compact state (85% transparent faint orange glass)
const COMPACT_LIGHT = {
    bg: 'rgba(255, 72, 0, 0.08)',
    border: 'rgba(255, 72, 0, 0.22)',
    shadow: '0 4px 32px rgba(255,72,0,0.12), 0 1px 0 rgba(255,255,255,0.18) inset',
    text: '#1a1a2e',
    textMuted: '#4b5563',
    ctaBg: '#FF4800',
    ctaColor: '#FFFFFF'
};
// Dark mode — Full state (dark glass + orange tint)
const FULL_DARK = {
    bg: 'rgba(12, 12, 22, 0.90)',
    border: 'rgba(255, 72, 0, 0.20)',
    shadow: '0 8px 40px rgba(0,0,0,0.4), 0 2px 12px rgba(255,72,0,0.06), 0 1px 0 rgba(255,255,255,0.06) inset',
    text: '#f0f0f5',
    textMuted: '#9ca3af',
    ctaBg: '#FF4800',
    ctaColor: '#FFFFFF'
};
// Dark mode — Compact state (very transparent dark glass)
const COMPACT_DARK = {
    bg: 'rgba(255, 72, 0, 0.05)',
    border: 'rgba(255, 72, 0, 0.20)',
    shadow: '0 4px 32px rgba(255,72,0,0.08), 0 1px 0 rgba(255,255,255,0.06) inset',
    text: '#f0f0f5',
    textMuted: '#9ca3af',
    ctaBg: '#FF4800',
    ctaColor: '#FFFFFF'
};
// Legacy aliases kept for SSR skeleton
const DARK = FULL_LIGHT;
const ORANGE = '#FF4800';
// Transition applied to the outer wrapper (width shrink via padding)
const WRAPPER_TRANSITION = 'padding 0.42s cubic-bezier(0.4,0,0.2,1)';
// Transition applied to the pill itself (colours, shadow, backdrop)
const PILL_TRANSITION = [
    'background 0.36s ease',
    'border-color 0.36s ease',
    'box-shadow 0.36s ease'
].join(', ');
function Navbar({ currentPage, onNavigate }) {
    const { setCursorStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cursor$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCursorStyle"])();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [compact, setCompact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const prevY = {
        current: 0
    };
    // Hydration guard
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = requestAnimationFrame(()=>setMounted(true));
        return ()=>cancelAnimationFrame(id);
    }, []);
    // Scroll direction → compact toggle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let lastY = 0;
        const onScroll = ()=>{
            const y = window.scrollY;
            if (y < 60) setCompact(false);
            else if (y > lastY + 4) setCompact(true);
            else if (y < lastY - 3) setCompact(false);
            lastY = y;
        };
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
    // Body scroll lock
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        mobileOpen
    ]);
    const closeThenNavigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((page)=>{
        setMobileOpen(false);
        onNavigate(page);
    }, [
        onNavigate
    ]);
    const isActive = (page)=>currentPage === page;
    // Derived colours — adapts to both scroll state and dark mode
    const isDarkMode = resolvedTheme === 'dark';
    const T = isDarkMode ? compact ? COMPACT_DARK : FULL_DARK : compact ? COMPACT_LIGHT : FULL_LIGHT;
    // SSR skeleton
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "fixed top-4 left-0 right-0 z-50",
            style: {
                padding: '0 1rem'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-full",
                style: {
                    height: 60,
                    background: DARK.bg,
                    border: `1px solid ${DARK.border}`,
                    boxShadow: DARK.shadow
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
                className: "fixed top-4 left-0 right-0 z-50",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.55,
                    ease: EASE
                },
                style: {
                    /* ── KEY: padding drives the 45% shrink from both sides ── */ paddingLeft: compact ? '22.5vw' : '1rem',
                    paddingRight: compact ? '22.5vw' : '1rem',
                    transition: WRAPPER_TRANSITION
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "banner",
                    className: "relative flex items-center justify-end md:justify-between rounded-full",
                    style: {
                        height: 60,
                        padding: '0 22px',
                        background: T.bg,
                        backdropFilter: compact ? 'blur(28px) saturate(1.6)' : 'blur(16px) saturate(1.2)',
                        WebkitBackdropFilter: compact ? 'blur(28px) saturate(1.6)' : 'blur(16px) saturate(1.2)',
                        border: `1px solid ${T.border}`,
                        boxShadow: T.shadow,
                        transition: PILL_TRANSITION
                    },
                    onMouseEnter: ()=>setCursorStyle('nav'),
                    onMouseLeave: ()=>setCursorStyle('default'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            style: {
                                position: 'absolute',
                                inset: 0,
                                borderRadius: 'inherit',
                                pointerEvents: 'none',
                                opacity: compact ? 1 : 0,
                                transition: 'opacity 0.42s ease',
                                // Horizontal orange wash — bright center, fades to edges
                                background: 'linear-gradient(90deg, transparent 0%, rgba(255,72,0,0.05) 20%, rgba(255,72,0,0.12) 50%, rgba(255,72,0,0.05) 80%, transparent 100%)',
                                // Bottom orange glow line + top white highlight
                                boxShadow: [
                                    'inset 0 -1px 0 rgba(255,72,0,0.40)',
                                    'inset 0 1px 0 rgba(255,255,255,0.22)',
                                    '0 0 24px rgba(255,72,0,0.08)'
                                ].join(', ')
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            onClick: (e)=>{
                                e.preventDefault();
                                onNavigate('home');
                            },
                            className: "z-10 shrink-0 select-none absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0",
                            style: {
                                fontFamily: 'Geist, sans-serif',
                                fontSize: 15,
                                fontWeight: 600,
                                letterSpacing: '-0.3px',
                                color: T.text,
                                transition: 'color 0.3s ease'
                            },
                            onMouseEnter: (e)=>{
                                e.stopPropagation();
                                setCursorStyle('link');
                            },
                            onMouseLeave: ()=>setCursorStyle('nav'),
                            children: [
                                "Str",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: ORANGE
                                    },
                                    children: "a"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                    lineNumber: 238,
                                    columnNumber: 16
                                }, this),
                                "veda"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Primary navigation",
                            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-7",
                            children: NAV_LINKS.map(({ label, page }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: `#${page}`,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        onNavigate(page);
                                    },
                                    initial: {
                                        opacity: 0,
                                        y: -8
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: 0.1 + i * 0.055,
                                        ease: EASE
                                    },
                                    className: "relative group text-[13px] whitespace-nowrap",
                                    style: {
                                        fontWeight: 400,
                                        color: isActive(page) ? T.text : T.textMuted,
                                        transition: 'color 0.22s ease'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.stopPropagation();
                                        setCursorStyle('link');
                                        e.currentTarget.style.color = T.text;
                                    },
                                    onMouseLeave: (e)=>{
                                        setCursorStyle('nav');
                                        e.currentTarget.style.color = isActive(page) ? T.text : T.textMuted;
                                    },
                                    children: [
                                        label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-[3px] left-0 h-[1.5px] rounded-full transition-all duration-300 group-hover:w-full",
                                            style: {
                                                backgroundColor: ORANGE,
                                                width: isActive(page) ? '100%' : '0'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                            lineNumber: 273,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, page, true, {
                                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:block",
                                    style: {
                                        transition: 'opacity 0.22s ease'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.stopPropagation();
                                        setCursorStyle('link');
                                    },
                                    onMouseLeave: ()=>setCursorStyle('nav'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                        lineNumber: 294,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onNavigate('contact'),
                                    className: "hidden md:inline-flex items-center gap-2 rounded-full select-none cursor-pointer",
                                    style: {
                                        height: 36,
                                        padding: '0 18px',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        background: T.ctaBg,
                                        color: T.ctaColor,
                                        border: compact ? `1px solid rgba(255,72,0,0.3)` : '1px solid transparent',
                                        transition: 'background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.2s ease',
                                        whiteSpace: 'nowrap'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.stopPropagation();
                                        setCursorStyle('link');
                                        e.currentTarget.style.transform = 'scale(1.04)';
                                        e.currentTarget.style.background = '#e03e00';
                                    },
                                    onMouseLeave: (e)=>{
                                        setCursorStyle('nav');
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.background = '#FF4800';
                                    },
                                    children: [
                                        "Start a project",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: '#ffffff',
                                                fontWeight: 700
                                            },
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                            lineNumber: 325,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "md:hidden flex items-center justify-center w-11 h-11 rounded-full cursor-pointer",
                                    style: {
                                        color: T.textMuted,
                                        background: 'rgba(255,72,0,0.07)',
                                        border: `1px solid rgba(255,72,0,0.20)`,
                                        transition: 'background 0.3s ease',
                                        minWidth: 44,
                                        minHeight: 44
                                    },
                                    onClick: ()=>setMobileOpen((p)=>!p),
                                    "aria-label": mobileOpen ? 'Close menu' : 'Open menu',
                                    children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                        lineNumber: 342,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                        lineNumber: 342,
                                        columnNumber: 47
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        duration: 0.22,
                        ease: EASE
                    },
                    className: "fixed inset-0 z-[55] md:hidden flex flex-col",
                    style: {
                        background: 'rgba(14, 12, 28, 0.97)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center justify-center px-6 pt-6 pb-4",
                            style: {
                                borderBottom: `1px solid rgba(255,255,255,0.08)`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setMobileOpen(false);
                                    },
                                    className: "text-[16px] select-none",
                                    style: {
                                        fontFamily: 'Geist, sans-serif',
                                        fontWeight: 600,
                                        color: '#FFFFFF'
                                    },
                                    children: [
                                        "Str",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: ORANGE
                                            },
                                            children: "a"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                            lineNumber: 377,
                                            columnNumber: 20
                                        }, this),
                                        "veda"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "absolute right-6 flex items-center justify-center w-11 h-11 rounded-full cursor-pointer",
                                    style: {
                                        color: 'rgba(255,255,255,0.50)',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        minWidth: 44,
                                        minHeight: 44
                                    },
                                    onClick: ()=>setMobileOpen(false),
                                    "aria-label": "Close menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                        lineNumber: 391,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                            lineNumber: 367,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center flex-1 gap-1 px-6",
                            children: NAV_LINKS.map(({ label, page }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: `#${page}`,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        closeThenNavigate(page);
                                    },
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.35,
                                        delay: 0.06 + i * 0.06
                                    },
                                    className: "relative text-center text-[30px] font-normal py-2.5 transition-colors duration-200",
                                    style: {
                                        color: isActive(page) ? '#FFFFFF' : 'rgba(255,255,255,0.50)'
                                    },
                                    children: [
                                        label,
                                        isActive(page) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-0.5 left-1/2 -translate-x-1/2 block w-1.5 h-1.5 rounded-full",
                                            style: {
                                                backgroundColor: ORANGE
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                            lineNumber: 410,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, page, true, {
                                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                    lineNumber: 398,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                            lineNumber: 396,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-4 px-6 pb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    initial: {
                                        opacity: 0,
                                        y: 12
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.35,
                                        delay: 0.42
                                    },
                                    className: "w-full max-w-xs rounded-full font-normal cursor-pointer transition-all duration-200",
                                    style: {
                                        background: '#FFFFFF',
                                        color: '#000000',
                                        padding: '14px 28px',
                                        fontSize: 15
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = '#f2f2f2';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = '#FFFFFF';
                                    },
                                    onClick: ()=>closeThenNavigate('contact'),
                                    children: [
                                        "Start a project",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: ORANGE,
                                                fontWeight: 700
                                            },
                                            children: "→"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                            lineNumber: 420,
                            columnNumber: 13
                        }, this)
                    ]
                }, "mobile-menu", true, {
                    fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                    lineNumber: 353,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/Navbar.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/frontend/src/components/straveda/ResponsiveWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResponsiveWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function ResponsiveWrapper({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            'flex flex-col items-center',
            'w-full max-w-[100vw]',
            'overflow-x-hidden',
            'min-h-screen',
            'relative',
            className
        ].filter(Boolean).join(' '),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col flex-1",
            children: children
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ResponsiveWrapper.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/ResponsiveWrapper.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/straveda/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.mjs [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cursor$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/cursor-context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const FOOTER_LINKS = {
    EXPLORE: [
        {
            label: 'Home',
            page: 'home'
        },
        {
            label: 'What We Build',
            page: 'services'
        },
        {
            label: 'Why Straveda',
            page: 'about'
        },
        {
            label: 'Insights',
            page: 'insights'
        },
        {
            label: 'Careers',
            page: 'careers'
        },
        {
            label: 'Contact',
            page: 'contact'
        }
    ],
    SERVICES: [
        {
            label: 'AI & Automation',
            page: 'services'
        },
        {
            label: 'Custom Software',
            page: 'services'
        },
        {
            label: 'AI Strategy & Integration',
            page: 'services'
        },
        {
            label: 'Web Development & 3D',
            page: 'services'
        }
    ],
    RESOURCES: [
        {
            label: 'Insights (Blog)',
            page: 'insights'
        },
        {
            label: 'Discovery Call Guide',
            page: 'contact'
        },
        {
            label: 'Pricing & Timeline',
            page: 'contact'
        },
        {
            label: 'Contact Us',
            page: 'contact'
        }
    ]
};
function Footer({ onNavigate }) {
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { setCursorStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cursor$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCursorStyle"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: footerRef,
        className: "relative mt-auto overflow-hidden bg-[#fffaf8] py-10 pb-6 dark:bg-[#0a0a14]",
        onMouseEnter: ()=>setCursorStyle('nav'),
        onMouseLeave: ()=>setCursorStyle('default'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-[10%] -top-[20%] w-[70%] h-[140%] rounded-full opacity-[0.65] blur-[120px]",
                        style: {
                            background: 'radial-gradient(circle, #FF4800 0%, #ff8c00 100%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-[5%] bottom-[-10%] w-[50%] h-[70%] rounded-full opacity-[0.3] blur-[100px]",
                        style: {
                            background: 'radial-gradient(circle, #ffebd5 0%, #FF4800 100%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-1 flex items-end justify-center px-4 pb-4 pointer-events-none select-none overflow-hidden",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[20vw] font-bold uppercase tracking-tighter",
                    style: {
                        color: 'rgba(15, 23, 42, 0.06)',
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: '0.6',
                        marginBottom: '20px'
                    },
                    children: "Straveda"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto px-6 md:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                }),
                            className: "group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#0f172a] hover:text-[#FF4800] transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                                    size: 14,
                                    strokeWidth: 3
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                " BACK TO TOP"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-8 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-4 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-black tracking-tighter text-[#0f172a] dark:text-white",
                                                children: [
                                                    "Str",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#FF4800]",
                                                        children: "a"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 20
                                                    }, this),
                                                    "veda"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[14px] text-[#0f172a] dark:text-gray-300 font-bold leading-snug max-w-[280px]",
                                                children: [
                                                    "Exceptional value.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 35
                                                    }, this),
                                                    "Cost-effective solutions."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://linkedin.com/company/straveda",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Straveda on LinkedIn",
                                                className: "w-11 h-11 rounded-full border-2 border-[#0f172a]/10 flex items-center justify-center text-[#0f172a] hover:bg-[#FF4800] hover:text-white hover:border-[#FF4800] transition-all cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://instagram.com/straveda",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                "aria-label": "Straveda on Instagram",
                                                className: "w-11 h-11 rounded-full border-2 border-[#0f172a]/10 flex items-center justify-center text-[#0f172a] hover:bg-[#FF4800] hover:text-white hover:border-[#FF4800] transition-all cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            Object.entries(FOOTER_LINKS).map(([title, links])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:col-span-2 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[11px] font-black uppercase tracking-widest text-[#FF4800]",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onNavigate(link.page),
                                                        className: "text-[13px] font-bold text-[#0f172a] dark:text-gray-200 hover:text-[#FF4800] transition-colors text-left",
                                                        children: link.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this)
                                                }, link.label, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, title, true, {
                                    fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[11px] font-black uppercase tracking-widest text-[#FF4800]",
                                        children: "CONTACT US"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3 text-[13px] font-bold text-[#0f172a] dark:text-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:hello@straveda.com",
                                                className: "flex items-center gap-3 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 18,
                                                        className: "text-[#FF4800] shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "border-b-2 border-[#0f172a]/10 group-hover:border-[#FF4800] transition-all",
                                                        children: "hello@straveda.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 18,
                                                        className: "text-[#FF4800] mt-1 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "leading-tight",
                                                        children: [
                                                            "Pune, Maharashtra",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 70
                                                            }, this),
                                                            "411001, India"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-5 border-t-2 border-[#0f172a]/5 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] font-black text-[#0f172a]/40 uppercase tracking-[0.2em]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "© 2026 Straveda Tech. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-[#FF4800]",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-[#FF4800]",
                                        children: "Terms of Service"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/Footer.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/straveda/BackToTop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * BackToTop — fixed bottom-right scroll-to-top button with SVG progress ring.
 *
 * FIX: Removed native scroll event listener that called setScrollProgress()
 * (a React state float) on every Lenis tick → 60 React re-renders/sec.
 *
 * New approach:
 * - visibility threshold read via useSyncExternalStore (only fires on flip past 300px)
 * - SVG ring progress driven by reading --scroll-progress CSS var in RAF loop
 *   and writing strokeDashoffset directly to the DOM — zero React re-renders mid-scroll
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.mjs [app-ssr] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cursor$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/cursor-context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
// ── Scroll-threshold store (only wakes React when crossing 300px) ──
function subscribeToScroll(cb) {
    window.addEventListener('scroll', cb, {
        passive: true
    });
    return ()=>window.removeEventListener('scroll', cb);
}
function getScrollSnapshot() {
    return window.scrollY > 300;
}
function getScrollServerSnapshot() {
    return false;
}
const radius = 18;
const strokeWidth = 2;
const circumference = 2 * Math.PI * radius;
const svgSize = 44;
const center = svgSize / 2;
function BackToTop() {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { setCursorStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cursor$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCursorStyle"])();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const ringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Boolean visibility — only fires React update when crossing 300px threshold
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToScroll, getScrollSnapshot, getScrollServerSnapshot);
    // Drive the SVG ring directly from --scroll-progress CSS var via RAF
    // No React state → no re-renders while scrolling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!visible) return;
        let running = true;
        const tick = ()=>{
            if (!running) return;
            const progress = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scroll-progress') || '0');
            if (ringRef.current) {
                ringRef.current.style.strokeDashoffset = String(circumference * (1 - progress));
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return ()=>{
            running = false;
            cancelAnimationFrame(rafRef.current);
        };
    }, [
        visible
    ]);
    const scrollToTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Use Lenis-compatible instant reset — Lenis will smoothly animate from 0
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, []);
    const isDark = resolvedTheme === 'dark';
    const trackColor = isDark ? '#374151' : '#e5e7eb';
    // On hover show full ring — write directly to DOM ref
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsHovered(true);
        setCursorStyle('link');
        if (ringRef.current) {
            ringRef.current.style.strokeDashoffset = '0';
            ringRef.current.style.transition = 'stroke-dashoffset 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        }
    }, [
        setCursorStyle
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsHovered(false);
        setCursorStyle('default');
        if (ringRef.current) {
            ringRef.current.style.transition = 'stroke-dashoffset 0.1s ease-out';
        }
    }, [
        setCursorStyle
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
            initial: {
                opacity: 0,
                scale: 0.6
            },
            animate: {
                opacity: 1,
                scale: 1
            },
            exit: {
                opacity: 0,
                scale: 0.6
            },
            transition: {
                duration: 0.35,
                ease: [
                    0.4,
                    0,
                    0.2,
                    1
                ]
            },
            onClick: scrollToTop,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            className: "fixed bottom-6 right-[88px] z-40 flex items-center justify-center cursor-pointer",
            style: {
                background: 'transparent',
                border: 'none',
                padding: 0
            },
            "aria-label": "Back to top",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: svgSize,
                    height: svgSize,
                    viewBox: `0 0 ${svgSize} ${svgSize}`,
                    className: "absolute",
                    style: {
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center,
                            cy: center,
                            r: radius,
                            fill: "transparent",
                            stroke: trackColor,
                            strokeWidth: strokeWidth
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/BackToTop.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            ref: ringRef,
                            cx: center,
                            cy: center,
                            r: radius,
                            fill: "transparent",
                            stroke: "#FF4800",
                            strokeWidth: strokeWidth,
                            strokeLinecap: "round",
                            strokeDasharray: circumference,
                            strokeDashoffset: circumference,
                            style: {
                                transform: 'rotate(-90deg)',
                                transformOrigin: '50% 50%',
                                transition: 'stroke-dashoffset 0.1s ease-out'
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/BackToTop.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/BackToTop.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        scale: isHovered ? 1.1 : 1
                    },
                    transition: {
                        duration: 0.25,
                        ease: [
                            0.4,
                            0,
                            0.2,
                            1
                        ]
                    },
                    className: "flex h-10 w-10 items-center justify-center rounded-full",
                    style: {
                        background: '#FF4800',
                        boxShadow: isHovered ? '0 4px 24px rgba(255, 72, 0, 0.4)' : '0 4px 20px rgba(255, 72, 0, 0.3)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                        className: "h-5 w-5 text-white"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/BackToTop.tsx",
                        lineNumber: 160,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/BackToTop.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            ]
        }, "back-to-top", true, {
            fileName: "[project]/frontend/src/components/straveda/BackToTop.tsx",
            lineNumber: 98,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/BackToTop.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/ui/inverted-cursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cursor",
    ()=>Cursor,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cursor$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/cursor-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* ═══════════════════════════════════════════════════════════════════════
   Ultra-Smooth Premium Cursor Engine
   
   Performance targets:
   - 60fps minimum (120fps capable)
   - 0 visible delay, 0 jitter
   - GPU-accelerated via translate3d
   - Zero React re-renders during animation (all refs)
   
   Architecture:
   - Outer ring: 40px circle with 1.5px border, semi-transparent
   - Inner dot: 8px solid circle, full opacity
   - Both use requestAnimationFrame loop with lerp interpolation
   - Velocity tracking for stretch/skew effects on fast movement
   - Smooth size/opacity transitions via lerp (not CSS transitions)
   ═══════════════════════════════════════════════════════════════════════ */ // ─── Configuration ────────────────────────────────────────────────────
const LERP_POS = 0.12 // Position interpolation (0.08=trail, 0.15=responsive)
;
const LERP_SIZE = 0.12 // Size interpolation speed
;
const LERP_OPACITY = 0.1 // Opacity interpolation speed
;
const LERP_STRETCH = 0.12 // Stretch response speed
;
const STRETCH_DECAY = 0.12 // Stretch decay back to normal
;
const VELOCITY_THRESHOLD = 6 // Min velocity to start stretching
;
const MAX_STRETCH = 1.25 // Maximum stretch factor
;
const SNAP = 0.05 // Snap threshold to prevent micro-jitter
;
const VELOCITY_SMOOTH = 0.2 // Velocity smoothing factor
;
// Fixed DOM sizes — elements never change dimensions, only scale via transform.
// Values must be ≥ the largest entry in SIZES to avoid upscaling blur.
const OUTER_BASE = 72 // Matches SIZES.text[0] — the largest outer size
;
const INNER_BASE = 8 // Matches SIZES.default[1] — the largest inner size
;
// Size config per cursor style: [outer diameter, inner diameter]
const SIZES = {
    default: [
        32,
        6
    ],
    nav: [
        22,
        4
    ],
    link: [
        46,
        6
    ],
    text: [
        58,
        3
    ]
};
// Opacity config per style: [outer, inner]
const OPACITIES = {
    default: [
        0.5,
        1
    ],
    nav: [
        0.7,
        1
    ],
    link: [
        0.35,
        0.85
    ],
    text: [
        0.3,
        0.7
    ]
};
// Blend mode per style
const BLENDS = {
    default: "difference",
    nav: "normal",
    link: "difference",
    text: "normal"
};
// ─── Lerp helper ──────────────────────────────────────────────────────
function lerp(current, target, factor) {
    const diff = target - current;
    if (Math.abs(diff) < SNAP) return target;
    return current + diff * factor;
}
const Cursor = ()=>{
    const outerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // ─── Mutable animation state (never triggers re-render) ─────────
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        // Mouse target position
        mouseX: -200,
        mouseY: -200,
        // Interpolated render position
        posX: -200,
        posY: -200,
        // Smoothed velocity
        velX: 0,
        velY: 0,
        // Interpolated sizes
        outerSize: SIZES.default[0],
        innerSize: SIZES.default[1],
        // Interpolated opacities
        outerOp: 0,
        innerOp: 0,
        // Target opacities
        targetOuterOp: OPACITIES.default[0],
        targetInnerOp: OPACITIES.default[1],
        // Stretch
        stretchX: 1,
        stretchY: 1,
        rotation: 0,
        // Visibility
        visible: false,
        // Current cursor style
        style: "default",
        // Theme
        isDark: false,
        // Hover pressed state
        pressed: false
    });
    // ─── Context ──────────────────────────────────────────────────────
    const { cursorStyle, setCursorStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cursor$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCursorStyle"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    // Sync theme to ref
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        state.current.isDark = theme === "dark";
    }, [
        theme
    ]);
    // ─── Update targets when cursor style changes ─────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const s = state.current;
        s.style = cursorStyle;
        s.targetOuterOp = OPACITIES[cursorStyle][0];
        s.targetInnerOp = OPACITIES[cursorStyle][1];
    }, [
        cursorStyle
    ]);
    // ─── Auto-detect interactive element hovers ───────────────────────
    // 'link' mode: <a>, <button>, [data-cursor-hover], .interactive
    // 'text' mode: <input>, <textarea>, <select>, [contenteditable]
    // Restores previous style when leaving each zone.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const INTERACTIVE = 'a, button, [data-cursor-hover], .interactive';
        const TEXT_ELEMS = 'input, textarea, select, [contenteditable]';
        const prevStyleRef = {
            current: 'default'
        };
        let isHovering = false;
        const onOver = (e)=>{
            if (isHovering) return;
            const el = e.target;
            if (el.closest(TEXT_ELEMS)) {
                isHovering = true;
                prevStyleRef.current = state.current.style === 'text' ? prevStyleRef.current : state.current.style;
                setCursorStyle('text');
                return;
            }
            if (!el.closest(INTERACTIVE)) return;
            isHovering = true;
            prevStyleRef.current = state.current.style === 'link' ? prevStyleRef.current : state.current.style;
            setCursorStyle('link');
        };
        const onOut = (e)=>{
            if (!isHovering) return;
            const target = e.target;
            const wasText = !!target.closest(TEXT_ELEMS);
            const activeSelector = wasText ? TEXT_ELEMS : INTERACTIVE;
            if (!target.closest(activeSelector)) return;
            const related = e.relatedTarget;
            if (related?.closest(TEXT_ELEMS) || related?.closest(INTERACTIVE)) return;
            isHovering = false;
            setCursorStyle(prevStyleRef.current);
        };
        document.addEventListener('mouseover', onOver, {
            passive: true
        });
        document.addEventListener('mouseout', onOut, {
            passive: true
        });
        return ()=>{
            document.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseout', onOut);
        };
    }, [
        setCursorStyle
    ]);
    // ─── Main animation loop (runs once, never restarts) ──────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tick = ()=>{
            const s = state.current;
            const outer = outerRef.current;
            const inner = innerRef.current;
            // ── Position lerp ──
            s.posX = lerp(s.posX, s.mouseX, LERP_POS);
            s.posY = lerp(s.posY, s.mouseY, LERP_POS);
            // ── Velocity tracking ──
            const dx = s.mouseX - s.posX;
            const dy = s.mouseY - s.posY;
            s.velX = s.velX * (1 - VELOCITY_SMOOTH) + dx * VELOCITY_SMOOTH;
            s.velY = s.velY * (1 - VELOCITY_SMOOTH) + dy * VELOCITY_SMOOTH;
            const velMag = Math.sqrt(s.velX * s.velX + s.velY * s.velY);
            // ── Stretch / skew ──
            if (velMag > VELOCITY_THRESHOLD) {
                const factor = Math.min(1 + (velMag - VELOCITY_THRESHOLD) * 0.006, MAX_STRETCH);
                const angle = Math.atan2(s.velY, s.velX) * (180 / Math.PI);
                s.stretchX = lerp(s.stretchX, factor, LERP_STRETCH);
                s.stretchY = lerp(s.stretchY, 1 / factor, LERP_STRETCH);
                s.rotation = lerp(s.rotation, angle, 0.15);
            } else {
                s.stretchX = lerp(s.stretchX, 1, STRETCH_DECAY);
                s.stretchY = lerp(s.stretchY, 1, STRETCH_DECAY);
                s.rotation = lerp(s.rotation, 0, STRETCH_DECAY);
            }
            // ── Size targets ──
            const targetOuter = SIZES[s.style][0] * (s.pressed ? 0.85 : 1);
            const targetInner = SIZES[s.style][1] * (s.pressed ? 0.85 : 1);
            s.outerSize = lerp(s.outerSize, targetOuter, LERP_SIZE);
            s.innerSize = lerp(s.innerSize, targetInner, LERP_SIZE * 1.2);
            // ── Opacity ──
            const visOuter = s.visible ? s.targetOuterOp : 0;
            const visInner = s.visible ? s.targetInnerOp : 0;
            s.outerOp = lerp(s.outerOp, visOuter, LERP_OPACITY);
            s.innerOp = lerp(s.innerOp, visInner, LERP_OPACITY * 1.5);
            // ── Apply to DOM ──
            // Sizes are encoded as scale factors relative to fixed element dimensions.
            // This keeps width/height constant — only transform (compositor-only) changes.
            if (outer) {
                const outerScale = s.outerSize / OUTER_BASE;
                outer.style.transform = `translate3d(${s.posX - OUTER_BASE / 2}px, ${s.posY - OUTER_BASE / 2}px, 0) ` + `rotate(${s.rotation}deg) ` + `scale3d(${outerScale * s.stretchX}, ${outerScale * s.stretchY}, 1)`;
                outer.style.opacity = `${s.outerOp}`;
                const isNav = s.style === "nav";
                const isText = s.style === "text";
                if (isNav || isText) {
                    outer.style.mixBlendMode = "normal";
                    outer.style.backgroundColor = s.isDark ? "rgba(240, 240, 245, 0.06)" : "rgba(26, 26, 46, 0.06)";
                    outer.style.borderColor = s.isDark ? "rgba(240, 240, 245, 0.35)" : "rgba(26, 26, 46, 0.35)";
                } else {
                    outer.style.mixBlendMode = BLENDS[s.style];
                    outer.style.backgroundColor = "transparent";
                    outer.style.borderColor = "#ffffff";
                }
            }
            if (inner) {
                const innerScale = s.innerSize / INNER_BASE;
                inner.style.transform = `translate3d(${s.posX - INNER_BASE / 2}px, ${s.posY - INNER_BASE / 2}px, 0) ` + `scale3d(${innerScale * s.stretchX}, ${innerScale * s.stretchY}, 1)`;
                inner.style.opacity = `${s.innerOp}`;
                const isNav = s.style === "nav";
                const isText = s.style === "text";
                if (isNav || isText) {
                    inner.style.mixBlendMode = "normal";
                    inner.style.backgroundColor = s.isDark ? "#f0f0f5" : "#1a1a2e";
                } else {
                    inner.style.mixBlendMode = BLENDS[s.style];
                    inner.style.backgroundColor = "#ffffff";
                }
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return ()=>{
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []); // Empty deps — loop runs once, reads all from refs
    // ─── Event listeners (document-level, passive) ────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const s = state.current;
        const onMove = (e)=>{
            s.mouseX = e.clientX;
            s.mouseY = e.clientY;
            if (!s.visible) s.visible = true;
        };
        const onLeave = ()=>{
            s.visible = false;
        };
        const onEnter = ()=>{
            s.visible = true;
        };
        const onDown = ()=>{
            s.pressed = true;
        };
        const onUp = ()=>{
            s.pressed = false;
        };
        document.addEventListener("mousemove", onMove, {
            passive: true
        });
        document.addEventListener("mouseleave", onLeave, {
            passive: true
        });
        document.addEventListener("mouseenter", onEnter, {
            passive: true
        });
        document.addEventListener("mousedown", onDown, {
            passive: true
        });
        document.addEventListener("mouseup", onUp, {
            passive: true
        });
        return ()=>{
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseleave", onLeave);
            document.removeEventListener("mouseenter", onEnter);
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("mouseup", onUp);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: outerRef,
                className: "pointer-events-none fixed top-0 left-0 z-[10000] rounded-full",
                style: {
                    border: "1.5px solid #ffffff",
                    backgroundColor: "transparent",
                    mixBlendMode: "difference",
                    width: OUTER_BASE,
                    height: OUTER_BASE,
                    opacity: 0,
                    willChange: "transform, opacity",
                    transition: "none"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/inverted-cursor.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: innerRef,
                className: "pointer-events-none fixed top-0 left-0 z-[10000] rounded-full",
                style: {
                    backgroundColor: "#ffffff",
                    mixBlendMode: "difference",
                    width: INNER_BASE,
                    height: INNER_BASE,
                    opacity: 0,
                    willChange: "transform, opacity",
                    transition: "none"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ui/inverted-cursor.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Cursor;
}),
"[project]/frontend/src/components/straveda/CustomCursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$inverted$2d$cursor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/inverted-cursor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cursor$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/cursor-context.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CustomCursor({ children }) {
    // ─── Detect fine-pointer device via external store (SSR-safe) ──────
    const pointerMq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subscribeToPointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((onStoreChange)=>{
        if (!pointerMq.current) {
            pointerMq.current = window.matchMedia('(pointer: fine)');
        }
        pointerMq.current.addEventListener('change', onStoreChange);
        return ()=>{
            pointerMq.current?.removeEventListener('change', onStoreChange);
        };
    }, []);
    const getPointerSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!pointerMq.current) {
            pointerMq.current = window.matchMedia('(pointer: fine)');
        }
        return pointerMq.current.matches;
    }, []);
    const getPointerServerSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>false, []);
    const isDesktop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribeToPointer, getPointerSnapshot, getPointerServerSnapshot);
    // ─── Mobile / touch: render children only, no cursor ─────────────
    if (!isDesktop) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    // ─── Desktop: cursor context + premium cursor (fixed, no container) ─
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$cursor$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CursorProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$inverted$2d$cursor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cursor"], {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/CustomCursor.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/CustomCursor.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/straveda/CookieConsent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CookieConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cookie.mjs [app-ssr] (ecmascript) <export default as Cookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const STORAGE_KEY = 'straveda-cookie-consent';
function CookieConsent() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dismissed, setDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canInteract, setCanInteract] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = theme === 'dark';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const consent = localStorage.getItem(STORAGE_KEY);
        if (consent) return;
        const showTimer = setTimeout(()=>{
            setMounted(true);
            // Enable pointer events just after the entrance animation begins
            setTimeout(()=>{
                setCanInteract(true);
            }, 50);
        }, 6000);
        return ()=>clearTimeout(showTimer);
    }, []);
    const handleAccept = ()=>{
        localStorage.setItem(STORAGE_KEY, 'accepted');
        setDismissed(true);
    };
    const handleDecline = ()=>{
        localStorage.setItem(STORAGE_KEY, 'declined');
        setDismissed(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: canInteract ? '' : 'pointer-events-none',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: mounted && !dismissed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    y: 20,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                exit: {
                    y: 20,
                    opacity: 0
                },
                transition: {
                    duration: 0.6,
                    ease: [
                        0.4,
                        0,
                        0.2,
                        1
                    ]
                },
                className: "fixed bottom-28 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-full sm:max-w-2xl z-30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative rounded-2xl overflow-hidden",
                    style: {
                        background: isDark ? 'rgba(18, 18, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        boxShadow: isDark ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 right-0 h-[2px]",
                            style: {
                                background: 'linear-gradient(90deg, transparent 0%, #FF4800 30%, #FF4800 70%, transparent 100%)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-5 py-5 sm:px-6 sm:py-5 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shrink-0 mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center",
                                            style: {
                                                background: isDark ? 'rgba(255, 72, 0, 0.15)' : 'rgba(255, 72, 0, 0.08)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                                                className: "w-4 h-4",
                                                style: {
                                                    color: '#FF4800'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] sm:text-[14px] leading-relaxed",
                                                style: {
                                                    color: isDark ? '#9ca3af' : '#6b7280'
                                                },
                                                children: [
                                                    "We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "font-medium underline underline-offset-2 transition-colors hover:opacity-80",
                                                        style: {
                                                            color: '#FF4800'
                                                        },
                                                        children: "Privacy Policy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleDecline,
                                            className: "shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors",
                                            style: {
                                                color: isDark ? '#6b7280' : '#9ca3af'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = isDark ? 'rgba(255, 255, 255, 0.08)' : '#f9fafb';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = 'transparent';
                                            },
                                            "aria-label": "Close cookie consent",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 pl-11 sm:justify-end sm:pl-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleDecline,
                                            className: "text-[13px] sm:text-sm font-medium rounded-lg px-4 py-2 transition-all duration-200 border",
                                            style: {
                                                borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : '#e5e7eb',
                                                color: isDark ? '#9ca3af' : '#6b7280'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = isDark ? 'rgba(255, 255, 255, 0.06)' : '#f9fafb';
                                                e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.25)' : '#d1d5db';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = 'transparent';
                                                e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.15)' : '#e5e7eb';
                                            },
                                            children: "Decline"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleAccept,
                                            className: "text-[13px] sm:text-sm font-medium rounded-lg px-5 py-2 text-white transition-all duration-200",
                                            style: {
                                                background: '#FF4800',
                                                boxShadow: '0 2px 8px rgba(255, 72, 0, 0.25)'
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.background = '#e63f00';
                                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 72, 0, 0.35)';
                                                e.currentTarget.style.transform = 'translateY(-1px)';
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.background = '#FF4800';
                                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 72, 0, 0.25)';
                                                e.currentTarget.style.transform = 'translateY(0)';
                                            },
                                            children: "Accept"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, "cookie-consent", false, {
                fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
                lineNumber: 50,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/CookieConsent.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/straveda/ScrollProgress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * ScrollProgress — reads Lenis's --scroll-progress CSS custom property
 * directly via RAF instead of using Framer Motion's useScroll() + useSpring().
 *
 * FIX: Removed useScroll() + two useSpring() chains that were racing Lenis's
 * GSAP ticker on every frame. Now driven by the same CSS var that Lenis writes,
 * so it's always in sync with no double-subscription or 1-frame lag.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ScrollProgress() {
    const barRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pageKey, setPageKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Track previous progress for lerp smoothing (avoids spring lag)
    const prevProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleReset = ()=>setPageKey((k)=>k + 1);
        window.addEventListener('page-change', handleReset);
        return ()=>window.removeEventListener('page-change', handleReset);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let running = true;
        prevProgress.current = 0;
        const tick = ()=>{
            if (!running) return;
            // Read Lenis's scroll progress (0–1) directly — no React state, no re-render
            const raw = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scroll-progress') || '0');
            // Gentle lerp so the bar doesn't snap on page load
            const p = prevProgress.current + (raw - prevProgress.current) * 0.18;
            prevProgress.current = p;
            if (barRef.current) {
                barRef.current.style.transform = `scaleX(${p})`;
            }
            if (glowRef.current) {
                glowRef.current.style.opacity = String(Math.min(p * 4, 0.7));
            }
            if (wrapRef.current) {
                // Slide from 64px to 0px once user scrolls even slightly
                const top = p > 0.005 ? 0 : 64;
                wrapRef.current.style.top = `${top}px`;
            }
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return ()=>{
            running = false;
            cancelAnimationFrame(rafRef.current);
        };
    }, [
        pageKey
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: "fixed left-0 right-0 z-[60] h-[3px] pointer-events-none",
        style: {
            top: '64px',
            transition: 'top 0.3s ease'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: barRef,
                className: "h-full w-full origin-left",
                style: {
                    background: 'linear-gradient(90deg, #FF4800, #FF6B33)',
                    boxShadow: '0 0 8px rgba(255, 72, 0, 0.5), 0 0 20px rgba(255, 72, 0, 0.2)',
                    transform: 'scaleX(0)'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/ScrollProgress.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: glowRef,
                className: "absolute -bottom-[2px] left-0 right-0 h-[7px] rounded-full",
                style: {
                    background: 'linear-gradient(90deg, #FF4800, #FF6B33)',
                    opacity: 0,
                    filter: 'blur(6px)'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/ScrollProgress.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, pageKey, true, {
        fileName: "[project]/frontend/src/components/straveda/ScrollProgress.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/straveda/SearchOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$braces$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Braces$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/braces.mjs [app-ssr] (ecmascript) <export default as Braces>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
'use client';
;
;
;
;
const NAV_ITEMS = [
    {
        label: 'Home',
        page: 'home',
        description: 'Enterprise IT consulting overview',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
            lineNumber: 34,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: 'Services',
        page: 'services',
        description: 'Architecture, strategy, management, software',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$braces$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Braces$3e$__["Braces"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
            lineNumber: 40,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: 'About',
        page: 'about',
        description: 'Our team, mission, and expertise',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
            lineNumber: 46,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: 'Insights',
        page: 'insights',
        description: 'Blog articles and industry perspectives',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
            lineNumber: 52,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        label: 'Contact',
        page: 'contact',
        description: 'Get in touch with our team',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "h-5 w-5"
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
            lineNumber: 58,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
const BLOG_POSTS = [
    {
        title: 'The Manual Work Audit: How to Find 40% of Your Team\'s Time',
        category: 'Automation',
        page: 'insights'
    },
    {
        title: 'Custom CRM vs. Salesforce: When Off-the-Shelf Doesn\'t Fit',
        category: 'Custom Software',
        page: 'insights'
    },
    {
        title: 'AI for Your Business: The ROI-First Framework',
        category: 'AI Strategy',
        page: 'insights'
    },
    {
        title: 'Why Your Next Product Should Be Built for Speed, Not Perfection',
        category: 'Automation',
        page: 'insights'
    },
    {
        title: 'The Data Silo Problem: How to Build One Source of Truth',
        category: 'Systems',
        page: 'insights'
    },
    {
        title: 'Why Your Website Is Costing You Leads',
        category: 'Web Development',
        page: 'insights'
    }
];
function highlightMatch(text, query) {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i)=>regex.test(part) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: {
                color: '#FF4800'
            },
            children: part
        }, i, false, {
            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this) : part);
}
const ease = [
    0.4,
    0,
    0.2,
    1
];
function SearchOverlay({ isOpen, onClose, onNavigate }) {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-focus input on open, lock body scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Small delay to let animation start before focusing
            const timer = setTimeout(()=>{
                inputRef.current?.focus();
            }, 100);
            return ()=>{
                clearTimeout(timer);
                document.body.style.overflow = '';
            };
        }
        document.body.style.overflow = '';
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        isOpen
    ]);
    // Reset query when overlay opens (via callback in setTimeout)
    const prevIsOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(isOpen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!prevIsOpen.current && isOpen) {
            const t = setTimeout(()=>setQuery(''), 0);
            return ()=>clearTimeout(t);
        }
        prevIsOpen.current = isOpen;
    }, [
        isOpen
    ]);
    // Keyboard: Escape closes
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === 'Escape') {
            onClose();
        }
    }, [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            return ()=>document.removeEventListener('keydown', handleKeyDown);
        }
    }, [
        isOpen,
        handleKeyDown
    ]);
    // Real-time filtering
    const filteredNavItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!query.trim()) return NAV_ITEMS;
        const lowerQuery = query.toLowerCase();
        return NAV_ITEMS.filter((item)=>item.label.toLowerCase().includes(lowerQuery) || item.description.toLowerCase().includes(lowerQuery));
    }, [
        query
    ]);
    const filteredBlogPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!query.trim()) return [];
        const lowerQuery = query.toLowerCase();
        return BLOG_POSTS.filter((post)=>post.title.toLowerCase().includes(lowerQuery) || post.category.toLowerCase().includes(lowerQuery));
    }, [
        query
    ]);
    const handleNavigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((page)=>{
        onClose();
        onNavigate(page);
    }, [
        onClose,
        onNavigate
    ]);
    const totalResults = filteredNavItems.length + filteredBlogPosts.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-[70] flex items-start justify-center modal-overlay",
            style: {
                background: 'rgba(255, 255, 255, 0.97)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
            },
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
                duration: 0.25,
                ease
            },
            onClick: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative w-full max-w-[640px] mx-4 mt-[15vh]",
                initial: {
                    opacity: 0,
                    scale: 0.95,
                    y: -10
                },
                animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    scale: 0.95,
                    y: -10
                },
                transition: {
                    duration: 0.3,
                    ease
                },
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "absolute -top-12 right-0 flex items-center justify-center w-10 h-10 rounded-full hover:text-[#1a1a2e] hover:bg-black/[0.05] transition-all duration-200 cursor-pointer",
                        style: {
                            color: 'rgba(0, 0, 0, 0.4)'
                        },
                        "aria-label": "Close search",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                            lineNumber: 205,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                        lineNumber: 199,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5",
                                style: {
                                    color: '#9ca3af'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                lineNumber: 210,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                type: "text",
                                value: query,
                                onChange: (e)=>setQuery(e.target.value),
                                placeholder: "Search pages, articles...",
                                className: "w-full rounded-xl text-[16px] pl-12 pr-4 py-4 outline-none transition-shadow duration-200",
                                style: {
                                    background: '#FFFFFF',
                                    border: '1px solid #e5e7eb',
                                    color: '#1a1a2e'
                                },
                                onFocus: (e)=>{
                                    e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 72, 0, 0.2)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 72, 0, 0.4)';
                                },
                                onBlur: (e)=>{
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#e5e7eb';
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this),
                            query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setQuery(''),
                                className: "absolute right-4 top-1/2 -translate-y-1/2 hover:text-[#1a1a2e] transition-colors cursor-pointer",
                                style: {
                                    color: 'rgba(0, 0, 0, 0.3)'
                                },
                                "aria-label": "Clear search",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                    lineNumber: 242,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                lineNumber: 236,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                        lineNumber: 209,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 rounded-xl overflow-hidden max-h-[60vh] overflow-y-auto",
                        style: {
                            background: '#FFFFFF',
                            border: '1px solid rgba(0, 0, 0, 0.06)'
                        },
                        children: [
                            query.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3",
                                style: {
                                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px]",
                                    style: {
                                        color: '#9ca3af'
                                    },
                                    children: [
                                        totalResults,
                                        " result",
                                        totalResults !== 1 ? 's' : '',
                                        " found"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                    lineNumber: 258,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                lineNumber: 257,
                                columnNumber: 17
                            }, this),
                            filteredNavItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    !query.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pt-4 pb-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] uppercase tracking-wider font-medium",
                                            style: {
                                                color: '#9ca3af'
                                            },
                                            children: "Pages"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                            lineNumber: 269,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                        lineNumber: 268,
                                        columnNumber: 21
                                    }, this),
                                    filteredNavItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleNavigate(item.page),
                                            className: "w-full flex items-center gap-4 px-4 py-3.5 text-left transition-colors duration-150 hover:bg-black/[0.03] cursor-pointer group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-colors duration-150 group-hover:bg-black/[0.05]",
                                                    style: {
                                                        background: 'rgba(0, 0, 0, 0.03)',
                                                        color: '#6b7280'
                                                    },
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[15px] font-medium",
                                                            style: {
                                                                color: '#1a1a2e'
                                                            },
                                                            children: highlightMatch(item.label, query)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[13px]",
                                                            style: {
                                                                color: '#6b7280'
                                                            },
                                                            children: highlightMatch(item.description, query)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-4 w-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150",
                                                    style: {
                                                        color: '#FF4800'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, item.page, true, {
                                            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                            lineNumber: 275,
                                            columnNumber: 21
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                lineNumber: 266,
                                columnNumber: 17
                            }, this),
                            filteredBlogPosts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pt-3 pb-2 mt-1",
                                        style: {
                                            borderTop: '1px solid rgba(0, 0, 0, 0.06)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] uppercase tracking-wider font-medium",
                                            style: {
                                                color: '#9ca3af'
                                            },
                                            children: "Articles"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                            lineNumber: 307,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                        lineNumber: 306,
                                        columnNumber: 19
                                    }, this),
                                    filteredBlogPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleNavigate(post.page),
                                            className: "w-full flex items-start gap-4 px-4 py-3.5 text-left transition-colors duration-150 hover:bg-black/[0.03] cursor-pointer group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-colors duration-150 group-hover:bg-black/[0.05]",
                                                    style: {
                                                        background: 'rgba(0, 0, 0, 0.03)',
                                                        color: '#6b7280'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[15px] font-medium leading-snug",
                                                            style: {
                                                                color: '#1a1a2e'
                                                            },
                                                            children: highlightMatch(post.title, query)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                                            lineNumber: 324,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12px] mt-1",
                                                            style: {
                                                                color: '#FF4800'
                                                            },
                                                            children: post.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-4 w-4 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150",
                                                    style: {
                                                        color: '#FF4800'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, post.title, true, {
                                            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                            lineNumber: 312,
                                            columnNumber: 21
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                lineNumber: 305,
                                columnNumber: 17
                            }, this),
                            query.trim() && totalResults === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-10 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "h-8 w-8 mx-auto mb-3",
                                        style: {
                                            color: '#9ca3af'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                        lineNumber: 343,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px]",
                                        style: {
                                            color: '#6b7280'
                                        },
                                        children: [
                                            "No results for “",
                                            query,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                        lineNumber: 344,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] mt-1",
                                        style: {
                                            color: '#9ca3af'
                                        },
                                        children: "Try searching for a page or article title"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                        lineNumber: 347,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                lineNumber: 342,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                        lineNumber: 248,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-medium",
                                        style: {
                                            background: 'rgba(0, 0, 0, 0.04)',
                                            color: '#9ca3af',
                                            border: '1px solid rgba(0, 0, 0, 0.08)'
                                        },
                                        children: "ESC"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                        lineNumber: 357,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px]",
                                        style: {
                                            color: '#9ca3af'
                                        },
                                        children: "to close"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                        lineNumber: 367,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                lineNumber: 356,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-medium",
                                        style: {
                                            background: 'rgba(0, 0, 0, 0.04)',
                                            color: '#9ca3af',
                                            border: '1px solid rgba(0, 0, 0, 0.08)'
                                        },
                                        children: "↑↓"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                        lineNumber: 370,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px]",
                                        style: {
                                            color: '#9ca3af'
                                        },
                                        children: "to navigate"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                        lineNumber: 380,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                lineNumber: 369,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                        className: "inline-flex items-center justify-center px-2 py-0.5 rounded text-[11px] font-medium",
                                        style: {
                                            background: 'rgba(0, 0, 0, 0.04)',
                                            color: '#9ca3af',
                                            border: '1px solid rgba(0, 0, 0, 0.08)'
                                        },
                                        children: "↵"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                        lineNumber: 383,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px]",
                                        style: {
                                            color: '#9ca3af'
                                        },
                                        children: "to select"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                        lineNumber: 393,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                                lineNumber: 382,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                        lineNumber: 355,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
                lineNumber: 190,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
            lineNumber: 176,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/SearchOverlay.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/straveda/KeyboardHint.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KeyboardHint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function KeyboardHint() {
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setVisible(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(()=>setVisible(false), 3000);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            // Show hint on Tab, or any navigation key
            if ([
                'Tab',
                'ArrowLeft',
                'ArrowRight',
                'Home',
                'End'
            ].includes(e.key)) {
                show();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [
        show
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 10
            },
            transition: {
                duration: 0.25,
                ease: [
                    0.4,
                    0,
                    0.2,
                    1
                ]
            },
            className: "fixed bottom-5 left-1/2 z-40 -translate-x-1/2 select-none",
            role: "status",
            "aria-live": "polite",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-full px-5 py-2.5 text-center",
                style: {
                    background: 'rgba(30, 26, 63, 0.95)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: '#A1A1A1',
                    fontSize: '11px',
                    letterSpacing: '0.02em'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: "← → Navigate pages  |  1-5 Jump to page  |  Esc Close"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/KeyboardHint.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sm:hidden",
                        children: "← → Navigate  |  Esc Close"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/KeyboardHint.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/KeyboardHint.tsx",
                lineNumber: 47,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/KeyboardHint.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/KeyboardHint.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$SmoothScroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/SmoothScroll.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$Preloader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/Preloader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/Navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$BackToTop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/BackToTop.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$CustomCursor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/CustomCursor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$CookieConsent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/CookieConsent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$ScrollProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/ScrollProgress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$SearchOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/SearchOverlay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$KeyboardHint$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/KeyboardHint.tsx [app-ssr] (ecmascript)");
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
;
;
;
;
;
const pages = [
    'home',
    'services',
    'about',
    'insights',
    'careers',
    'contact',
    'testimonials'
];
const pageComponents = {
    home: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/frontend/src/components/straveda/pages/HomePage.tsx [app-ssr] (ecmascript, async loader)")),
    services: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/frontend/src/components/straveda/pages/ServicesPage.tsx [app-ssr] (ecmascript, async loader)")),
    about: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/frontend/src/components/straveda/pages/AboutPage.tsx [app-ssr] (ecmascript, async loader)")),
    insights: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/frontend/src/components/straveda/pages/InsightsPage.tsx [app-ssr] (ecmascript, async loader)")),
    careers: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/frontend/src/components/straveda/pages/CareersPage.tsx [app-ssr] (ecmascript, async loader)")),
    contact: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/frontend/src/components/straveda/pages/ContactPage.tsx [app-ssr] (ecmascript, async loader)")),
    testimonials: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/frontend/src/components/straveda/pages/TestimonialsPage.tsx [app-ssr] (ecmascript, async loader)"))
};
const pageVariants = {
    initial: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        }
    },
    exit: {
        opacity: 0,
        y: -15,
        transition: {
            duration: 0.3,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        }
    }
};
function PageLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[60vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-8 h-8 border-2 border-[#FF4800] border-t-transparent rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
function HomeContent() {
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('home');
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // Handle initial page from query param
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const pageParam = searchParams.get('page');
        if (pageParam && pages.includes(pageParam)) {
            setCurrentPage(pageParam);
        }
    }, [
        searchParams
    ]);
    // Handle back/forward buttons
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handlePopState = (e)=>{
            if (e.state && e.state.page) {
                setCurrentPage(e.state.page);
            } else {
                setCurrentPage('home');
            }
        };
        window.addEventListener('popstate', handlePopState);
        return ()=>window.removeEventListener('popstate', handlePopState);
    }, []);
    const handleNavigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((page)=>{
        const validPage = page;
        if (pages.includes(validPage)) {
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
            window.dispatchEvent(new CustomEvent('page-change'));
            // Update URL without reloading
            const newUrl = validPage === 'home' ? '/' : `?page=${validPage}`;
            window.history.pushState({
                page: validPage
            }, '', newUrl);
            setTimeout(()=>{
                setCurrentPage(validPage);
            }, 50);
        }
    }, []);
    // ── Keyboard navigation ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            const target = e.target;
            // Skip when user is typing in an input or textarea
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
            }
            const idx = pages.indexOf(currentPage);
            switch(e.key){
                case 'ArrowRight':
                    {
                        e.preventDefault();
                        const next = e.shiftKey ? (idx - 1 + pages.length) % pages.length : (idx + 1) % pages.length;
                        handleNavigate(pages[next]);
                        break;
                    }
                case 'ArrowLeft':
                    {
                        e.preventDefault();
                        const next = e.shiftKey ? (idx + 1) % pages.length : (idx - 1 + pages.length) % pages.length;
                        handleNavigate(pages[next]);
                        break;
                    }
                case 'Home':
                    {
                        e.preventDefault();
                        handleNavigate('home');
                        break;
                    }
                case 'End':
                    {
                        e.preventDefault();
                        handleNavigate('contact');
                        break;
                    }
                case 'Escape':
                    {
                        window.dispatchEvent(new CustomEvent('close-all'));
                        break;
                    }
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                    {
                        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
                            const pageIdx = parseInt(e.key) - 1;
                            if (pageIdx >= 0 && pageIdx < pages.length) {
                                e.preventDefault();
                                handleNavigate(pages[pageIdx]);
                            }
                        }
                        break;
                    }
                default:
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        currentPage,
        handleNavigate
    ]);
    // ── Update document title & announce to screen readers ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const titles = {
            home: 'Straveda — Enterprise IT Consulting & Technology Strategy',
            services: 'Services — Straveda',
            about: 'About — Straveda',
            insights: 'Insights — Straveda',
            careers: 'Careers — Straveda',
            contact: 'Contact — Straveda',
            testimonials: 'Testimonials — Straveda'
        };
        document.title = titles[currentPage];
    }, [
        currentPage
    ]);
    const CurrentPageComponent = pageComponents[currentPage];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$SmoothScroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$CustomCursor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResponsiveWrapper, {
                className: "noise-overlay bg-white dark:bg-[#121212] text-[#1a1a2e] dark:text-[#f0f0f5]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$Preloader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$ScrollProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        currentPage: currentPage,
                        onNavigate: handleNavigate,
                        onSearchToggle: ()=>setSearchOpen((prev)=>!prev)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-live": "polite",
                        "aria-atomic": "true",
                        className: "sr-only",
                        children: [
                            currentPage.charAt(0).toUpperCase() + currentPage.slice(1),
                            " page"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 w-full",
                        role: "main",
                        tabIndex: 0,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: pageVariants,
                                initial: "initial",
                                animate: "animate",
                                exit: "exit",
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageLoader, {}, void 0, false, {
                                        fileName: "[project]/frontend/src/app/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 37
                                    }, this),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentPageComponent, {
                                        onNavigate: handleNavigate
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 17
                                }, this)
                            }, currentPage, false, {
                                fileName: "[project]/frontend/src/app/page.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/page.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onNavigate: handleNavigate
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$SearchOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: searchOpen,
                        onClose: ()=>setSearchOpen(false),
                        onNavigate: (page)=>{
                            setSearchOpen(false);
                            handleNavigate(page);
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$BackToTop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$CookieConsent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$KeyboardHint$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/frontend/src/app/page.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/page.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 174,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/page.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageLoader, {}, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 216,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeContent, {}, void 0, false, {
            fileName: "[project]/frontend/src/app/page.tsx",
            lineNumber: 217,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/page.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_0w6d_ye._.js.map