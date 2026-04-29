(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/frontend/src/components/straveda/pages/InsightsPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InsightsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/straveda/PageHeader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const categories = [
    'All',
    'Automation',
    'Custom Software',
    'AI Strategy',
    'Systems',
    'Web Development'
];
const featuredTopics = [
    'All',
    'Automation',
    'Custom Software',
    'AI Strategy',
    'Systems',
    'Web Development'
];
const featuredPost = {
    category: 'AUTOMATION',
    filterCategory: 'Automation',
    title: 'The Manual Work Audit: How to Find 40% of Your Team\'s Time',
    date: 'March 2025',
    excerpt: 'Most growing companies don\'t know where their team\'s time actually goes. We\'ve audited 50+ businesses and found the same pattern: 40–50% of work is repetitive, manual, and eliminable. Here\'s how to find yours.',
    readTime: '8 min read',
    author: {
        name: 'Straveda Team',
        title: 'AI Automation & Custom Software'
    },
    fullContent: [
        'Most growing companies don\'t know where their team\'s time actually goes. You hire smart people to drive growth. Instead, they spend 40% of their time on work that could be automated, doesn\'t require human judgment, repeats the same way every time, and kills their momentum.',
        'Manual work is invisible. It lives in spreadsheets that sync data between tools, email follow-up sequences that someone sends manually, data entry that could be automated, status meetings that could be a dashboard, and approvals that ping-pong between people. None of it shows up as a discrete "job." So it gets ignored.',
        'Step 1: Do a Time Audit (30 min). Ask your top 3 people: "Walk me through your day. Where does your time go?" You\'ll hear: "I spend 2 hours a day manually qualifying leads", "I copy data from our order system into accounting every afternoon", "I send the same check-in email to inactive customers." Write it all down.',
        'Step 2: Calculate the Cost. If your top person spends 2 hours/day on manual qualifying: 2 hours × 20 working days = 40 hours/month. 40 hours × ₹500/hour = ₹20,000/month in lost capacity. ₹20,000 × 12 = ₹2.4L/year. That\'s just one person, one process. Most companies have 3–5 of these.',
        'If you automate just your top 3 time-wasters, you reclaim 80–120 hours/month. That\'s 2–3 full-time people\'s worth of capacity. No hiring needed. Costs ₹5L–₹15L to build. Pays for itself in months. Book a strategy call and we\'ll run this audit with you in 30 minutes.'
    ]
};
const posts = [
    {
        category: 'CUSTOM SOFTWARE',
        filterCategory: 'Custom Software',
        title: 'Custom CRM vs. Salesforce: When Off-the-Shelf Doesn\'t Fit',
        date: 'March 2025',
        excerpt: 'Salesforce works great — until it doesn\'t. Here\'s how to decide when a custom CRM actually saves you money.',
        readTime: '5 min read',
        author: {
            name: 'Dhiraj Harshe',
            title: 'Founder, Straveda Tech'
        },
        fullContent: [
            'Most businesses start with Salesforce or HubSpot because they\'re fast to set up and everyone knows them. That\'s a legitimate reason. But after 12-18 months, a pattern emerges: your team spends more time working around the CRM than inside it. Custom fields that don\'t quite fit. Automations that need 3 Zapier steps to do something that should be one click. Licensing costs that climb as your team grows.',
            'A custom CRM built for your specific sales process isn\'t a luxury — it\'s often cheaper over a 3-year horizon. When you own the code, you pay for hosting (a few hundred dollars a month) instead of per-seat licenses. When your process changes, you change the software in days, not months of Salesforce consultant time.',
            'The decision comes down to three questions: Does your sales or operations process have more than 5 custom stages or non-standard workflows? Do you pay more than ₹2L/month in SaaS licenses across your CRM and adjacent tools? Are you losing data fidelity because your CRM can\'t model your actual business? If the answer to two of three is yes, it\'s time to run the numbers on a custom build.',
            'At Straveda, we\'ve built CRMs that replace Salesforce for businesses at 20-200 person scale. The typical project runs 6-10 weeks and pays for itself within 18 months on licensing savings alone — before you count the productivity gains from software that actually fits.'
        ]
    },
    {
        category: 'AI STRATEGY',
        filterCategory: 'AI Strategy',
        title: 'AI for Your Business: The ROI-First Framework',
        date: 'February 2025',
        excerpt: 'Most AI projects fail not because the technology doesn\'t work, but because nobody defined what "working" means.',
        readTime: '6 min read',
        author: {
            name: 'Dhiraj Harshe',
            title: 'Founder, Straveda Tech'
        },
        fullContent: [
            'AI implementation fails in a predictable way: leadership sees a demo, gets excited, approves a pilot, and 6 months later the team is still "experimenting." No production traffic. No metrics. No clear owner. The technology worked fine — the project management didn\'t.',
            'The ROI-First Framework flips the sequence. Before writing a line of code, you answer three questions: What specific human decision or action is this AI replacing or augmenting? What\'s the cost of that decision today in time, money, or errors? What does success look like in the first 30 days of production use? If you can\'t answer all three, the project isn\'t ready to start.',
            'The highest-ROI AI applications we see in small and mid-market businesses are not the glamorous ones. They\'re customer support triage that routes 60% of tickets without human review. Lead qualification that scores inbound inquiries before a salesperson picks them up. Document processing that turns a 20-minute manual task into a 30-second automated one. Unglamorous, measurable, and compounding.',
            'Our standard engagement starts with a 2-hour audit of your current operations to find the highest-leverage AI insertion points. Most businesses have 3-5 automation opportunities that pay for the entire engagement within 90 days. We build those first, then expand based on what the data shows.'
        ]
    },
    {
        category: 'AUTOMATION',
        filterCategory: 'Automation',
        title: 'Why Your Next Product Should Be Built for Speed, Not Perfection',
        date: 'January 2025',
        excerpt: 'The companies winning right now ship in weeks, not quarters. Here\'s the operational system behind that.',
        readTime: '5 min read',
        author: {
            name: 'Dhiraj Harshe',
            title: 'Founder, Straveda Tech'
        },
        fullContent: [
            'There\'s a myth that quality and speed are in tension. They\'re not — but "perfection" and speed are. Perfection is a moving target defined by hypothetical future users. Quality is a baseline defined by your actual users today. The companies that ship fast have learned to build for quality without chasing perfection.',
            'The operational system behind fast shipping has a few non-negotiable components: a strict scope boundary (what is and is not in v1), automated testing that catches regressions without slowing deploys, and a weekly ship cadence that forces prioritization decisions. When you commit to shipping every week, you can\'t let perfect be the enemy of shipped.',
            'At Straveda, our standard engagement includes a deployment pipeline from day one. By week 2, something is in production — even if it\'s just a staging environment with the core data model. By week 4, real users are touching real software. This isn\'t recklessness; it\'s feedback compression. Every week you\'re not in production is a week you\'re building on assumptions.',
            'The automation layer is what makes this sustainable. Automated tests, automated deployments, automated monitoring — these aren\'t nice-to-haves for a fast team, they\'re the infrastructure that allows speed without chaos. Without them, fast shipping becomes fast breaking. With them, your team spends time building features, not firefighting.'
        ]
    },
    {
        category: 'SYSTEMS',
        filterCategory: 'Systems',
        title: 'The Data Silo Problem: How to Build One Source of Truth',
        date: 'December 2024',
        excerpt: 'Your CRM says one thing, your spreadsheet says another, your ops team has a third number. Here\'s how to fix it.',
        readTime: '6 min read',
        author: {
            name: 'Dhiraj Harshe',
            title: 'Founder, Straveda Tech'
        },
        fullContent: [
            'Data silos aren\'t a storage problem — they\'re a trust problem. When the same metric shows different numbers in different systems, your team stops trusting any of them and falls back on gut feel and tribal knowledge. The result is decisions made on the loudest voice in the room, not the best data.',
            'The root cause is usually fragmented tooling accumulated over time: a CRM for sales, a separate project management tool for delivery, spreadsheets for finance, WhatsApp threads for customer communication. Each tool has its own data model, its own export format, its own definition of "customer" or "deal" or "revenue." Reconciling them manually is a part-time job for someone on your team.',
            'Building one source of truth doesn\'t mean replacing all your tools — it means creating a central data layer that pulls from each tool and enforces a single definition for shared concepts. A PostgreSQL database with automated sync jobs, a simple dashboard showing the metrics that matter, and a clear ownership model for data quality. This is a 4-6 week build, not a multi-year ERP implementation.',
            'The businesses we\'ve helped with this problem typically see two immediate benefits: their weekly reporting goes from 3 hours of manual consolidation to a 10-minute dashboard review, and their cross-functional meetings stop being arguments about whose numbers are right. When everyone trusts the same data, the conversation shifts from "what is the number" to "what do we do about it."'
        ]
    },
    {
        category: 'WEB DEVELOPMENT',
        filterCategory: 'Web Development',
        title: 'Why Your Website Is Costing You Leads',
        date: 'November 2024',
        excerpt: 'Most business websites are digital brochures. Here\'s what a lead-generating website actually looks like.',
        readTime: '5 min read',
        author: {
            name: 'Dhiraj Harshe',
            title: 'Founder, Straveda Tech'
        },
        fullContent: [
            'If your website\'s primary job is to "look professional," you\'ve already lost. Visitors don\'t come to your website to be impressed — they come because they have a problem and they\'re wondering if you can solve it. A website that leads with your company history, your team headshots, and your "values" is answering questions nobody asked.',
            'A lead-generating website is organized around the visitor\'s decision journey, not your organizational chart. The first thing they see answers: what do you do, for whom, and what happens next? Every page has a clear next action. The contact form asks for the minimum information needed to have a useful conversation — not a 12-field qualification quiz.',
            'Page speed is not optional. For every second of load time above 2 seconds, conversion rates drop measurably. On mobile, where over 60% of business website traffic now originates, a slow or poorly formatted page is an immediate exit. Next.js with server-side rendering, optimized images, and edge deployment typically cuts load times by 40-60% versus a typical WordPress or Webflow site.',
            'The websites we build are designed to convert, not just impress. We start with conversion goals — contact form submissions, WhatsApp messages, discovery call bookings — and build backwards from there. Analytics are configured from day one so you know which pages are working and which are leaking visitors. Most of our clients see a meaningful increase in qualified inquiries within the first 60 days, without changing their traffic sources.'
        ]
    }
];
const ease = [
    0.4,
    0,
    0.2,
    1
];
function BlogPostModal({ post, onClose }) {
    _s();
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BlogPostModal.useCallback[handleKeyDown]": (e)=>{
            if (e.key === 'Escape') onClose();
        }
    }["BlogPostModal.useCallback[handleKeyDown]"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogPostModal.useEffect": ()=>{
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
            // Also listen for global 'close-all' custom event from keyboard nav
            const handleCloseAll = {
                "BlogPostModal.useEffect.handleCloseAll": ()=>onClose()
            }["BlogPostModal.useEffect.handleCloseAll"];
            window.addEventListener('close-all', handleCloseAll);
            return ({
                "BlogPostModal.useEffect": ()=>{
                    document.removeEventListener('keydown', handleKeyDown);
                    window.removeEventListener('close-all', handleCloseAll);
                    document.body.style.overflow = '';
                }
            })["BlogPostModal.useEffect"];
        }
    }["BlogPostModal.useEffect"], [
        handleKeyDown,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-[70] flex items-center justify-center p-4",
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
            duration: 0.3,
            ease
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0a0a14] border border-[#e5e7eb] dark:border-white/[0.08] shadow-xl",
            initial: {
                opacity: 0,
                scale: 0.95,
                y: 20
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                scale: 0.95,
                y: 20
            },
            transition: {
                duration: 0.35,
                ease
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#f8f8fc] dark:bg-white/[0.08] border border-[#e5e7eb] dark:border-white/[0.08] text-[#6b7280] dark:text-[#d1d5db] hover:text-[#1a1a2e] dark:hover:text-[#f0f0f5] hover:bg-[#f0f0f4] dark:hover:bg-white/[0.12] transition-colors",
                    "aria-label": "Close modal",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 md:p-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block text-[10px] uppercase tracking-[0.15em] font-medium text-[#FF4800] bg-[#FF4800]/10 px-3 py-1 rounded-full mb-6",
                            children: post.category
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#1a1a2e] dark:text-[#f0f0f5] leading-tight mb-6",
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-4 text-[13px] text-[#6b7280] dark:text-[#d1d5db] mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#1a1a2e] dark:text-[#f0f0f5] font-medium",
                                            children: post.author.name
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#9ca3af]",
                                            children: [
                                                "— ",
                                                post.author.title
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#9ca3af]",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: post.date
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#9ca3af]",
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        post.readTime
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[2px] w-full bg-gradient-to-r from-[#FF4800] via-[#ff6b33] to-transparent mb-8"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: post.fullContent.map((paragraph, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[15px] sm:text-[16px] leading-[1.8] text-[#4b5563] dark:text-[#d1d5db]",
                                    children: paragraph
                                }, i, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 pt-8 border-t border-[#e5e7eb] dark:border-white/[0.08]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "inline-flex items-center gap-2 text-[#6b7280] dark:text-[#d1d5db] hover:text-[#FF4800] text-sm font-medium transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-3.5 h-3.5 rotate-180"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        "Back to all articles"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(BlogPostModal, "0JgXOssVubdPSer79HeWAJtecaU=");
_c = BlogPostModal;
function InsightsPage() {
    _s1();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPost, setSelectedPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [activeTopic, setActiveTopic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const filteredPosts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "InsightsPage.useMemo[filteredPosts]": ()=>{
            const topic = activeTopic === 'All' ? 'All' : activeTopic;
            if (topic === 'All') return posts;
            return posts.filter({
                "InsightsPage.useMemo[filteredPosts]": (p)=>p.filterCategory === topic
            }["InsightsPage.useMemo[filteredPosts]"]);
        }
    }["InsightsPage.useMemo[filteredPosts]"], [
        activeTopic
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email.trim()) return;
        setIsSubmitting(true);
        // Mocking the API response for static site
        setTimeout(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Subscribed! (Static Mode)');
            setEmail('');
            setIsSubmitting(false);
        }, 800);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-[#0a0a14] min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative bg-white dark:bg-[#0a0a14] px-6 pt-32 pb-20 border-b border-black/[0.06] dark:border-white/[0.06]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$straveda$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        eyebrow: "Insights & Perspectives",
                        title: "Enterprise thinking for modern organizations.",
                        subtitle: "Strategy, architecture, and management insights from the Straveda team."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 pt-6 pb-2 bg-white dark:bg-[#0a0a14]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 15
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
                            duration: 0.5,
                            ease
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 overflow-x-auto pb-2 scrollbar-thin",
                            style: {
                                scrollbarWidth: 'thin'
                            },
                            children: featuredTopics.map((topic)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTopic(topic),
                                    className: `flex-shrink-0 rounded-full px-5 py-2.5 text-[13px] font-medium transition-all duration-200 whitespace-nowrap ${activeTopic === topic ? 'bg-[#FF4800] text-white shadow-sm' : 'bg-[#f8f8fc] dark:bg-white/[0.06] text-[#6b7280] dark:text-[#d1d5db] hover:bg-[#FF4800] hover:text-white border border-transparent'}`,
                                    children: topic
                                }, topic, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                    lineNumber: 285,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                            lineNumber: 280,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                        lineNumber: 274,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 py-16 md:py-24 bg-[#f8f8fc] dark:bg-[#0a0a14]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 60
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
                        className: "glass-card rounded-xl overflow-hidden cursor-pointer group hover:shadow-md transition-shadow",
                        onClick: ()=>setSelectedPost(-1),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:w-[60%] w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full aspect-video lg:aspect-[16/9] overflow-hidden",
                                        style: {
                                            background: 'linear-gradient(135deg, #0e0c1c 0%, #1a1535 60%, #0e0c1c 100%)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 opacity-20",
                                                style: {
                                                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)',
                                                    backgroundSize: '28px 28px'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0",
                                                style: {
                                                    background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,72,0,0.18) 0%, transparent 70%)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "absolute inset-0 w-full h-full",
                                                viewBox: "0 0 480 270",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                preserveAspectRatio: "xMidYMid meet",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "240",
                                                        y1: "60",
                                                        x2: "120",
                                                        y2: "135",
                                                        stroke: "rgba(255,72,0,0.35)",
                                                        strokeWidth: "1",
                                                        strokeDasharray: "4 3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "240",
                                                        y1: "60",
                                                        x2: "360",
                                                        y2: "135",
                                                        stroke: "rgba(255,72,0,0.35)",
                                                        strokeWidth: "1",
                                                        strokeDasharray: "4 3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "120",
                                                        y1: "135",
                                                        x2: "80",
                                                        y2: "210",
                                                        stroke: "rgba(255,255,255,0.1)",
                                                        strokeWidth: "1",
                                                        strokeDasharray: "3 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "120",
                                                        y1: "135",
                                                        x2: "180",
                                                        y2: "210",
                                                        stroke: "rgba(255,255,255,0.1)",
                                                        strokeWidth: "1",
                                                        strokeDasharray: "3 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "360",
                                                        y1: "135",
                                                        x2: "300",
                                                        y2: "210",
                                                        stroke: "rgba(255,255,255,0.1)",
                                                        strokeWidth: "1",
                                                        strokeDasharray: "3 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "360",
                                                        y1: "135",
                                                        x2: "400",
                                                        y2: "210",
                                                        stroke: "rgba(255,255,255,0.1)",
                                                        strokeWidth: "1",
                                                        strokeDasharray: "3 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "210",
                                                        y: "38",
                                                        width: "60",
                                                        height: "28",
                                                        rx: "6",
                                                        fill: "rgba(255,72,0,0.15)",
                                                        stroke: "#FF4800",
                                                        strokeWidth: "1.2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "240",
                                                        y: "56",
                                                        textAnchor: "middle",
                                                        fill: "#FF4800",
                                                        fontSize: "9",
                                                        fontFamily: "monospace",
                                                        fontWeight: "600",
                                                        children: "CORE API"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "88",
                                                        y: "120",
                                                        width: "64",
                                                        height: "28",
                                                        rx: "6",
                                                        fill: "rgba(255,255,255,0.04)",
                                                        stroke: "rgba(255,255,255,0.2)",
                                                        strokeWidth: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "120",
                                                        y: "138",
                                                        textAnchor: "middle",
                                                        fill: "rgba(255,255,255,0.7)",
                                                        fontSize: "8",
                                                        fontFamily: "monospace",
                                                        children: "Services"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "328",
                                                        y: "120",
                                                        width: "64",
                                                        height: "28",
                                                        rx: "6",
                                                        fill: "rgba(255,255,255,0.04)",
                                                        stroke: "rgba(255,255,255,0.2)",
                                                        strokeWidth: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: "360",
                                                        y: "138",
                                                        textAnchor: "middle",
                                                        fill: "rgba(255,255,255,0.7)",
                                                        fontSize: "8",
                                                        fontFamily: "monospace",
                                                        children: "Gateway"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this),
                                                    [
                                                        48,
                                                        148,
                                                        268,
                                                        368
                                                    ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                    x: x,
                                                                    y: "197",
                                                                    width: "64",
                                                                    height: "24",
                                                                    rx: "5",
                                                                    fill: "rgba(255,255,255,0.03)",
                                                                    stroke: "rgba(255,255,255,0.12)",
                                                                    strokeWidth: "0.8"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                                    lineNumber: 341,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                    x: x + 32,
                                                                    y: "212",
                                                                    textAnchor: "middle",
                                                                    fill: "rgba(255,255,255,0.4)",
                                                                    fontSize: "7",
                                                                    fontFamily: "monospace",
                                                                    children: [
                                                                        'Auth',
                                                                        'Cache',
                                                                        'Queue',
                                                                        'Store'
                                                                    ][i]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                                    lineNumber: 342,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                            lineNumber: 340,
                                                            columnNumber: 23
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "240",
                                                        cy: "52",
                                                        r: "28",
                                                        stroke: "rgba(255,72,0,0.2)",
                                                        strokeWidth: "1",
                                                        fill: "none",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                                attributeName: "r",
                                                                values: "26;34;26",
                                                                dur: "3s",
                                                                repeatCount: "indefinite"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                                attributeName: "opacity",
                                                                values: "0.3;0;0.3",
                                                                dur: "3s",
                                                                repeatCount: "indefinite"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-4 left-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase tracking-[0.2em] font-semibold",
                                                    style: {
                                                        color: 'rgba(255,72,0,0.7)'
                                                    },
                                                    children: "Enterprise Architecture"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 352,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:w-[40%] w-full p-8 lg:p-10 flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block text-[11px] uppercase tracking-[0.15em] font-medium text-[#FF4800] bg-[#FF4800]/10 px-3 py-1 rounded-full w-fit mb-5",
                                            children: "Enterprise Architecture"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-[#1a1a2e] dark:text-[#f0f0f5] leading-snug mb-4",
                                            children: "The Case for Open Standards in Modern Enterprise Architecture"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9ca3af] text-[13px] mb-4",
                                            children: "March 2024"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#6b7280] dark:text-[#d1d5db] text-[15px] leading-relaxed mb-8",
                                            children: "Why forward-thinking enterprises are choosing open-standards middleware over proprietary lock-in, and what this means for your technology roadmap."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                            lineNumber: 367,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2 text-[#1a1a2e] dark:text-[#f0f0f5] border border-[#e5e7eb] dark:border-white/[0.1] rounded-lg px-5 py-2.5 text-sm font-medium group-hover:bg-[#f8f8fc] dark:group-hover:bg-white/[0.06] transition-colors w-fit",
                                            children: [
                                                "Read article",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 py-16 md:py-24 bg-white dark:bg-[#0a0a14]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-glow-top mb-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    duration: 0.5,
                                    ease
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mb-5",
                                        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                onClick: ()=>{
                                                    setActiveCategory(category);
                                                    setActiveTopic(category);
                                                },
                                                className: `px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${activeCategory === category ? 'bg-[#FF4800] text-white' : 'bg-transparent border border-[#e5e7eb] dark:border-white/[0.1] text-[#6b7280] dark:text-[#d1d5db] hover:border-[#FF4800]/40 hover:text-[#1a1a2e] dark:hover:text-[#f0f0f5]'}`,
                                                children: category
                                            }, category, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 396,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                        lineNumber: 394,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[13px] text-[#9ca3af]",
                                        children: [
                                            "Showing ",
                                            filteredPosts.length,
                                            " article",
                                            filteredPosts.length !== 1 ? 's' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                        lineNumber: 412,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                            lineNumber: 386,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "popLayout",
                                children: filteredPosts.map((post, index)=>{
                                    const originalIndex = posts.indexOf(post);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                        layout: true,
                                        initial: {
                                            opacity: 0,
                                            scale: 0.95,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.4,
                                                delay: index * 0.05,
                                                ease
                                            }
                                        },
                                        exit: {
                                            opacity: 0,
                                            scale: 0.95,
                                            y: 10,
                                            transition: {
                                                duration: 0.25,
                                                ease
                                            }
                                        },
                                        className: "glass-card rounded-xl p-8 hover:border-[#FF4800]/20 transition-all duration-300 cursor-pointer group hover:shadow-md min-h-[320px] flex flex-col",
                                        onClick: ()=>setSelectedPost(originalIndex),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block text-[10px] uppercase tracking-[0.15em] font-medium text-[#FF4800] bg-[#FF4800]/10 px-2.5 py-1 rounded-full mb-4",
                                                children: post.category
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 443,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-[#1a1a2e] dark:text-[#f0f0f5] leading-snug mb-3",
                                                children: post.title
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 446,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#9ca3af] text-[13px] mb-3",
                                                children: post.date
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 449,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#6b7280] dark:text-[#d1d5db] text-[14px] sm:text-[15px] leading-relaxed mb-5 flex-1",
                                                children: post.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 450,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1.5 text-[#6b7280] dark:text-[#d1d5db] text-sm font-medium group-hover:text-[#FF4800] transition-colors",
                                                children: [
                                                    "Read",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 453,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, post.title, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                        lineNumber: 424,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                lineNumber: 420,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                    lineNumber: 384,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedPost !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogPostModal, {
                    post: selectedPost === -1 ? featuredPost : posts[selectedPost],
                    onClose: ()=>setSelectedPost(null)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                    lineNumber: 468,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                lineNumber: 466,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 py-16 md:py-24 bg-[#f8f8fc] dark:bg-[#0a0a14]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 50
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
                        className: "bg-white dark:bg-white/[0.04] rounded-xl py-16 px-6 md:px-12 text-center border border-[#e5e7eb] dark:border-white/[0.08] shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[28px] sm:text-[32px] md:text-[36px] font-medium text-[#1a1a2e] dark:text-[#f0f0f5] mb-3",
                                children: "Stay ahead of enterprise trends."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#6b7280] dark:text-[#d1d5db] text-[15px] sm:text-[16px] mb-8",
                                children: "Monthly insights for enterprise leaders."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                lineNumber: 488,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        placeholder: "Enter your email",
                                        required: true,
                                        disabled: isSubmitting,
                                        className: "flex-1 bg-white dark:bg-white/[0.06] border border-[#e5e7eb] dark:border-white/[0.1] focus:border-[#FF4800] text-[#1a1a2e] dark:text-[#f0f0f5] rounded-lg px-4 py-3 text-[15px] placeholder-[#9ca3af] outline-none transition-colors disabled:opacity-50"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                        lineNumber: 492,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        className: "bg-[#FF4800] hover:bg-[#e63f00] text-white font-medium text-[15px] rounded-lg px-6 py-3 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: [
                                            isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "w-4 h-4 animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 507,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                                lineNumber: 509,
                                                columnNumber: 19
                                            }, this),
                                            "Subscribe"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                lineNumber: 491,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#9ca3af] text-[12px] mt-4",
                                children: "No spam. Unsubscribe anytime."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                                lineNumber: 514,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                        lineNumber: 478,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                    lineNumber: 477,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
                lineNumber: 476,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/straveda/pages/InsightsPage.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
_s1(InsightsPage, "0sU0aDXNTHiDIoAw1wMzAbIfqhM=");
_c1 = InsightsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "BlogPostModal");
__turbopack_context__.k.register(_c1, "InsightsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_components_straveda_02dj42i._.js.map