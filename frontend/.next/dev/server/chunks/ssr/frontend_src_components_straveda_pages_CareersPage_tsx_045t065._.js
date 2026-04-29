module.exports = [
"[project]/frontend/src/components/straveda/pages/CareersPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CareersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const ease = [
    0.16,
    1,
    0.3,
    1
];
const fadeUp = {
    initial: {
        opacity: 0,
        y: 30
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: true
    },
    transition: {
        duration: 0.8,
        ease
    }
};
// ── Data ─────────────────────────────────────────────────────────────────────
const OPEN_ROLES = [
    {
        title: 'Full-Stack Engineer',
        type: 'Full-time',
        track: 'Engineering',
        location: 'Remote / Nashik',
        tags: [
            'Next.js',
            'TypeScript',
            'Node.js'
        ],
        desc: 'Build scalable web applications and internal tools for our clients. You will own features end-to-end, from API design to pixel-perfect UI.'
    },
    {
        title: 'AI/ML Engineer',
        type: 'Full-time',
        track: 'AI & Automation',
        location: 'Remote / Nashik',
        tags: [
            'Python',
            'LLMs',
            'LangChain'
        ],
        desc: 'Design and deploy AI-powered workflows and automation pipelines. Work directly with cutting-edge language models and integrate them into production systems.'
    },
    {
        title: 'Automation Specialist',
        type: 'Full-time',
        track: 'AI & Automation',
        location: 'Remote',
        tags: [
            'n8n',
            'WhatsApp API',
            'Zapier'
        ],
        desc: 'Architect end-to-end automation workflows that eliminate manual operations for growing businesses. Deep knowledge of integration platforms is a plus.'
    },
    {
        title: 'Product Designer',
        type: 'Contract',
        track: 'Design',
        location: 'Remote',
        tags: [
            'Figma',
            'UX Research',
            'Design Systems'
        ],
        desc: "Translate complex business requirements into clean, intuitive interfaces. You care deeply about user experience and push back on anything that gets in the user's way."
    }
];
const HIRING_STAGES = [
    {
        stage: 'Stage 1',
        title: 'Initial Conversation',
        duration: '15 min',
        timeline: 'Within 3 days of applying',
        format: 'Phone call with recruiter or hiring manager',
        assesses: 'Cultural fit. Communication. Why you\'re interested in StravedaTech.'
    },
    {
        stage: 'Stage 2',
        title: 'Portfolio / Technical Review',
        duration: '30 min',
        timeline: '3–5 days after Stage 1',
        format: 'Share portfolio (designers, frontend), GitHub repos (engineers), or past projects. We review, ask questions on a Zoom call.',
        assesses: 'Your work. Quality. Process. Depth of thinking.'
    },
    {
        stage: 'Stage 3',
        title: 'Take-Home Project',
        duration: 'Optional',
        timeline: 'Flexible',
        format: 'Real-world problem from our work. Build a feature. Fix a design. No weird algorithmic puzzles.',
        assesses: 'How you code/design. Problem-solving. Communication about trade-offs.'
    },
    {
        stage: 'Stage 4',
        title: 'Team Interview',
        duration: '20 min',
        timeline: '3–5 days after project submission',
        format: 'Meet 2–3 team members (rotating panels). Technical deep dive on your take-home. Ask us anything.',
        assesses: 'Fit with team. Communication. How you think about problems.'
    },
    {
        stage: 'Stage 5',
        title: 'Offer',
        duration: '~1 week',
        timeline: 'Within 3–5 days of final interview',
        format: 'Call with our CEO or hiring director. Discuss comp, benefits, start date, questions.',
        assesses: 'If we both want to work together, we make an offer.'
    }
];
const ROLE_TRACKS = [
    {
        track: 'AI & Automation',
        levels: [
            {
                title: 'Automation Engineer (Entry)',
                desc: 'Build workflows, implement automation systems, learn real client use cases.'
            },
            {
                title: 'Automation Engineer (Mid)',
                desc: 'Design complex systems, lead automation logic, mentor juniors.'
            },
            {
                title: 'Senior Automation Architect',
                desc: 'Define AI strategies, design scalable systems, lead client solutions.'
            },
            {
                title: 'Principal AI Engineer',
                desc: 'Set AI vision, drive innovation, influence company direction.'
            }
        ]
    },
    {
        track: 'Custom Software',
        levels: [
            {
                title: 'Developer (Entry)',
                desc: 'Build features, understand systems, ship consistently.'
            },
            {
                title: 'Developer (Mid)',
                desc: 'Own modules, design APIs, handle end-to-end delivery.'
            },
            {
                title: 'Senior Engineer',
                desc: 'Lead projects, mentor team, make architectural decisions.'
            },
            {
                title: 'Tech Lead / Engineering Manager',
                desc: 'Build teams, define systems, drive execution.'
            }
        ]
    },
    {
        track: 'Design',
        levels: [
            {
                title: 'Product Designer (Entry)',
                desc: 'Design interfaces, support user research.'
            },
            {
                title: 'Product Designer (Mid)',
                desc: 'Own product flows, lead UX decisions.'
            },
            {
                title: 'Senior Designer / Lead',
                desc: 'Drive design systems, mentor team.'
            },
            {
                title: 'Design Director',
                desc: 'Define design strategy, influence product direction.'
            }
        ]
    }
];
const CERTIFICATIONS = [
    {
        area: 'Cloud Architecture',
        certs: [
            'AWS Solutions Architect',
            'GCP Professional',
            'Azure Fundamentals'
        ]
    },
    {
        area: 'AI / ML',
        certs: [
            'DeepLearning.AI Specializations',
            'Anthropic API Certification',
            'LangChain Advanced'
        ]
    },
    {
        area: 'Product & Design',
        certs: [
            'Reforge',
            'Nielsen Norman Group UX',
            'Jobs to be Done'
        ]
    },
    {
        area: 'Leadership',
        certs: [
            'RadReads Coaching',
            'Management Training for Leads',
            'Exec Presence Workshops'
        ]
    }
];
const MENTORSHIPS = [
    {
        from: 'Junior engineer',
        to: 'Senior architect',
        focus: 'learning system design'
    },
    {
        from: 'Designer',
        to: 'PM',
        focus: 'learning product thinking'
    },
    {
        from: 'Mid-level engineer',
        to: 'Startup founder',
        focus: 'learning to lead'
    },
    {
        from: 'PM',
        to: 'Design director',
        focus: 'learning design systems'
    }
];
const VALUES = [
    {
        title: 'Remove Friction',
        body: 'Every project starts with "What can we remove?" not "What should we build?" We\'re ruthless about complexity. Elegant solutions over clever code.',
        practice: 'Code reviews focus on readability. Meetings have agendas. Tools are chosen for power + simplicity.'
    },
    {
        title: 'Own Outcomes',
        body: 'We don\'t ship features. We ship results. Every piece of work is tied to a metric: support tickets reduced, conversion lifted, time saved.',
        practice: 'We measure everything. We follow up with clients post-launch. We iterate based on data.'
    },
    {
        title: 'Grow Together',
        body: 'Your growth is ours. We mentor. We invest in learning. We celebrate wins (big and small). We give honest feedback.',
        practice: 'Learning budgets. Mentorship program. Clear promotion pathways. Everyone gets a say on big decisions.'
    }
];
const inputCls = "w-full rounded-lg px-4 py-2.5 text-[13px] border border-black/[0.1] dark:border-white/[0.1] bg-white/60 dark:bg-white/[0.04] text-[#1a1a2e] dark:text-[#f0f0f5] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#FF4800]/40 transition";
const EMPTY_FORM = {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    whyJoin: '',
    resume: null
};
// ── ApplyForm ─────────────────────────────────────────────────────────────────
function ApplyForm({ roleTitle, onClose }) {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(EMPTY_FORM);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const set = (key)=>(e)=>setForm((f)=>({
                    ...f,
                    [key]: e.target.value
                }));
    const handleFile = (e)=>{
        setForm((f)=>({
                ...f,
                resume: e.target.files?.[0] ?? null
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!form.resume) {
            setErrorMsg('Please attach your resume (PDF).');
            return;
        }
        setStatus('loading');
        setErrorMsg('');
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    portfolio: form.portfolio || form.linkedin,
                    message: form.whyJoin,
                    position: roleTitle,
                    formType: 'career'
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
            setStatus('success');
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Failed to submit. Please try again.';
            setStatus('error');
            setErrorMsg(msg);
        }
    };
    if (status === 'success') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-7 pb-8 pt-6 text-center",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",
                    style: {
                        background: 'rgba(255,72,0,0.1)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "#FF4800",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                            points: "20 6 9 17 4 12"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 228,
                            columnNumber: 151
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 227,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[15px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] mb-1",
                    children: "Application submitted!"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[13px] text-[#6b7280] dark:text-[#9ca3af]",
                    children: "We'll review it and get back to you within 5 business days."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "mt-5 text-[12px] text-[#FF4800] font-medium hover:underline",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
            lineNumber: 226,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        onClick: (e)=>e.stopPropagation(),
        className: "px-7 pb-8 pt-2 border-t border-black/[0.06] dark:border-white/[0.06]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[12px] font-bold uppercase tracking-widest text-[#FF4800] mb-5 mt-5",
                children: [
                    "Apply — ",
                    roleTitle
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-3 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                                children: "Full Name *"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: form.name,
                                onChange: set('name'),
                                placeholder: "Your name",
                                className: inputCls
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                                children: "Email *"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                type: "email",
                                value: form.email,
                                onChange: set('email'),
                                placeholder: "you@example.com",
                                className: inputCls
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                                children: "Phone"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.phone,
                                onChange: set('phone'),
                                placeholder: "+91 98000 00000",
                                className: inputCls
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                                children: "LinkedIn URL"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: form.linkedin,
                                onChange: set('linkedin'),
                                placeholder: "linkedin.com/in/you",
                                className: inputCls
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                        children: "Portfolio / GitHub"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: form.portfolio,
                        onChange: set('portfolio'),
                        placeholder: "github.com/you or yoursite.com",
                        className: inputCls
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                        children: "Why do you want to join Straveda? *"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        required: true,
                        rows: 4,
                        value: form.whyJoin,
                        onChange: set('whyJoin'),
                        placeholder: "Tell us what excites you about this role...",
                        className: inputCls + ' resize-none'
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                        children: "Resume (PDF, max 5 MB) *"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileRef,
                        type: "file",
                        accept: ".pdf",
                        onChange: handleFile,
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>fileRef.current?.click(),
                        className: "flex items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] border border-dashed border-[#FF4800]/40 text-[#FF4800] hover:bg-[#FF4800]/5 transition w-full justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                        lineNumber: 271,
                                        columnNumber: 154
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "17 8 12 3 7 8"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                        lineNumber: 271,
                                        columnNumber: 206
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12",
                                        y1: "3",
                                        x2: "12",
                                        y2: "15"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                        lineNumber: 271,
                                        columnNumber: 241
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            form.resume ? form.resume.name : 'Upload Resume PDF'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[12px] text-red-500 mb-3",
                children: errorMsg
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 275,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: status === 'loading',
                        className: "rounded-lg px-6 py-2.5 text-[13px] font-medium text-white transition-all duration-200 disabled:opacity-60",
                        style: {
                            background: '#FF4800'
                        },
                        onMouseEnter: (e)=>{
                            if (status !== 'loading') e.currentTarget.style.background = '#e03e00';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = '#FF4800';
                        },
                        children: status === 'loading' ? 'Submitting…' : 'Submit Application →'
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "text-[12px] text-[#9ca3af] hover:text-[#6b7280] transition",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
}
// ── Sections ──────────────────────────────────────────────────────────────────
function HeroSection({ onViewRoles }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-[#f5f5f0] dark:bg-[#030303] pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...fadeUp,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-[1px] w-8 bg-[#FF4800]"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold uppercase tracking-[0.4em] text-[#FF4800]",
                                    children: "Careers at StravedaTech"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-[42px] md:text-[66px] font-light leading-[1] tracking-[-2px] mb-6 text-[#1a1a2e] dark:text-[#f0f0f5] max-w-3xl",
                            children: [
                                "Build the systems that eliminate busywork",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 302,
                                    columnNumber: 54
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#FF4800'
                                    },
                                    children: "for mid-market teams."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[17px] leading-[1.7] text-[#6b7280] dark:text-[#9ca3af] max-w-2xl mb-10",
                            children: "We solve operational problems by removing what's unnecessary before building anything new. You'll create AI systems, software, and experiences that deliver measurable outcomes—not just output."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onViewRoles,
                                    className: "rounded-lg px-7 py-3 text-[14px] font-medium text-white transition-all",
                                    style: {
                                        background: '#FF4800'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = '#e03e00';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = '#FF4800';
                                    },
                                    children: "View All Open Roles →"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/about",
                                    className: "rounded-lg px-7 py-3 text-[14px] font-medium text-[#1a1a2e] dark:text-[#f0f0f5] border border-black/[0.12] dark:border-white/[0.12] hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-all",
                                    children: "Learn More About Us"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 318,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.8,
                        delay: 0.2,
                        ease
                    },
                    className: "mt-16 glass-card rounded-2xl p-8 md:p-10 max-w-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "28",
                            height: "20",
                            viewBox: "0 0 28 20",
                            fill: "none",
                            className: "mb-5",
                            style: {
                                opacity: 0.3
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 20V12C0 5.373 4.701 1.12 14.103 0l1.33 2.24C10.19 3.307 7.493 5.84 6.72 9.6H12V20H0zm16 0V12C16 5.373 20.701 1.12 30.103 0l1.33 2.24C26.19 3.307 23.493 5.84 22.72 9.6H28V20H16z",
                                fill: "#1a1a2e",
                                className: "dark:fill-white"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] leading-[1.8] text-[#1a1a2e] dark:text-[#f0f0f5] mb-5",
                            children: "“I came to StravedaTech to solve problems, and that's exactly what we do every day. Last quarter, I led a project that cut our client's manual operations by 50% in 6 weeks. That's the impact we deliver.”"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-semibold",
                                    style: {
                                        background: '#FF4800'
                                    },
                                    children: "S"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5]",
                                            children: "StravedaTech Team Member"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[#6b7280] dark:text-[#9ca3af]",
                                            children: "Automation Engineer"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 343,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 341,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
            lineNumber: 295,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
}
function WhoWorksHereSection() {
    const stats = [
        {
            value: '20–25',
            label: 'Team size'
        },
        {
            value: '2+',
            label: 'Avg. years in tech'
        },
        {
            value: '52%',
            label: 'Women in technical roles'
        },
        {
            value: '100%',
            label: 'Remote-first'
        }
    ];
    const traits = [
        'Engineers, designers, strategists, PMs — no suits',
        'Mix of full-time and fractional specialists',
        'Distributed across US and India',
        'Employee Resource Group: StravedaTech Community (meets monthly)'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6 bg-white dark:bg-[#0d0d1a]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...fadeUp,
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-bold uppercase tracking-[0.35em] text-[#FF4800] mb-4",
                            children: "Who We Are"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[32px] md:text-[44px] font-light tracking-[-1px] text-[#1a1a2e] dark:text-[#f0f0f5] mb-4",
                            children: [
                                "Smart people solving",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 374,
                                    columnNumber: 33
                                }, this),
                                "real problems. That's us."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-12",
                    children: stats.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6,
                                delay: i * 0.08,
                                ease
                            },
                            className: "glass-card rounded-xl p-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[32px] font-light tracking-[-1px] text-[#1a1a2e] dark:text-[#f0f0f5] mb-1",
                                    style: {
                                        color: '#FF4800'
                                    },
                                    children: s.value
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] text-[#6b7280] dark:text-[#9ca3af]",
                                    children: s.label
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.label, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 378,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...fadeUp,
                    className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                    children: traits.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3 glass-card rounded-xl px-5 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0",
                                    style: {
                                        background: '#FF4800'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 397,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] text-[#6b7280] dark:text-[#9ca3af] leading-[1.6]",
                                    children: t
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 398,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, t, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 396,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 394,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
            lineNumber: 370,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
function GrowthSection() {
    const [openTrack, setOpenTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('AI & Automation');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6 bg-[#f5f5f0] dark:bg-[#030303]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...fadeUp,
                    className: "mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-bold uppercase tracking-[0.35em] text-[#FF4800] mb-4",
                            children: "Growth & Learning"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[32px] md:text-[44px] font-light tracking-[-1px] text-[#1a1a2e] dark:text-[#f0f0f5] mb-4",
                            children: [
                                "We Don't Offer Jobs.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 416,
                                    columnNumber: 38
                                }, this),
                                "We Offer Careers."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 415,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[16px] text-[#6b7280] dark:text-[#9ca3af] max-w-xl leading-[1.7]",
                            children: "Your growth is our competitive advantage. We invest in you because teams win when people grow."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...fadeUp,
                    className: "mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[20px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] mb-6",
                            children: "Certification Pathways"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: CERTIFICATIONS.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: i * 0.08,
                                        ease
                                    },
                                    className: "glass-card rounded-xl p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] font-bold uppercase tracking-[0.25em] mb-3",
                                            style: {
                                                color: '#FF4800'
                                            },
                                            children: c.area
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 436,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: c.certs.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-center gap-2 text-[13px] text-[#6b7280] dark:text-[#9ca3af]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1 h-1 rounded-full flex-shrink-0 bg-[#6b7280]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 23
                                                        }, this),
                                                        cert
                                                    ]
                                                }, cert, true, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.area, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 428,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 426,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 424,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...fadeUp,
                    className: "mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[20px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] mb-2",
                            children: "Mentorship Program"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 452,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[14px] text-[#6b7280] dark:text-[#9ca3af] mb-6 max-w-xl leading-[1.6]",
                            children: "Every engineer, designer, and PM gets matched with a mentor based on growth goals, not seniority. Monthly 1-hour sessions."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 453,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: MENTORSHIPS.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glass-card rounded-xl px-5 py-4 flex items-center gap-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] font-medium text-[#1a1a2e] dark:text-[#f0f0f5]",
                                                children: [
                                                    m.from,
                                                    " → ",
                                                    m.to
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                lineNumber: 460,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[12px] text-[#6b7280] dark:text-[#9ca3af]",
                                                children: m.focus
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                lineNumber: 461,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                        lineNumber: 459,
                                        columnNumber: 17
                                    }, this)
                                }, m.from + m.to, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 451,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...fadeUp,
                    className: "mb-14",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card rounded-xl p-7 md:p-9",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                                    style: {
                                        background: 'rgba(255,72,0,0.1)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "#FF4800",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "12",
                                                r: "10"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                lineNumber: 474,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "12 6 12 12 16 14"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                lineNumber: 474,
                                                columnNumber: 52
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                        lineNumber: 473,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[17px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] mb-1",
                                            children: "Weekly Knowledge Shares"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 478,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[13px] text-[#6b7280] dark:text-[#9ca3af] mb-4",
                                            children: "Friday 4 PM — 30-min deep dive on a tool, technique, or lesson learned. Everyone presents at least 2×/year."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 479,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                'Building AI agents at scale',
                                                'CSS Grid mastery',
                                                'Negotiation strategies',
                                                'Design critique frameworks'
                                            ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] px-3 py-1.5 rounded-full border border-[#FF4800]/30 text-[#FF4800]",
                                                    children: t
                                                }, t, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 480,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 477,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 471,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 470,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 469,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...fadeUp,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[20px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] mb-2",
                            children: "How You Grow at Straveda"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[14px] text-[#6b7280] dark:text-[#9ca3af] mb-7",
                            children: "Growth here is based on impact — not tenure. You move forward by what you build, not how long you stay."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 493,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mb-6 flex-wrap",
                            children: ROLE_TRACKS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenTrack(t.track),
                                    className: "px-4 py-2 rounded-lg text-[12px] font-medium transition-all",
                                    style: {
                                        background: openTrack === t.track ? '#FF4800' : 'transparent',
                                        color: openTrack === t.track ? 'white' : '#6b7280',
                                        border: `1px solid ${openTrack === t.track ? '#FF4800' : 'rgba(0,0,0,0.1)'}`
                                    },
                                    children: t.track
                                }, t.track, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 497,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 495,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: ROLE_TRACKS.filter((t)=>t.track === openTrack).map((track)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 12
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -8
                                    },
                                    transition: {
                                        duration: 0.3,
                                        ease
                                    },
                                    className: "grid grid-cols-1 md:grid-cols-4 gap-3",
                                    children: track.levels.map((lvl, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "glass-card rounded-xl p-5 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] font-bold uppercase tracking-widest mb-2",
                                                    style: {
                                                        color: '#FF4800'
                                                    },
                                                    children: [
                                                        "Level ",
                                                        i + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[13px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] mb-2 leading-[1.4]",
                                                    children: lvl.title
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[12px] text-[#6b7280] dark:text-[#9ca3af] leading-[1.6]",
                                                    children: lvl.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 528,
                                                    columnNumber: 21
                                                }, this),
                                                i < track.levels.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -right-2 top-1/2 -translate-y-1/2 hidden md:flex w-4 h-4 items-center justify-center z-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "#FF4800",
                                                        strokeWidth: "2.5",
                                                        strokeLinecap: "round",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "9 18 15 12 9 6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 142
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, lvl.title, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 523,
                                            columnNumber: 19
                                        }, this))
                                }, track.track, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 514,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 glass-card rounded-xl p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] mb-4",
                                    children: "Promotion Criteria"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 542,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                                    children: [
                                        'Measurable impact delivered',
                                        'Ownership of systems/projects',
                                        'Depth in your domain',
                                        'Mentorship & team contribution',
                                        'Reviews happen annually'
                                    ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-[12px] text-[#6b7280] dark:text-[#9ca3af]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                                    style: {
                                                        background: '#FF4800'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 19
                                                }, this),
                                                c
                                            ]
                                        }, c, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 545,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 543,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 541,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 491,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
            lineNumber: 412,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
        lineNumber: 411,
        columnNumber: 5
    }, this);
}
function HiringProcessSection() {
    const [openIdx, setOpenIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6 bg-white dark:bg-[#0d0d1a]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...fadeUp,
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-bold uppercase tracking-[0.35em] text-[#FF4800] mb-4",
                            children: "Hiring Process"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 565,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[32px] md:text-[44px] font-light tracking-[-1px] text-[#1a1a2e] dark:text-[#f0f0f5] mb-4",
                            children: "No surprises. Just clarity."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 566,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] text-[#6b7280] dark:text-[#9ca3af] max-w-lg leading-[1.7]",
                            children: [
                                "Total process: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-[#1a1a2e] dark:text-[#f0f0f5]",
                                    children: "1–2 weeks"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 570,
                                    columnNumber: 28
                                }, this),
                                " from application to offer."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 564,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: HIRING_STAGES.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: i * 0.07,
                                ease
                            },
                            className: "glass-card rounded-xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenIdx(openIdx === i ? null : i),
                                    className: "w-full flex items-center gap-5 px-6 py-5 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-bold uppercase tracking-widest w-14 flex-shrink-0",
                                            style: {
                                                color: '#FF4800'
                                            },
                                            children: s.stage
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 588,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-1 text-[14px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5]",
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 589,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[12px] text-[#6b7280] dark:text-[#9ca3af] mr-4 hidden md:block",
                                            children: s.duration
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 590,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "#6b7280",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            style: {
                                                transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0)',
                                                transition: 'transform 0.2s ease',
                                                flexShrink: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: "6 9 12 15 18 9"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                lineNumber: 595,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 591,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 584,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: openIdx === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            duration: 0.3,
                                            ease
                                        },
                                        className: "overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-6 pb-6 pt-0 border-t border-black/[0.06] dark:border-white/[0.06] grid grid-cols-1 md:grid-cols-3 gap-5 mt-2 pt-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold uppercase tracking-widest text-[#FF4800] mb-2",
                                                            children: "What We Assess"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 610,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[13px] text-[#6b7280] dark:text-[#9ca3af] leading-[1.6]",
                                                            children: s.assesses
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 611,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold uppercase tracking-widest text-[#FF4800] mb-2",
                                                            children: "Format"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 614,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[13px] text-[#6b7280] dark:text-[#9ca3af] leading-[1.6]",
                                                            children: s.format
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 615,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] font-bold uppercase tracking-widest text-[#FF4800] mb-2",
                                                            children: "Expected Timeline"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[13px] text-[#6b7280] dark:text-[#9ca3af] leading-[1.6]",
                                                            children: s.timeline
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 619,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 608,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                        lineNumber: 601,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 599,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.stage, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 576,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 574,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
            lineNumber: 563,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
        lineNumber: 562,
        columnNumber: 5
    }, this);
}
function ValuesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6 bg-[#f5f5f0] dark:bg-[#030303]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...fadeUp,
                    className: "mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-bold uppercase tracking-[0.35em] text-[#FF4800] mb-4",
                            children: "Culture & Values"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 638,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[32px] md:text-[44px] font-light tracking-[-1px] text-[#1a1a2e] dark:text-[#f0f0f5]",
                            children: [
                                "We Remove Friction.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 640,
                                    columnNumber: 32
                                }, this),
                                "We Own Outcomes.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 640,
                                    columnNumber: 54
                                }, this),
                                "We Grow Together."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 639,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 637,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: VALUES.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6,
                                delay: i * 0.1,
                                ease
                            },
                            className: "glass-card rounded-xl p-7",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-lg flex items-center justify-center mb-5",
                                    style: {
                                        background: 'rgba(255,72,0,0.1)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full",
                                        style: {
                                            background: '#FF4800'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                        lineNumber: 654,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 653,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[16px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] mb-3",
                                    children: v.title
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 656,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] leading-[1.7] text-[#6b7280] dark:text-[#9ca3af] mb-4",
                                    children: v.body
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 657,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-black/[0.06] dark:border-white/[0.06] pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-bold uppercase tracking-widest mb-2",
                                            style: {
                                                color: '#FF4800'
                                            },
                                            children: "In Practice"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 659,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[12px] text-[#6b7280] dark:text-[#9ca3af] leading-[1.6]",
                                            children: v.practice
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 660,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 658,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, v.title, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 645,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 643,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
            lineNumber: 636,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
        lineNumber: 635,
        columnNumber: 5
    }, this);
}
function OpenRolesSection() {
    const [openRole, setOpenRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const tracks = [
        'All',
        'Engineering',
        'AI & Automation',
        'Design'
    ];
    const filtered = filter === 'All' ? OPEN_ROLES : OPEN_ROLES.filter((r)=>r.track === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "open-roles",
        className: "py-20 px-6 bg-white dark:bg-[#0d0d1a]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ...fadeUp,
                    className: "mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-bold uppercase tracking-[0.35em] text-[#FF4800] mb-4",
                            children: "Open Roles"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 680,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[32px] md:text-[44px] font-light tracking-[-1px] text-[#1a1a2e] dark:text-[#f0f0f5] mb-6",
                            children: "Find your place on the team."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 681,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 flex-wrap",
                            children: tracks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilter(t),
                                    className: "px-4 py-2 rounded-lg text-[12px] font-medium transition-all",
                                    style: {
                                        background: filter === t ? '#FF4800' : 'transparent',
                                        color: filter === t ? 'white' : '#6b7280',
                                        border: `1px solid ${filter === t ? '#FF4800' : 'rgba(0,0,0,0.1)'}`
                                    },
                                    children: t
                                }, t, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 686,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 684,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 679,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: filtered.map((role, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5,
                                delay: i * 0.07,
                                ease
                            },
                            className: "glass-card rounded-xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-7 py-6 cursor-pointer",
                                    onClick: ()=>setOpenRole(openRole === role.title ? null : role.title),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded",
                                                                style: {
                                                                    background: 'rgba(255,72,0,0.1)',
                                                                    color: '#FF4800'
                                                                },
                                                                children: role.track
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                                lineNumber: 719,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-[#6b7280] dark:text-[#9ca3af]",
                                                                children: role.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                                lineNumber: 720,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] text-[#6b7280] dark:text-[#9ca3af]",
                                                                children: [
                                                                    "· ",
                                                                    role.location
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                                lineNumber: 721,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                        lineNumber: 718,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[16px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] mb-2",
                                                        children: role.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                        lineNumber: 723,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 flex-wrap",
                                                        children: role.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] px-2 py-1 rounded bg-black/[0.04] dark:bg-white/[0.05] text-[#6b7280] dark:text-[#9ca3af]",
                                                                children: tag
                                                            }, tag, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                                lineNumber: 726,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                        lineNumber: 724,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                lineNumber: 717,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "#6b7280",
                                                strokeWidth: "2.5",
                                                strokeLinecap: "round",
                                                style: {
                                                    transform: openRole === role.title ? 'rotate(180deg)' : 'rotate(0)',
                                                    transition: 'transform 0.2s ease',
                                                    flexShrink: 0,
                                                    marginTop: 4
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "6 9 12 15 18 9"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 734,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                lineNumber: 730,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                        lineNumber: 716,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 712,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: openRole === role.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            duration: 0.3,
                                            ease
                                        },
                                        className: "overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-black/[0.06] dark:border-white/[0.06]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-7 py-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[13px] text-[#6b7280] dark:text-[#9ca3af] leading-[1.7] mb-5",
                                                            children: role.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 750,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                            },
                                                            className: "text-[12px] font-semibold text-[#FF4800] hover:underline",
                                                            children: "Apply for this role ↓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 751,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 749,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ApplyForm, {
                                                    roleTitle: role.title,
                                                    onClose: ()=>setOpenRole(null)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 748,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                        lineNumber: 741,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 739,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, role.title, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 704,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                    lineNumber: 702,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
            lineNumber: 678,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
        lineNumber: 677,
        columnNumber: 5
    }, this);
}
function OpenApplicationSection() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        whatYouBuild: ''
    });
    const [resume, setResume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const set = (key)=>(e)=>setForm((f)=>({
                    ...f,
                    [key]: e.target.value
                }));
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!resume) {
            setErrorMsg('Please attach your resume (PDF).');
            return;
        }
        setStatus('loading');
        setErrorMsg('');
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    message: form.whatYouBuild,
                    position: 'Open Application',
                    formType: 'career'
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
            setStatus('success');
        } catch (err) {
            const msg = err instanceof Error ? err.message : 'Failed to submit. Please try again.';
            setStatus('error');
            setErrorMsg(msg);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6 bg-[#f5f5f0] dark:bg-[#030303]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeUp,
                className: "glass-card rounded-2xl overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-10 py-8 md:px-14",
                        style: {
                            background: 'linear-gradient(135deg, #FF4800 0%, #cc3900 100%)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[26px] md:text-[32px] font-light text-white mb-2 tracking-[-0.5px]",
                                children: "Don't see your role?"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 813,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] text-white/80 max-w-md leading-[1.7]",
                                children: "We sometimes create roles for exceptional people. Drop your resume and tell us what you build — we read every application."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 814,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 812,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-10 py-8 md:px-14",
                        children: status === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",
                                    style: {
                                        background: 'rgba(255,72,0,0.1)'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "22",
                                        height: "22",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "#FF4800",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            points: "20 6 9 17 4 12"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 822,
                                            columnNumber: 159
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                        lineNumber: 822,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 821,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[15px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] mb-1",
                                    children: "We've got your application!"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 824,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13px] text-[#6b7280] dark:text-[#9ca3af]",
                                    children: "If there's a fit, you'll hear from us directly."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 825,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 820,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                                                    children: "Full Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 831,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    value: form.name,
                                                    onChange: set('name'),
                                                    placeholder: "Your name",
                                                    className: inputCls
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 832,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 830,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                                                    children: "Email *"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 835,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "email",
                                                    value: form.email,
                                                    onChange: set('email'),
                                                    placeholder: "you@example.com",
                                                    className: inputCls
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 834,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 839,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: form.phone,
                                                    onChange: set('phone'),
                                                    placeholder: "+91 98000 00000",
                                                    className: inputCls
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 838,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 829,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                                            children: "What do you build & why Straveda? *"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 844,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            required: true,
                                            rows: 4,
                                            value: form.whatYouBuild,
                                            onChange: set('whatYouBuild'),
                                            placeholder: "Tell us about yourself, your skills, and what excites you about working with us...",
                                            className: inputCls + ' resize-none'
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 845,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 843,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[11px] font-semibold text-[#6b7280] mb-1",
                                            children: "Resume (PDF, max 5 MB) *"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 850,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: fileRef,
                                            type: "file",
                                            accept: ".pdf",
                                            onChange: (e)=>setResume(e.target.files?.[0] ?? null),
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 851,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>fileRef.current?.click(),
                                            className: "flex items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] border border-dashed border-[#FF4800]/40 text-[#FF4800] hover:bg-[#FF4800]/5 transition w-full justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 854,
                                                            columnNumber: 164
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "17 8 12 3 7 8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 854,
                                                            columnNumber: 216
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "12",
                                                            y1: "3",
                                                            x2: "12",
                                                            y2: "15"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                            lineNumber: 854,
                                                            columnNumber: 251
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                                    lineNumber: 854,
                                                    columnNumber: 21
                                                }, this),
                                                resume ? resume.name : 'Upload Resume PDF'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                            lineNumber: 852,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 849,
                                    columnNumber: 17
                                }, this),
                                errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] text-red-500 mb-3",
                                    children: errorMsg
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 858,
                                    columnNumber: 30
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: status === 'loading',
                                    className: "rounded-lg px-7 py-3 text-[13px] font-medium text-white transition-all duration-200 disabled:opacity-60",
                                    style: {
                                        background: '#FF4800'
                                    },
                                    onMouseEnter: (e)=>{
                                        if (status !== 'loading') e.currentTarget.style.background = '#e03e00';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = '#FF4800';
                                    },
                                    children: status === 'loading' ? 'Submitting…' : 'Send Open Application →'
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                    lineNumber: 859,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                            lineNumber: 828,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 818,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 811,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
            lineNumber: 810,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
        lineNumber: 809,
        columnNumber: 5
    }, this);
}
function CTASection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 px-6 bg-white dark:bg-[#0d0d1a]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeUp,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[32px] md:text-[48px] font-light tracking-[-1.5px] text-[#1a1a2e] dark:text-[#f0f0f5] mb-4",
                        children: "Ready to make an impact?"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 880,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[15px] text-[#6b7280] dark:text-[#9ca3af] mb-8 max-w-md mx-auto leading-[1.7]",
                        children: "Don't see a fit? Reach out — we sometimes create roles for exceptional people."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 883,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-4 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#open-roles",
                                className: "rounded-lg px-8 py-3.5 text-[14px] font-medium text-white transition-all",
                                style: {
                                    background: '#FF4800'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = '#e03e00';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = '#FF4800';
                                },
                                children: "View All Open Roles →"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 887,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:contact@stravedatech.com",
                                className: "rounded-lg px-8 py-3.5 text-[14px] font-medium text-[#1a1a2e] dark:text-[#f0f0f5] border border-black/[0.12] dark:border-white/[0.12] hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-all",
                                children: "contact@stravedatech.com"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                                lineNumber: 896,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                        lineNumber: 886,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 879,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
            lineNumber: 878,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
        lineNumber: 877,
        columnNumber: 5
    }, this);
}
function CareersPage({ onNavigate: _onNavigate }) {
    const scrollToRoles = ()=>{
        document.getElementById('open-roles')?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {
                onViewRoles: scrollToRoles
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 922,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WhoWorksHereSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 923,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GrowthSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 924,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HiringProcessSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 925,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValuesSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 926,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OpenRolesSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 927,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OpenApplicationSection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 928,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CTASection, {}, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
                lineNumber: 929,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/pages/CareersPage.tsx",
        lineNumber: 921,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_components_straveda_pages_CareersPage_tsx_045t065._.js.map