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
"[project]/frontend/src/components/straveda/ServiceComparison.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceComparison
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$braces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Braces$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/braces.mjs [app-client] (ecmascript) <export default as Braces>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.mjs [app-client] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.mjs [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$compare$2d$arrows$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCompareArrows$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-compare-arrows.mjs [app-client] (ecmascript) <export default as GitCompareArrows>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/* ------------------------------------------------------------------ */ /*  Data                                                               */ /* ------------------------------------------------------------------ */ const ease = [
    0.4,
    0,
    0.2,
    1
];
const comparisonData = {
    'enterprise-architecture': {
        name: 'Enterprise Architecture',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$braces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Braces$3e$__["Braces"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 28,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        focus: 'Application portfolio modernization through adaptive, open-standards architecture',
        duration: '3–12 months',
        idealFor: 'Enterprises with legacy systems needing scalable, maintainable architecture',
        deliverables: [
            'Architecture assessment & roadmap',
            'Microservices migration strategy',
            'Integration blueprint'
        ],
        investment: '$25K+',
        successRate: 94
    },
    'technology-strategy': {
        name: 'Technology Strategy',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 42,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        focus: 'Aligning IT investments with business goals for sustainable digital transformation',
        duration: '2–6 months',
        idealFor: 'Organizations planning digital transformation or cloud migration',
        deliverables: [
            'Digital transformation roadmap',
            'IT investment framework',
            'Cloud strategy document'
        ],
        investment: '$15K+',
        successRate: 91
    },
    'management-consulting': {
        name: 'Management Consulting',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 56,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        focus: 'Product, program & project management through agile delivery frameworks',
        duration: '1–6 months',
        idealFor: 'Teams needing delivery governance, stakeholder alignment, or PMO setup',
        deliverables: [
            'Delivery governance model',
            'Agile playbook & PMO framework',
            'Stakeholder alignment report'
        ],
        investment: '$10K+',
        successRate: 97
    },
    'software-solutions': {
        name: 'Software Solutions',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 70,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        focus: 'Deploying enterprise middleware and virtualization to maximize application performance',
        duration: '2–8 months',
        idealFor: 'Companies deploying or optimizing Red Hat, container, or integration platforms',
        deliverables: [
            'Platform deployment & config',
            'Performance tuning & optimization',
            'Knowledge transfer & training'
        ],
        investment: '$20K+',
        successRate: 96
    }
};
const criteria = [
    {
        label: 'Primary Focus',
        key: 'focus'
    },
    {
        label: 'Typical Duration',
        key: 'duration'
    },
    {
        label: 'Ideal For',
        key: 'idealFor'
    },
    {
        label: 'Key Deliverables',
        key: 'deliverables'
    },
    {
        label: 'Success Rate',
        key: 'successRate'
    }
];
const toggleConfig = [
    {
        id: 'enterprise-architecture',
        label: 'Enterprise Architecture',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$braces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Braces$3e$__["Braces"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 93,
            columnNumber: 76
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'technology-strategy',
        label: 'Technology Strategy',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 94,
            columnNumber: 68
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'management-consulting',
        label: 'Management Consulting',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 95,
            columnNumber: 72
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: 'software-solutions',
        label: 'Software Solutions',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
            size: 15
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 96,
            columnNumber: 66
        }, ("TURBOPACK compile-time value", void 0))
    }
];
/* ------------------------------------------------------------------ */ /*  Success Rate Bar                                                   */ /* ------------------------------------------------------------------ */ function SuccessRateBar({ rate, isDark }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-semibold text-sm",
                style: {
                    color: isDark ? '#f0f0f5' : '#1a1a2e'
                },
                children: [
                    rate,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 h-2 rounded-full overflow-hidden min-w-[60px]",
                style: {
                    background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        width: 0
                    },
                    animate: {
                        width: `${rate}%`
                    },
                    transition: {
                        duration: 0.8,
                        ease,
                        delay: 0.2
                    },
                    className: "h-full rounded-full bg-[#FF4800]"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c = SuccessRateBar;
/* ------------------------------------------------------------------ */ /*  Cell Renderer                                                      */ /* ------------------------------------------------------------------ */ function CellContent({ criterion, service, isDark }) {
    if (criterion.key === 'deliverables') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex flex-col gap-1",
            children: service.deliverables.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex items-start gap-1.5 text-sm",
                    style: {
                        color: isDark ? '#f0f0f5' : '#4a4a5a'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mt-0.5 text-[#FF4800] text-[10px] leading-none",
                            children: "•"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        d
                    ]
                }, i, true, {
                    fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 134,
            columnNumber: 7
        }, this);
    }
    if (criterion.key === 'successRate') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessRateBar, {
            rate: service.successRate,
            isDark: isDark
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 146,
            columnNumber: 12
        }, this);
    }
    const value = service[criterion.key];
    if (typeof value === 'string') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm",
            style: {
                color: isDark ? '#f0f0f5' : '#4a4a5a'
            },
            children: value
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 152,
            columnNumber: 12
        }, this);
    }
    return null;
}
_c1 = CellContent;
function ServiceComparison() {
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = resolvedTheme === 'dark';
    const toggleService = (id)=>{
        setSelected((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };
    const toggleAll = ()=>{
        setSelected((prev)=>{
            if (prev.size === 4) {
                return new Set();
            }
            return new Set(toggleConfig.map((t)=>t.id));
        });
    };
    const allSelected = selected.size === 4;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "px-6 py-24",
        style: {
            background: isDark ? '#12121e' : '#f8f8fc'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 text-center",
                    children: [
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
                                margin: '-100px'
                            },
                            transition: {
                                duration: 0.6,
                                ease
                            },
                            className: "mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FF4800]",
                            children: "SERVICE COMPARISON"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                                duration: 0.7,
                                delay: 0.15,
                                ease
                            },
                            className: "masked-title font-normal",
                            style: {
                                fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
                                lineHeight: 1.1,
                                letterSpacing: '-2.05px'
                            },
                            children: "Find the right solution for your enterprise."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        margin: '-50px'
                    },
                    transition: {
                        duration: 0.6,
                        delay: 0.3,
                        ease
                    },
                    className: "mb-8 flex flex-wrap items-center gap-3",
                    children: [
                        toggleConfig.map((t)=>{
                            const isActive = selected.has(t.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                layout: true,
                                onClick: ()=>toggleService(t.id),
                                whileTap: {
                                    scale: 0.96
                                },
                                className: "flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors border",
                                style: isActive ? {
                                    background: '#FF4800',
                                    color: '#ffffff',
                                    borderColor: '#FF4800'
                                } : {
                                    background: isDark ? '#1a1a2e' : '#FFFFFF',
                                    borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
                                    color: isDark ? '#9ca3af' : '#6b7280'
                                },
                                children: [
                                    t.icon,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: t.label
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                        lineNumber: 244,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, t.id, true, {
                                fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            layout: true,
                            onClick: toggleAll,
                            whileTap: {
                                scale: 0.96
                            },
                            className: `
              ml-auto flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors
              ${allSelected ? 'bg-[#FF4800] text-white' : 'border border-[#FF4800]/40 text-[#FF4800] hover:bg-[#FF4800]/5'}
            `,
                            style: allSelected ? undefined : {
                                background: isDark ? 'transparent' : '#FFFFFF'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$compare$2d$arrows$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCompareArrows$3e$__["GitCompareArrows"], {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Compare All"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: selected.size === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -10
                        },
                        transition: {
                            duration: 0.4,
                            ease
                        },
                        className: "flex flex-col items-center justify-center rounded-xl py-20 text-center",
                        style: {
                            background: isDark ? '#12121e' : '#FFFFFF',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$compare$2d$arrows$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitCompareArrows$3e$__["GitCompareArrows"], {
                                size: 48,
                                className: "mb-4",
                                style: {
                                    color: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                lineNumber: 283,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg",
                                style: {
                                    color: isDark ? '#9ca3af' : '#6b7280'
                                },
                                children: "Select services above to compare"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                lineNumber: 284,
                                columnNumber: 15
                            }, this)
                        ]
                    }, "empty", true, {
                        fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                        lineNumber: 271,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -10
                        },
                        transition: {
                            duration: 0.4,
                            ease
                        },
                        className: "overflow-hidden rounded-xl",
                        style: {
                            background: isDark ? '#12121e' : '#FFFFFF',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full min-w-[500px] border-collapse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                background: isDark ? '#1a1a2e' : '#f3f4f6'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-5 py-4 text-left text-[12px] font-semibold uppercase tracking-[0.15em] w-[160px]",
                                                    style: {
                                                        color: isDark ? '#9ca3af' : '#6b7280'
                                                    },
                                                    children: "Criteria"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 23
                                                }, this),
                                                Array.from(selected).map((id)=>{
                                                    const service = comparisonData[id];
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "px-5 py-4 text-left text-sm font-semibold",
                                                        style: {
                                                            color: isDark ? '#f0f0f5' : '#1a1a2e'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[#FF4800]",
                                                                    children: service.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "hidden md:inline",
                                                                    children: service.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                                                    lineNumber: 320,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "md:hidden",
                                                                    children: service.name.split(' ').map((w)=>w[0]).join('')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                                                    lineNumber: 321,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, id, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 27
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                            lineNumber: 306,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                        lineNumber: 305,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: criteria.map((criterion, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].tr, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    duration: 0.3,
                                                    ease,
                                                    delay: rowIdx * 0.05
                                                },
                                                style: rowIdx % 2 !== 0 ? {
                                                    background: isDark ? 'rgba(26,26,46,0.4)' : 'rgba(250,250,250,1)'
                                                } : undefined,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] align-top whitespace-nowrap",
                                                        style: {
                                                            color: isDark ? '#9ca3af' : '#6b7280'
                                                        },
                                                        children: criterion.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 25
                                                    }, this),
                                                    Array.from(selected).map((id)=>{
                                                        const service = comparisonData[id];
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-5 py-4 align-top",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CellContent, {
                                                                criterion: criterion,
                                                                service: service,
                                                                isDark: isDark
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, id, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 29
                                                        }, this);
                                                    })
                                                ]
                                            }, criterion.key, true, {
                                                fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                                lineNumber: 334,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                        lineNumber: 332,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                                lineNumber: 303,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                            lineNumber: 302,
                            columnNumber: 15
                        }, this)
                    }, "table", false, {
                        fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                        lineNumber: 289,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
            lineNumber: 192,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/ServiceComparison.tsx",
        lineNumber: 191,
        columnNumber: 5
    }, this);
}
_s(ServiceComparison, "cgW+XXmvYqN2fnmM0BjMJoeTaC0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c2 = ServiceComparison;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SuccessRateBar");
__turbopack_context__.k.register(_c1, "CellContent");
__turbopack_context__.k.register(_c2, "ServiceComparison");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/straveda/ServicesHoverModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesHoverModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$braces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Braces$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/braces.mjs [app-client] (ecmascript) <export default as Braces>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.mjs [app-client] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.mjs [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const serviceData = [
    {
        title: 'Enterprise Architecture',
        badge: 'ARCHITECTURE',
        short: 'Modernize your application portfolio with adaptive, open-standards architecture.',
        extended: 'We evolve your application portfolio using adaptive, open-standards architecture. Our solutions increase reliability, maintainability and interoperability — reducing technical debt while enabling agile practices.',
        capabilities: [
            'Portfolio modernization & rationalization',
            'Open standards & middleware integration',
            'Scalable microservices & API architecture',
            'Technical debt reduction'
        ],
        investment: '₹12L–₹35L',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$braces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Braces$3e$__["Braces"]
    },
    {
        title: 'Technology Strategy',
        badge: 'STRATEGY',
        short: 'Align IT investments with business goals for sustainable growth and faster time to market.',
        extended: 'We align your IT investments with business goals, creating clear roadmaps that accelerate time to market and position you for sustainable growth. Every decision is grounded in ROI, not trends.',
        capabilities: [
            'Digital transformation roadmaps',
            'IT investment & prioritization frameworks',
            'Cloud strategy & vendor assessment',
            'Competitive technology benchmarking'
        ],
        investment: '₹8L–₹20L',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"]
    },
    {
        title: 'Management Consulting',
        badge: 'MANAGEMENT',
        short: 'Expert program and project management through meticulous planning and execution.',
        extended: 'Expert Product, Program & Project management delivered through meticulous planning and execution. We eliminate bottlenecks and drive enterprise delivery — on time, on budget, and on scope.',
        capabilities: [
            'Product & program management',
            'Agile & PMO delivery frameworks',
            'Stakeholder alignment & governance',
            'Risk identification & mitigation'
        ],
        investment: '₹6L–₹18L',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"]
    },
    {
        title: 'Custom Software & AI Systems',
        badge: 'SOFTWARE',
        short: 'Bespoke software and AI-powered tools built to fit your exact workflow.',
        extended: 'We design and build custom software — CRMs, ops dashboards, AI-integrated platforms — that replace off-the-shelf tools and fit your exact business process. Off-the-shelf is built for average. You\'re not average.',
        capabilities: [
            'AI-powered CRM development',
            'Operational dashboards & analytics',
            'LLM & RAG system integration',
            'API integrations & data pipelines'
        ],
        investment: '₹15L–₹50L',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"]
    }
];
const ease = [
    0.4,
    0,
    0.2,
    1
];
function ServicesHoverModal({ onNavigate }) {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [panelOffset, setPanelOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const handleLearnMoreClick = (index)=>{
        if (activeIndex === index) {
            setActiveIndex(null);
            return;
        }
        const card = cardRefs.current[index];
        const grid = gridRef.current;
        if (card && grid) {
            const gridRect = grid.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();
            setPanelOffset(cardRect.left - gridRect.left);
        }
        setActiveIndex(index);
    };
    const activeService = activeIndex !== null ? serviceData[activeIndex] : null;
    const ActiveIcon = activeService?.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white dark:bg-[#0a0a14] py-24 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-14 text-center",
                    children: [
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
                                margin: '-100px'
                            },
                            transition: {
                                duration: 0.6,
                                ease
                            },
                            className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FF4800]",
                            children: "OUR EXPERTISE"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
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
                                duration: 0.7,
                                delay: 0.15,
                                ease
                            },
                            className: "mt-3 masked-title font-normal",
                            style: {
                                fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
                                lineHeight: 1.1,
                                letterSpacing: '-2.05px'
                            },
                            children: "Explore our service capabilities"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                            lineNumber: 124,
                            columnNumber: 11
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
                                margin: '-100px'
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.3,
                                ease
                            },
                            className: "mt-3 text-sm text-[#6b7280] dark:text-[#9ca3af]",
                            children: [
                                "Click ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#FF4800] font-semibold",
                                    children: "Learn more"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                    lineNumber: 141,
                                    columnNumber: 19
                                }, this),
                                " on any service to see full details"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: gridRef,
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: serviceData.map((service, index)=>{
                        const Icon = service.icon;
                        const isActive = activeIndex === index;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            ref: (el)=>{
                                cardRefs.current[index] = el;
                            },
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
                                margin: '-50px'
                            },
                            transition: {
                                duration: 0.6,
                                delay: index * 0.1,
                                ease
                            },
                            className: `card-premium group relative flex flex-col items-start gap-4 rounded-xl p-6 transition-all duration-300 ${isActive ? 'border border-[#FF4800]/40 bg-[#FF4800]/[0.03] shadow-[0_8px_30px_rgba(255,72,0,0.12)]' : 'glass-card hover:[border-color:rgba(255,72,0,0.2)] hover:-translate-y-1'}`,
                            children: [
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-0 right-0 h-[3px] rounded-t-xl bg-gradient-to-r from-[#FF4800] to-[#FF4800]/40"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                    lineNumber: 169,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block rounded-full bg-[#FF4800]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#FF4800]",
                                    children: service.badge
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-14 w-14 items-center justify-center rounded-xl",
                                    style: {
                                        background: 'linear-gradient(145deg, rgba(255,72,0,0.1), rgba(255,72,0,0.04))'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 28,
                                        className: "text-[#FF4800]",
                                        strokeWidth: 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                        lineNumber: 180,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-[#1a1a2e] dark:text-[#f0f0f5]",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed text-[#6b7280] dark:text-[#9ca3af]",
                                    children: service.short
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-auto pt-2 w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleLearnMoreClick(index),
                                        className: `group/btn w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${isActive ? 'bg-[#FF4800] text-white shadow-[0_4px_14px_rgba(255,72,0,0.35)]' : 'bg-[#FF4800]/10 text-[#FF4800] hover:bg-[#FF4800] hover:text-white hover:shadow-[0_4px_14px_rgba(255,72,0,0.3)]'}`,
                                        children: isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Close details ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 39
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Learn more ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 14,
                                                    className: "transition-transform group-hover/btn:translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 36
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                        lineNumber: 192,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                    lineNumber: 191,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                            lineNumber: 155,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: activeIndex !== null && activeService && ActiveIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            height: 0,
                            opacity: 0,
                            y: -10
                        },
                        animate: {
                            height: 'auto',
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            height: 0,
                            opacity: 0,
                            y: -10
                        },
                        transition: {
                            duration: 0.35,
                            ease
                        },
                        className: "overflow-hidden mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-card rounded-xl overflow-hidden relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 h-[3px] bg-gradient-to-r from-[#FF4800] to-[#FF4800]/20 hidden md:block",
                                    style: {
                                        left: `${panelOffset}px`,
                                        width: '180px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 bottom-0 left-0 w-[3px] bg-[#FF4800]"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                    lineNumber: 228,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 lg:p-10 pl-8 lg:pl-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col lg:flex-row gap-8 lg:gap-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 flex flex-col gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-20 w-20 items-center justify-center rounded-2xl",
                                                        style: {
                                                            background: 'linear-gradient(145deg, rgba(255,72,0,0.12), rgba(255,72,0,0.04))'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveIcon, {
                                                            size: 40,
                                                            className: "text-[#FF4800]",
                                                            strokeWidth: 1.5
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg bg-white dark:bg-white/[0.06] border border-[#e5e7eb] dark:border-white/[0.08] px-4 py-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] font-semibold uppercase tracking-wider text-[#9ca3af] mb-1",
                                                                children: "Investment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-base font-bold text-[#FF4800]",
                                                                children: activeService.investment
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                lineNumber: 232,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between gap-4 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-2xl lg:text-3xl font-semibold text-[#1a1a2e] dark:text-[#f0f0f5]",
                                                                children: activeService.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                lineNumber: 247,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setActiveIndex(null),
                                                                className: "flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#e5e7eb] dark:bg-white/[0.08] text-[#6b7280] hover:bg-[#FF4800] hover:text-white transition-all duration-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[15px] leading-relaxed text-[#6b7280] dark:text-[#9ca3af] mb-6 max-w-2xl",
                                                        children: activeService.extended
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8",
                                                        children: activeService.capabilities.map((cap, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#FF4800]/10",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            size: 11,
                                                                            className: "text-[#FF4800]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                            lineNumber: 265,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm text-[#4b5563] dark:text-[#9ca3af] font-medium",
                                                                        children: cap
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                        lineNumber: 267,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>onNavigate('contact'),
                                                                className: "rounded-lg bg-[#FF4800] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#e03e00] hover:shadow-[0_6px_20px_rgba(255,72,0,0.3)] btn-shine",
                                                                children: [
                                                                    "Start a project",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                        size: 14,
                                                                        className: "inline ml-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                        lineNumber: 278,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                lineNumber: 273,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setActiveIndex(null),
                                                                className: "rounded-lg border border-[#e5e7eb] dark:border-white/[0.12] bg-white dark:bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] transition-all hover:border-[#FF4800]/30 hover:text-[#FF4800]",
                                                                children: "Close"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                                lineNumber: 245,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                        lineNumber: 231,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                            lineNumber: 223,
                            columnNumber: 15
                        }, this)
                    }, `panel-${activeIndex}`, false, {
                        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                        lineNumber: 215,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/ServicesHoverModal.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_s(ServicesHoverModal, "bCXNnGtHWFr6eCQRkh/WfIf0Pg4=");
_c = ServicesHoverModal;
var _c;
__turbopack_context__.k.register(_c, "ServicesHoverModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/straveda/PageHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const ease = [
    0.4,
    0,
    0.2,
    1
];
function PageHeader({ eyebrow, title, subtitle, showBar = true, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
        initial: {
            opacity: 0,
            y: 28
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.7,
            ease
        },
        className: `w-full ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-5 text-[11px] font-bold uppercase tracking-[0.4em] text-[#FF4800]",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/PageHeader.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-6",
                children: [
                    showBar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 hidden md:block flex-shrink-0 rounded-full",
                        style: {
                            width: '3px',
                            height: '52px',
                            background: 'linear-gradient(180deg, #FF4800 0%, rgba(255,72,0,0.15) 100%)'
                        },
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/PageHeader.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "heading-gradient font-normal",
                        style: {
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            lineHeight: 1.0,
                            letterSpacing: '-2px'
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/PageHeader.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/PageHeader.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0,
                    y: 12
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.2,
                    ease
                },
                className: "mt-6 max-w-2xl text-[16px] leading-[1.75] text-gray-600 dark:text-gray-400",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/PageHeader.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/PageHeader.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = PageHeader;
var _c;
__turbopack_context__.k.register(_c, "PageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/straveda/pages/ServicesPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$diamond$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Diamond$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/diamond.mjs [app-client] (ecmascript) <export default as Diamond>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.mjs [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.mjs [app-client] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.mjs [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code.mjs [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.mjs [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.mjs [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/workflow.mjs [app-client] (ecmascript) <export default as Workflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$MagneticButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/MagneticButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$ServiceComparison$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/ServiceComparison.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$ServicesHoverModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/ServicesHoverModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/PageHeader.tsx [app-client] (ecmascript)");
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
/* ------------------------------------------------------------------ */ /* Component-level Styles                                             */ /* ------------------------------------------------------------------ */ function ServicesPageStyles() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
        children: `
      .btn-shine {
        position: relative;
        overflow: hidden;
      }
      .btn-shine::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          45deg,
          transparent,
          rgba(255, 255, 255, 0.2),
          transparent
        );
        transform: rotate(45deg);
        transition: 0.6s;
      }
      .btn-shine:hover::after {
        left: 120%;
      }

      .stroke-text {
        -webkit-text-stroke: 2px rgba(255, 72, 0, 0.08);
        color: transparent;
      }
      .dark .stroke-text {
        -webkit-text-stroke: 2px rgba(255, 72, 0, 0.12);
      }

      .masked-title {
        background: linear-gradient(
          to right,
          #ffffff 0%,
          #ffffff 50%,
          rgba(255, 72, 0, 0.8) 85%,
          rgba(255, 72, 0, 0.2) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      .light .masked-title {
        background: linear-gradient(
          to right,
          #1a1a2e 0%,
          #1a1a2e 50%,
          rgba(255, 72, 0, 0.9) 85%,
          rgba(255, 72, 0, 0.3) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = ServicesPageStyles;
const services = [
    {
        id: 'automation',
        badge: 'AUTOMATION',
        title: 'AI & Business Automation',
        body: ' WhatsApp flows that qualify leads and drive conversions. Behavior-triggered email sequences for engagement and retention. AI agents handling tier-1 customer support. Workflow automation reducing manual operational load. 30–60% reduction in manual operations within the first 90 days',
        capabilities: [
            'WhatsApp Automation: AI-powered lead qualification & instant booking',
            'Email Sequences: Behavioral triggers that run without touching your CRM',
            'AI Support: Tier-1 handled by AI, complex issues auto-escalate'
        ],
        number: '01'
    },
    {
        id: 'custom-software',
        badge: 'SOFTWARE',
        title: 'Custom Software & Systems',
        body: "AI-powered CRMs designed for real team adoption. Real-time dashboards replacing fragmented monitoring tools. Internal systems built around your workflows (not rigid SaaS tools). Centralized data systems for better decision-making.",
        capabilities: [
            'AI-Powered CRMs: Built around your specific sales process',
            'Operational Dashboards: Real-time visibility into your core metrics',
            'Customer Portals: Reduce support volume with intelligent self-service'
        ],
        number: '02'
    },
    {
        id: 'ai-strategy',
        badge: 'STRATEGY',
        title: 'AI Strategy & Integration',
        body: 'Deployment of GPT-class models and advanced AI APIs. Custom LLM integration tailored to business workflows. End-to-end AI architecture, training, and deployment. Seamless integration into your existing tech stack.',
        capabilities: [
            'AI Architecture: Phased roadmap to deploy where it creates real ROI',
            'LLM Fine-Tuning: Models trained on your specific business context',
            'RAG Systems: AI that answers questions using your private secure data'
        ],
        number: '03'
    },
    {
        id: 'web-development',
        badge: 'DIGITAL',
        title: 'Web Design & Experiences',
        body: 'High-performance websites built using modern frameworks (e.g., Next.js). 3D interactive experiences for premium brand differentiation. Conversion-focused landing pages (not just visual design). Fast-loading, SEO-ready, edge-deployed architecture. 2–4x improvement in conversion rates compared to template-based sites',
        capabilities: [
            'Next.js Performance: Sub-second loads and global edge deployment',
            '3D & Interactive: Make your brand unforgettable with immersive builds',
            'Conversion Funnels: A/B testing and analytics built into the core'
        ],
        number: '04'
    }
];
/* ------------------------------------------------------------------ */ /* Hero Section                                                       */ /* ------------------------------------------------------------------ */ function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-white dark:bg-[#0a0a14] px-6 pt-32 pb-20 overflow-hidden border-b border-black/[0.06] dark:border-white/[0.06]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-5xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                eyebrow: "Our Expertise",
                title: "Enterprise Software & AI Automation Services",
                subtitle: "We build high-performance infrastructure and intelligent automation systems designed for the next generation of enterprise growth."
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
            lineNumber: 166,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_c1 = HeroSection;
/* ------------------------------------------------------------------ */ /* Service Block                                                      */ /* ------------------------------------------------------------------ */ function ServiceBlock({ service, index }) {
    _s();
    const isEven = index % 2 === 0;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start end",
            "end start"
        ]
    });
    const yValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        -60,
        60
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: containerRef,
        className: `relative overflow-hidden px-6 py-24 lg:px-16 ${isEven ? 'bg-white dark:bg-[#0a0a14]' : 'bg-[#fcfcfd] dark:bg-[#0d0d1a]'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                style: {
                    y: yValue
                },
                className: `stroke-text absolute top-0 select-none text-[18rem] font-black leading-none lg:text-[28rem] ${isEven ? '-left-10' : '-right-10'}`,
                children: service.number
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-6 inline-block rounded-full bg-[#FF4800]/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#FF4800]",
                                children: service.badge
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative pl-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 top-0 h-full w-[2px] bg-[#FF4800]"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "masked-title mb-8 font-normal",
                                        style: {
                                            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                            lineHeight: 1.1,
                                            letterSpacing: '-2.05px'
                                        },
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-10 text-lg leading-relaxed text-[#6b7280] dark:text-[#9ca3af]",
                                children: service.body
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$MagneticButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-shine rounded-xl bg-[#FF4800] px-10 py-4 text-[13px] font-bold uppercase tracking-widest text-white shadow-lg",
                                    children: "Book Strategy Call"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                    lineNumber: 225,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-5 sm:grid-cols-2",
                            children: service.capabilities.map((cap, i)=>{
                                const [label, desc] = cap.split(':');
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group glass-card rounded-2xl p-7 transition-colors hover:border-[#FF4800]/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FF4800]/10 text-[#FF4800]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                                lineNumber: 238,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                            lineNumber: 237,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-normal tracking-tight text-[#1a1a2e] dark:text-white",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                            lineNumber: 240,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[14px] leading-relaxed text-[#6b7280] dark:text-[#9ca3af]",
                                            children: desc
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                            lineNumber: 243,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s(ServiceBlock, "OVnT014DqjyQYPaitaLGzlqhWy8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c2 = ServiceBlock;
/* ------------------------------------------------------------------ */ /* Expertise & Tech Stack                                             */ /* ------------------------------------------------------------------ */ function WhyStravedaSection() {
    const whyCards = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$diamond$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Diamond$3e$__["Diamond"], {
                size: 32,
                className: "text-[#FF4800]",
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 263,
                columnNumber: 13
            }, this),
            title: 'Automation-First',
            body: 'We audit what can be removed before we build. We prune scope—then automate what remains.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"], {
                size: 32,
                className: "text-[#FF4800]",
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 268,
                columnNumber: 13
            }, this),
            title: 'Weekly Shipping',
            body: 'One-week sprints with visible builds every Friday. You see working code, not slide decks.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                size: 32,
                className: "text-[#FF4800]",
                strokeWidth: 1.5
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 273,
                columnNumber: 13
            }, this),
            title: 'Full Ownership',
            body: 'Zero vendor lock-in. You own 100% of the source code and the intellectual property.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-white dark:bg-[#0a0a14] px-6 pb-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 grid-cols-1 md:grid-cols-3",
                children: whyCards.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 15
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "glass-card flex flex-col h-full rounded-2xl p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: card.icon
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                lineNumber: 291,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xl font-normal tracking-[-0.02em] text-gray-900 dark:text-white",
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                lineNumber: 292,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 flex-1 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400",
                                children: card.body
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                lineNumber: 293,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 284,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 282,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
            lineNumber: 281,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
_c3 = WhyStravedaSection;
function TechStackSection() {
    const techCategories = [
        {
            label: 'Frontend',
            items: [
                {
                    name: 'Next.js',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 307,
                        columnNumber: 34
                    }, this)
                },
                {
                    name: 'React',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 308,
                        columnNumber: 32
                    }, this)
                },
                {
                    name: 'TypeScript',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 309,
                        columnNumber: 37
                    }, this)
                },
                {
                    name: 'Tailwind CSS',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 310,
                        columnNumber: 39
                    }, this)
                }
            ]
        },
        {
            label: 'AI & Automation',
            items: [
                {
                    name: 'OpenAI GPT-4o',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 316,
                        columnNumber: 40
                    }, this)
                },
                {
                    name: 'Claude API',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 317,
                        columnNumber: 37
                    }, this)
                },
                {
                    name: 'LangChain',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 318,
                        columnNumber: 36
                    }, this)
                },
                {
                    name: 'Vector DBs',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 319,
                        columnNumber: 37
                    }, this)
                }
            ]
        },
        {
            label: 'Infrastructure',
            items: [
                {
                    name: 'AWS / GCP',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 325,
                        columnNumber: 36
                    }, this)
                },
                {
                    name: 'Docker',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 326,
                        columnNumber: 33
                    }, this)
                },
                {
                    name: 'CI/CD',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 327,
                        columnNumber: 32
                    }, this)
                },
                {
                    name: 'Security',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 328,
                        columnNumber: 35
                    }, this)
                }
            ]
        },
        {
            label: 'Data & Backend',
            items: [
                {
                    name: 'PostgreSQL',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 334,
                        columnNumber: 37
                    }, this)
                },
                {
                    name: 'Redis',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 335,
                        columnNumber: 32
                    }, this)
                },
                {
                    name: 'Node.js',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 336,
                        columnNumber: 34
                    }, this)
                },
                {
                    name: 'REST / GraphQL',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                        size: 24,
                        className: "text-[#FF4800]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 337,
                        columnNumber: 41
                    }, this)
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white dark:bg-[#0a0a14] py-24 border-t border-black/[0.06] dark:border-white/[0.06]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "masked-title mb-4 font-normal",
                    style: {
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        lineHeight: 1.1,
                        letterSpacing: '-2.05px'
                    },
                    children: "Mastered Technologies"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                    lineNumber: 345,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-16 text-sm text-[#6b7280] dark:text-[#9ca3af]",
                    children: "A full-stack toolkit — from interface to inference."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                    lineNumber: 351,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-10",
                    children: techCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 text-xs font-semibold uppercase tracking-widest text-[#FF4800]",
                                    children: category.label
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
                                    children: category.items.map((tech, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card flex flex-col items-center justify-center gap-4 rounded-2xl p-8",
                                            children: [
                                                tech.icon,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-bold uppercase tracking-widest text-[#1a1a2e] dark:text-white",
                                                    children: tech.name
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                            lineNumber: 360,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, category.label, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                            lineNumber: 356,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                    lineNumber: 354,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
            lineNumber: 344,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
        lineNumber: 343,
        columnNumber: 5
    }, this);
}
_c4 = TechStackSection;
function ServicesPage({ onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white dark:bg-[#0a0a14]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServicesPageStyles, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 381,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhyStravedaSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$ServicesHoverModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onNavigate: onNavigate
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceBlock, {
                        service: service,
                        index: index
                    }, service.id, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechStackSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$ServiceComparison$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
                lineNumber: 393,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/pages/ServicesPage.tsx",
        lineNumber: 380,
        columnNumber: 5
    }, this);
}
_c5 = ServicesPage;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ServicesPageStyles");
__turbopack_context__.k.register(_c1, "HeroSection");
__turbopack_context__.k.register(_c2, "ServiceBlock");
__turbopack_context__.k.register(_c3, "WhyStravedaSection");
__turbopack_context__.k.register(_c4, "TechStackSection");
__turbopack_context__.k.register(_c5, "ServicesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_components_straveda_0chi4x.._.js.map