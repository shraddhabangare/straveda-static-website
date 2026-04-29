(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/app/not-found.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const NAV_LINKS = [
    {
        label: 'Home',
        href: '/',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        label: 'Services',
        href: '/?page=services',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
    },
    {
        label: 'About',
        href: '/?page=about',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        label: 'Contact',
        href: '/?page=contact',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"]
    }
];
function NotFound() {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotFound.useEffect": ()=>{
            document.title = '404 — Page Not Found | Straveda';
        }
    }["NotFound.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotFound.useEffect": ()=>{
            const checkDark = {
                "NotFound.useEffect.checkDark": ()=>{
                    setIsDark(document.documentElement.classList.contains('dark'));
                }
            }["NotFound.useEffect.checkDark"];
            checkDark();
            const observer = new MutationObserver(checkDark);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    'class'
                ]
            });
            return ({
                "NotFound.useEffect": ()=>observer.disconnect()
            })["NotFound.useEffect"];
        }
    }["NotFound.useEffect"], []);
    const floatingDots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotFound.useMemo[floatingDots]": ()=>[
                {
                    id: 1,
                    x: '12%',
                    y: '18%',
                    size: 8,
                    color: '#FF4800',
                    delay: 0,
                    duration: 6
                },
                {
                    id: 2,
                    x: '85%',
                    y: '12%',
                    size: 6,
                    color: '#2B2358',
                    delay: 1.5,
                    duration: 8
                },
                {
                    id: 3,
                    x: '70%',
                    y: '70%',
                    size: 10,
                    color: '#FF4800',
                    delay: 3,
                    duration: 7
                },
                {
                    id: 4,
                    x: '25%',
                    y: '75%',
                    size: 5,
                    color: '#2B2358',
                    delay: 2,
                    duration: 9
                },
                {
                    id: 5,
                    x: '92%',
                    y: '45%',
                    size: 7,
                    color: '#FF4800',
                    delay: 4,
                    duration: 6.5
                },
                {
                    id: 6,
                    x: '8%',
                    y: '55%',
                    size: 6,
                    color: '#2B2358',
                    delay: 0.5,
                    duration: 7.5
                },
                {
                    id: 7,
                    x: '50%',
                    y: '8%',
                    size: 4,
                    color: '#FF4800',
                    delay: 2.5,
                    duration: 8.5
                },
                {
                    id: 8,
                    x: '38%',
                    y: '88%',
                    size: 5,
                    color: '#2B2358',
                    delay: 3.5,
                    duration: 7
                },
                {
                    id: 9,
                    x: '78%',
                    y: '30%',
                    size: 3,
                    color: '#FF4800',
                    delay: 1,
                    duration: 6
                },
                {
                    id: 10,
                    x: '60%',
                    y: '55%',
                    size: 4,
                    color: '#2B2358',
                    delay: 4.5,
                    duration: 8
                }
            ]
    }["NotFound.useMemo[floatingDots]"], []);
    const bg = isDark ? '#0a0a14' : '#FFFFFF';
    const textPrimary = isDark ? '#f0f0f5' : '#1a1a2e';
    const textSecondary = isDark ? '#9ca3af' : '#6b7280';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden",
        style: {
            backgroundColor: bg
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "fixed inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-[0.12] blur-3xl",
                        style: {
                            background: 'radial-gradient(circle, #FF4800 0%, transparent 60%)',
                            animation: 'nf-orb-1 12s ease-in-out infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/not-found.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.08] blur-3xl",
                        style: {
                            background: 'radial-gradient(circle, #2B2358 0%, transparent 60%)',
                            animation: 'nf-orb-2 14s ease-in-out infinite'
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/not-found.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    floatingDots.map((dot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute rounded-full",
                            style: {
                                left: dot.x,
                                top: dot.y,
                                width: dot.size,
                                height: dot.size,
                                backgroundColor: dot.color,
                                opacity: isDark ? 0.25 : 0.15,
                                animation: `nf-float-${dot.id % 3} ${dot.duration}s ease-in-out ${dot.delay}s infinite`
                            }
                        }, dot.id, false, {
                            fileName: "[project]/frontend/src/app/not-found.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute inset-0 w-full h-full opacity-[0.025]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                    id: "nf-dot-grid",
                                    x: "0",
                                    y: "0",
                                    width: "40",
                                    height: "40",
                                    patternUnits: "userSpaceOnUse",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "1",
                                        cy: "1",
                                        r: "1",
                                        fill: isDark ? '#f0f0f5' : '#1a1a2e'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/not-found.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/not-found.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/not-found.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "100%",
                                height: "100%",
                                fill: "url(#nf-dot-grid)"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/not-found.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/not-found.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/not-found.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes nf-orb-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 20px) scale(1.05); }
          66% { transform: translate(20px, -10px) scale(0.95); }
        }
        @keyframes nf-orb-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(25px, -30px) scale(1.08); }
          66% { transform: translate(-15px, 15px) scale(0.96); }
        }
        @keyframes nf-float-0 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -15px); }
          50% { transform: translate(-8px, -25px); }
          75% { transform: translate(12px, -10px); }
        }
        @keyframes nf-float-1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-12px, 8px); }
          50% { transform: translate(15px, -12px); }
          75% { transform: translate(-5px, 15px); }
        }
        @keyframes nf-float-2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(8px, 12px); }
          66% { transform: translate(-14px, -8px); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/not-found.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center max-w-2xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.5,
                            rotate: -20
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            rotate: 0
                        },
                        transition: {
                            delay: 0.1,
                            duration: 0.6,
                            type: 'spring',
                            stiffness: 150
                        },
                        className: "mx-auto mb-6 w-16 h-16 rounded-2xl flex items-center justify-center",
                        style: {
                            background: 'linear-gradient(135deg, rgba(255,72,0,0.1), rgba(43,35,88,0.08))',
                            border: '1px solid rgba(255,72,0,0.15)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                            size: 28,
                            style: {
                                color: '#FF4800'
                            },
                            strokeWidth: 1.5,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/app/not-found.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/not-found.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 30,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            scale: 1
                        },
                        transition: {
                            delay: 0.15,
                            duration: 0.7,
                            ease: [
                                0.4,
                                0,
                                0.2,
                                1
                            ]
                        },
                        className: "text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none tracking-tighter mb-2 select-none",
                        style: {
                            background: 'linear-gradient(135deg, #FF4800 0%, #2B2358 50%, #FF4800 100%)',
                            backgroundSize: '200% 200%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'nf-gradient-shift 4s ease-in-out infinite'
                        },
                        children: "404"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/not-found.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 15
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.3,
                            duration: 0.5
                        },
                        className: "text-xl sm:text-2xl font-semibold mb-4",
                        style: {
                            color: textPrimary
                        },
                        children: "Page Not Found"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/not-found.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 15
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.4,
                            duration: 0.5
                        },
                        className: "text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto",
                        style: {
                            color: textSecondary
                        },
                        children: "The page you're looking for doesn't exist or has been moved. Let's get you back on track."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/not-found.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 15
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.5,
                            duration: 0.5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs uppercase tracking-widest font-medium mb-4",
                                style: {
                                    color: textSecondary
                                },
                                children: "Where would you like to go?"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/not-found.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3 justify-center mb-8",
                                children: NAV_LINKS.map((link, index)=>{
                                    const Icon = link.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                        href: link.href,
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.55 + index * 0.08,
                                            duration: 0.4
                                        },
                                        "aria-label": `Navigate to ${link.label} page`,
                                        className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                                        style: {
                                            color: textPrimary,
                                            backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
                                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.borderColor = 'rgba(255,72,0,0.3)';
                                            e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,72,0,0.08)' : 'rgba(255,72,0,0.04)';
                                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,72,0,0.1)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
                                            e.currentTarget.style.backgroundColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 15,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/not-found.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this),
                                            link.label
                                        ]
                                    }, link.label, true, {
                                        fileName: "[project]/frontend/src/app/not-found.tsx",
                                        lineNumber: 227,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/not-found.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/not-found.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 15
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.8,
                            duration: 0.5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/",
                            "aria-label": "Go to the Straveda homepage",
                            className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200",
                            style: {
                                background: 'linear-gradient(135deg, #FF4800, #e03e00)',
                                boxShadow: '0 2px 16px rgba(255,72,0,0.3)'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 24px rgba(255,72,0,0.4)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 16px rgba(255,72,0,0.3)';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/not-found.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                "Go Home",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 14,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/not-found.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/app/not-found.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/app/not-found.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/not-found.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes nf-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/not-found.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/not-found.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_s(NotFound, "QGJUamEhdQHAIVfzvoqae77Tjwg=");
_c = NotFound;
var _c;
__turbopack_context__.k.register(_c, "NotFound");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_app_not-found_tsx_0egjzj4._.js.map