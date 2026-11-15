"use client";

import React, { useState, useEffect } from 'react';

const SparklesIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
        <path d="M20 3v4M22 5h-4M4 17v2M5 18H3" />
    </svg>
);

const BotIcon = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
    </svg>
);

const WorkflowIcon = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
);

const LineChartIcon = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
    </svg>
);

const LayersIcon = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
        <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
);

const MessageSquareIcon = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const ShieldCheckIcon = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const CheckIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

const ChevronDownIcon = ({ className = "w-5 h-5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m6 9 6 6 6-6" />
    </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const PlayIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
);

const TerminalIcon = ({ className = "w-3.5 h-3.5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
);

const CpuIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="16" height="16" x="4" y="4" rx="2" />
        <rect width="6" height="6" x="9" y="9" rx="1" />
        <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
    </svg>
);

const MenuIcon = ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

const XIcon = ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6 6 18M6 6l12 12" />
    </svg>
);

const SendIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
    </svg>
);

const StarIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

const LockIcon = ({ className = "w-3.5 h-3.5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const ZapIcon = ({ className = "w-3.5 h-3.5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
);

const GlobeIcon = ({ className = "w-4 h-4" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
    </svg>
);

const RefreshCwIcon = ({ className = "w-3.5 h-3.5" }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
    </svg>
);

const CustomStyles = () => (
    <style>{`
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-14px) rotate(1deg); }
    }
    @keyframes pulseGlow {
      0%, 100% { opacity: 0.45; transform: scale(1); }
      50% { opacity: 0.75; transform: scale(1.06); }
    }
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-float {
      animation: floatSlow 6s ease-in-out infinite;
    }
    .animate-pulse-glow {
      animation: pulseGlow 7s ease-in-out infinite;
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradientShift 5s ease infinite;
    }
    .bg-grid-pattern {
      background-size: 44px 44px;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    }
    .glass-card {
      background: rgba(24, 24, 27, 0.65);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
  `}</style>
);

const SERVICES = [
    {
        id: 'llm-agents',
        title: 'Custom LLM Agents',
        description:
            'Autonomous multi-agent architectures capable of reasoning, tool execution, and complex enterprise decision workflows.',
        icon: BotIcon,
        tag: 'Autonomous Core',
        gradient: 'from-violet-500/20 to-fuchsia-500/5',
        borderHover: 'hover:border-violet-500/50',
        iconColor: 'text-violet-400',
        metrics: '99.4% task accuracy',
    },
    {
        id: 'workflow-automation',
        title: 'Workflow Automation',
        description:
            'End-to-end operational pipelines connecting CRM, ERP, and internal APIs to eliminate repetitive manual bottlenecks.',
        icon: WorkflowIcon,
        tag: 'Zero-Touch Ops',
        gradient: 'from-cyan-500/20 to-blue-500/5',
        borderHover: 'hover:border-cyan-500/50',
        iconColor: 'text-cyan-400',
        metrics: '40+ hrs saved/week',
    },
    {
        id: 'predictive-analytics',
        title: 'Predictive Analytics',
        description:
            'Real-time forecasting models for churn prevention, dynamic pricing, and demand intelligence built on your proprietary data.',
        icon: LineChartIcon,
        tag: 'Neural Insights',
        gradient: 'from-emerald-500/20 to-teal-500/5',
        borderHover: 'hover:border-emerald-500/50',
        iconColor: 'text-emerald-400',
        metrics: '+32% pipeline lift',
    },
    {
        id: 'rag-knowledge',
        title: 'Enterprise RAG Systems',
        description:
            'Sub-second semantic retrieval over millions of private documents with strict citation grounding and zero hallucination guardrails.',
        icon: LayersIcon,
        tag: 'Vector Memory',
        gradient: 'from-amber-500/20 to-orange-500/5',
        borderHover: 'hover:border-amber-500/50',
        iconColor: 'text-amber-400',
        metrics: '<140ms retrieval',
    },
    {
        id: 'voice-concierge',
        title: 'Conversational Voice AI',
        description:
            'Ultra-low latency voice agents that handle inbound sales qualification, booking, and tier-2 customer support 24/7.',
        icon: MessageSquareIcon,
        tag: 'Real-Time Audio',
        gradient: 'from-pink-500/20 to-rose-500/5',
        borderHover: 'hover:border-pink-500/50',
        iconColor: 'text-pink-400',
        metrics: '380ms voice response',
    },
    {
        id: 'ai-governance',
        title: 'Security & AI Governance',
        description:
            'SOC2-ready deployment pipelines featuring PII redaction, role-based access control, and private VPC model hosting.',
        icon: ShieldCheckIcon,
        tag: 'Private Cloud',
        gradient: 'from-indigo-500/20 to-violet-500/5',
        borderHover: 'hover:border-indigo-500/50',
        iconColor: 'text-indigo-400',
        metrics: 'Zero data retention',
    },
];

const TESTIMONIALS = [
    {
        quote:
            'NexaMind replaced 14 fragmented internal tools with a single autonomous ops layer. Our support resolution time dropped from 6 hours to 45 seconds.',
        author: 'Elena Rostova',
        role: 'VP of Operations, FinScale',
        avatar: 'ER',
        metric: '88% faster resolution',
    },
    {
        quote:
            'Their RAG architecture indexed 1.8 million technical PDFs with verifiable inline citations. It paid for itself within the first three weeks of deployment.',
        author: 'Marcus Vance',
        role: 'CTO, Meridian Logistics',
        avatar: 'MV',
        metric: '$420K annual savings',
    },
    {
        quote:
            'Unlike agencies that hand over fragile prototypes, NexaMind delivered production-grade agents with full observability, evals, and fallback guardrails.',
        author: 'Sophia Chen',
        role: 'Head of Product, PulseHealth',
        avatar: 'SC',
        metric: '99.98% uptime',
    },
];

const PRICING_PLANS = [
    {
        name: 'Growth Sprint',
        subtitle: 'Rapid AI automation & MVP deployment for agile teams.',
        monthlyPrice: 3900,
        quarterlyPrice: 3300,
        featured: false,
        badge: null,
        features: [
            '1 Custom AI Agent or RAG Pipeline',
            'Up to 3 CRM / Slack / API Integrations',
            'Automated Evaluation & Guardrail Suite',
            'Bi-weekly Optimization Sprints',
            'Dedicated Slack Channel Support',
        ],
        cta: 'Start Growth Sprint',
    },
    {
        name: 'Scale Partner',
        subtitle: 'Full-stack autonomous infrastructure for scaling companies.',
        monthlyPrice: 7800,
        quarterlyPrice: 6600,
        featured: true,
        badge: 'Most Popular',
        features: [
            'Up to 4 Multi-Agent Production Systems',
            'Unlimited API, Webhook & Database Connectors',
            'Custom Fine-Tuning & Private Vector Store',
            'Real-Time Telemetry & Cost Observability',
            '48-Hour Priority Engineering SLA',
            'Dedicated AI Solutions Architect',
        ],
        cta: 'Deploy Scale Partner',
    },
    {
        name: 'Enterprise VPC',
        subtitle: 'Air-gapped, custom-trained models on your cloud infrastructure.',
        monthlyPrice: null,
        quarterlyPrice: null,
        featured: false,
        badge: 'Custom SLA',
        features: [
            'Self-Hosted / AWS & GCP VPC Deployment',
            'HIPAA, SOC2 & GDPR Compliance Hardening',
            'Custom Open-Weights Model Distillation',
            'On-Premise Security & Red-Team Audits',
            '24/7 Dedicated Forward-Deployed Engineers',
        ],
        cta: 'Book Architecture Call',
    },
];

const FAQS = [
    {
        q: 'How fast can we go from discovery call to a live production agent?',
        a: 'Most clients launch their first production-ready workflow within 14 to 21 days. Week 1 covers data auditing, architecture design, and sandbox prototyping; Weeks 2–3 focus on integration, automated accuracy testing, and live rollout.',
    },
    {
        q: 'Is our proprietary company data used to train public AI models?',
        a: 'Never. We configure zero-data-retention enterprise endpoints (OpenAI Enterprise, Anthropic Bedrock, or self-hosted open-weight models inside your own AWS/GCP VPC) so your data never leaves your security boundary.',
    },
    {
        q: 'Which tech stack and LLM providers do you work with?',
        a: 'We are model-agnostic and optimize for cost-to-intelligence ratio—combining Claude 3.7/4, GPT-4o/o3, Gemini, and Llama/Mistral models orchestrated via Python, TypeScript, LangGraph, and pgvector.',
    },
    {
        q: 'What happens after the AI system is launched?',
        a: 'Every deployment includes real-time drift monitoring, latency dashboards, and continuous prompt/eval tuning. You own 100% of the codebase, weights, and IP upon delivery.',
    },
];

const AGENT_SCENARIOS = [
    {
        id: 'sales',
        label: 'Inbound Lead Triage',
        trigger: 'Webhook: New Enterprise Demo Request (Acme Corp)',
        steps: [
            'Enriched firmographics via Clearbit & LinkedIn API (420 employees, Series B)',
            'Queried internal CRM history & matched ICP tier: Enterprise Priority',
            'Drafted hyper-personalized brief & booked AE calendar slot',
        ],
        latency: '1.18s',
        saved: '28 mins saved',
    },
    {
        id: 'support',
        label: 'Tier-2 Ticket Resolver',
        trigger: 'Zendesk #4921: API Webhook Signature Mismatch Error',
        steps: [
            'Searched 14,200 engineering docs & recent GitHub release notes',
            'Identified HMAC-SHA256 header format change in v2.4 SDK',
            'Generated working code patch & verified user payload syntax',
        ],
        latency: '0.94s',
        saved: '4.5 hrs saved',
    },
    {
        id: 'finance',
        label: 'Invoice & Contract Audit',
        trigger: 'PDF Uploaded: Q4 Cloud Infrastructure Vendor Agreement',
        steps: [
            'Extracted 48 billing clauses & cross-checked against procurement policy',
            'Flagged auto-renewal notice window (30 days prior to Dec 31)',
            'Synced approved payment schedule to NetSuite ERP',
        ],
        latency: '1.62s',
        saved: '1.5 hrs saved',
    },
];

export default function NexaMindLanding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeScenario, setActiveScenario] = useState(AGENT_SCENARIOS[0]);
    const [isSimulating, setIsSimulating] = useState(false);
    const [billingCycle, setBillingCycle] = useState('quarterly');
    const [openFaq, setOpenFaq] = useState(0);
    const [piiRedaction, setPiiRedaction] = useState(true);
    const [edgeCaching, setEdgeCaching] = useState(true);
    const [selectedIntegration, setSelectedIntegration] = useState('Slack');

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        budget: '$5k - $10k',
        message: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const triggerSimulation = (scenario) => {
        setIsSimulating(true);
        setActiveScenario(scenario);
        setTimeout(() => setIsSimulating(false), 450);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-[#07070B] text-zinc-100 font-sans selection:bg-violet-500/30 selection:text-violet-200 overflow-x-hidden">
            <CustomStyles />

            {/* 1. NAVBAR */}
            <header
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[#07070B]/85 backdrop-blur-xl border-b border-white/[0.07] py-3.5 shadow-2xl shadow-black/40'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2.5 group">
                        <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-violet-600/25">
                            <div className="w-full h-full bg-[#0B0B12] rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                                <SparklesIcon className="w-4 h-4 text-violet-300 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                        <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                            NexaMind<span className="text-violet-400">.ai</span>
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                        <a href="#services" className="hover:text-white transition-colors">Services</a>
                        <a href="#features" className="hover:text-white transition-colors">Architecture</a>
                        <a href="#testimonials" className="hover:text-white transition-colors">Results</a>
                        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                    </nav>

                    <div className="hidden md:flex items-center gap-3">
                        <a href="#contact" className="text-sm font-medium text-zinc-300 hover:text-white px-3.5 py-2 transition-colors">
                            Client Portal
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Book AI Audit
                            <ArrowRightIcon className="w-4 h-4" />
                        </a>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                        className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5"
                    >
                        {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#0C0C12]/95 backdrop-blur-2xl border-b border-white/10 px-6 pt-4 pb-6 space-y-4">
                        <div className="flex flex-col space-y-3 text-sm font-medium text-zinc-300">
                            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-violet-400">Services</a>
                            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-violet-400">Architecture</a>
                            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-violet-400">Results</a>
                            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-violet-400">Pricing</a>
                            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-1.5 hover:text-violet-400">FAQ</a>
                        </div>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                        >
                            Book Free AI Audit
                            <ArrowRightIcon className="w-4 h-4" />
                        </a>
                    </div>
                )}
            </header>

            {/* 2. HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-grid-pattern overflow-hidden">
                <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[680px] h-[380px] rounded-full bg-violet-600/20 blur-[130px] animate-pulse-glow" />
                <div className="pointer-events-none absolute top-44 -right-24 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
                        <div className="lg:col-span-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-violet-300 mb-6">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                <span>Now deploying Autonomous Multi-Agent Systems</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                                We Build{' '}
                                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                                    Autonomous AI
                                </span>{' '}
                                That Scales Your Revenue.
                            </h1>

                            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                NexaMind engineers custom LLM agents, enterprise RAG pipelines, and zero-touch
                                operational workflows that cut manual overhead by up to 78% in weeks—not quarters.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <a
                                    href="#contact"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:brightness-110 text-white shadow-xl shadow-violet-600/25 transition-all hover:-translate-y-0.5"
                                >
                                    Schedule Strategy Call
                                    <ArrowRightIcon className="w-4 h-4" />
                                </a>
                                <a
                                    href="#features"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-200 transition-all"
                                >
                                    <PlayIcon className="w-4 h-4 text-cyan-400" />
                                    Explore Live Stack
                                </a>
                            </div>

                            <div className="mt-10 pt-8 border-t border-white/[0.07] grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white">10x</div>
                                    <div className="text-xs text-zinc-500 mt-0.5">Faster Ops Execution</div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white">$18M+</div>
                                    <div className="text-xs text-zinc-500 mt-0.5">Client Cost Saved</div>
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
                                    <div className="text-xs text-zinc-500 mt-0.5">Production Uptime</div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="relative animate-float">
                                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600/40 via-cyan-500/30 to-fuchsia-600/40 blur-lg opacity-75" />
                                <div className="relative glass-card border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl">
                                    <div className="flex items-center justify-between pb-4 border-b border-white/[0.07]">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                                            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                                            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                                            <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                                                <TerminalIcon className="w-3.5 h-3.5 text-violet-400" />
                                                nexamind-orchestrator v4.2
                                            </span>
                                        </div>
                                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                            LIVE AGENT
                                        </span>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {AGENT_SCENARIOS.map((sc) => (
                                            <button
                                                key={sc.id}
                                                onClick={() => triggerSimulation(sc)}
                                                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${activeScenario.id === sc.id
                                                    ? 'bg-violet-600/25 text-violet-200 border border-violet-500/40'
                                                    : 'bg-white/[0.03] text-zinc-400 border border-white/5 hover:text-zinc-200'
                                                    }`}
                                            >
                                                {sc.label}
                                            </button>
                                        ))}
                                    </div>

                                    <div className={`mt-5 space-y-3 transition-opacity duration-300 ${isSimulating ? 'opacity-40' : 'opacity-100'}`}>
                                        <div className="p-3 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs text-cyan-300">
                                            <span className="text-zinc-500 mr-2">&gt;</span>
                                            {activeScenario.trigger}
                                        </div>

                                        <div className="space-y-2.5 pl-2 border-l border-violet-500/30">
                                            {activeScenario.steps.map((step, idx) => (
                                                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                                                    <span className="mt-0.5 w-4 h-4 rounded-full bg-violet-500/20 border border-violet-500/40 flex items-center justify-center shrink-0">
                                                        <CheckIcon className="w-2.5 h-2.5 text-violet-300" />
                                                    </span>
                                                    <span className="text-zinc-300 leading-snug">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center justify-between text-xs">
                                        <div className="flex items-center gap-4">
                                            <span className="text-zinc-400">
                                                Latency: <strong className="text-cyan-400 font-mono">{activeScenario.latency}</strong>
                                            </span>
                                            <span className="text-zinc-400">
                                                Impact: <strong className="text-emerald-400 font-mono">{activeScenario.saved}</strong>
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => triggerSimulation(activeScenario)}
                                            className="inline-flex items-center gap-1 text-violet-400 hover:text-violet-300 font-medium"
                                        >
                                            <RefreshCwIcon className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                                            Re-run
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/[0.06] text-center">
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-6">
                            Trusted by high-velocity engineering & operations teams
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60">
                            {['VORTEX LABS', 'FINSCALE', 'MERIDIAN', 'PULSEHEALTH', 'STRATOS CLOUD'].map((brand) => (
                                <span key={brand} className="text-sm sm:text-base font-bold tracking-widest text-zinc-400 hover:text-white transition-colors">
                                    {brand}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICES SECTION */}
            <section id="services" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">Core Capabilities</span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Production-Grade AI Systems Built for ROI
                        </h2>
                        <p className="mt-4 text-zinc-400 text-base">
                            We move beyond fragile chat wrappers—architecting deeply integrated intelligence layers tailored to your proprietary workflows.
                        </p>
                    </div>

                    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICES.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className={`group relative rounded-2xl glass-card border border-white/[0.07] ${service.borderHover} p-6 transition-all duration-300 hover:-translate-y-1`}
                                >
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                                    <div className="relative">
                                        <div className="flex items-center justify-between mb-5">
                                            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                                                <Icon className={`w-5 h-5 ${service.iconColor}`} />
                                            </div>
                                            <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                                                {service.tag}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-semibold text-white group-hover:text-violet-200 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed">{service.description}</p>

                                        <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                                            <span className="font-mono text-zinc-300">{service.metrics}</span>
                                            <a href="#contact" className="inline-flex items-center gap-1 text-violet-400 font-medium group-hover:translate-x-1 transition-transform">
                                                Scope build <ArrowRightIcon className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. FEATURES SECTION */}
            <section id="features" className="py-24 border-y border-white/[0.06] bg-white/[0.01]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300">
                                <LockIcon className="w-3.5 h-3.5" />
                                Zero-Trust Data Boundary
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                                Enterprise Guardrails & Automatic PII Redaction
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Every prompt and retrieved document passes through an inline deterministic firewall that masks sensitive customer records, enforces role permissions, and eliminates hallucinations before output generation.
                            </p>
                            <ul className="space-y-3 text-sm text-zinc-300">
                                <li className="flex items-center gap-2.5">
                                    <CheckIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                                    SOC2 Type II & HIPAA-compliant VPC deployment options
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <CheckIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                                    Real-time token sanitization & prompt-injection defense
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <CheckIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                                    Full audit logs exported directly to Datadog or Splunk
                                </li>
                            </ul>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="glass-card border border-white/10 rounded-2xl p-6 space-y-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-white">Live Privacy Firewall</span>
                                    <button
                                        onClick={() => setPiiRedaction(!piiRedaction)}
                                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${piiRedaction
                                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                            : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                            }`}
                                    >
                                        {piiRedaction ? 'PII Masking: ON' : 'PII Masking: OFF'}
                                    </button>
                                </div>

                                <div className="p-4 rounded-xl bg-black/50 border border-white/[0.07] font-mono text-xs space-y-2 leading-relaxed">
                                    <div className="text-zinc-500">// Outbound LLM Payload Preview</div>
                                    <div className="text-zinc-300">
                                        &quot;Customer{' '}
                                        <span className={piiRedaction ? 'px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300' : 'text-amber-300'}>
                                            {piiRedaction ? '[PERSON_REDACTED]' : 'Jonathan Miller'}
                                        </span>{' '}
                                        requested wire limit increase on account{' '}
                                        <span className={piiRedaction ? 'px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300' : 'text-amber-300'}>
                                            {piiRedaction ? '[ACCT_****8821]' : '4092-8819-8821'}
                                        </span>
                                        .&quot;
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                        <div className="text-zinc-500">Overhead Added</div>
                                        <div className="text-base font-bold text-white mt-0.5 font-mono">11.4 ms</div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                                        <div className="text-zinc-500">Retention Policy</div>
                                        <div className="text-base font-bold text-emerald-400 mt-0.5 font-mono">0 Days</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1">
                            <div className="glass-card border border-white/10 rounded-2xl p-6 space-y-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-white flex items-center gap-2">
                                        <CpuIcon className="w-4 h-4 text-violet-400" />
                                        Semantic Edge Routing
                                    </span>
                                    <button
                                        onClick={() => setEdgeCaching(!edgeCaching)}
                                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${edgeCaching
                                            ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                                            : 'bg-zinc-800 text-zinc-400 border border-white/10'
                                            }`}
                                    >
                                        {edgeCaching ? 'Semantic Cache: ACTIVE' : 'Standard Inference'}
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-zinc-400">NexaMind Optimized Pipeline</span>
                                            <span className="font-mono text-cyan-400">{edgeCaching ? '145 ms' : '620 ms'}</span>
                                        </div>
                                        <div className="h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                                            <div
                                                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500"
                                                style={{ width: edgeCaching ? '24%' : '62%' }}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-zinc-500">Unoptimized Naive API Chain</span>
                                            <span className="font-mono text-zinc-500">1,840 ms</span>
                                        </div>
                                        <div className="h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                                            <div className="h-full w-[92%] rounded-full bg-zinc-700" />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <div className="text-xs text-zinc-400 mb-2.5">One-Click Bi-Directional Connectors:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {['Slack', 'HubSpot', 'Notion', 'PostgreSQL', 'Salesforce'].map((tool) => (
                                            <button
                                                key={tool}
                                                onClick={() => setSelectedIntegration(tool)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${selectedIntegration === tool
                                                    ? 'bg-cyan-500/15 border-cyan-400/40 text-cyan-200'
                                                    : 'bg-white/[0.03] border-white/[0.07] text-zinc-400 hover:text-white'
                                                    }`}
                                            >
                                                {tool}
                                            </button>
                                        ))}
                                    </div>
                                    <p className="mt-3 text-xs text-zinc-400 font-mono">
                                        ✓ Connected: <span className="text-zinc-200">{selectedIntegration}</span> real-time webhook & OAuth2 sync ready.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300">
                                <ZapIcon className="w-3.5 h-3.5" />
                                Sub-200ms Orchestration
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                                Semantic Caching & Multi-Model Routing
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Stop overpaying for frontier tokens on routine tasks. Our intelligent router dynamically dispatches simple classification to fast distilled models while reserving deep reasoning models for complex edge cases.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                                    <div className="text-2xl font-bold text-white">-64%</div>
                                    <div className="text-xs text-zinc-400 mt-1">Monthly LLM Token Spend</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07]">
                                    <div className="text-2xl font-bold text-white">50+</div>
                                    <div className="text-xs text-zinc-400 mt-1">Native Enterprise Integrations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TESTIMONIALS SECTION */}
            <section id="testimonials" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">Proven Impact</span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Trusted by Operators Who Measure ROI
                        </h2>
                    </div>

                    <div className="mt-14 grid md:grid-cols-3 gap-6">
                        {TESTIMONIALS.map((item, index) => (
                            <div key={index} className="glass-card border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between hover:border-violet-500/40 transition-colors">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-1 text-amber-400">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon key={i} className="w-4 h-4" />
                                            ))}
                                        </div>
                                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25">
                                            {item.metric}
                                        </span>
                                    </div>
                                    <p className="text-sm text-zinc-300 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                                        {item.avatar}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-white">{item.author}</div>
                                        <div className="text-xs text-zinc-400">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. PRICING SECTION */}
            <section id="pricing" className="py-24 relative border-t border-white/[0.06]">
                <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[340px] rounded-full bg-indigo-600/15 blur-[130px]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">Transparent Engagement</span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Predictable Retainers. 100% IP Ownership.
                        </h2>
                        <p className="mt-3 text-zinc-400 text-sm sm:text-base">
                            Pause or scale your engineering capacity anytime. Every line of code and model weight belongs to you.
                        </p>

                        <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${billingCycle === 'monthly' ? 'bg-violet-600 text-white shadow' : 'text-zinc-400 hover:text-white'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle('quarterly')}
                                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${billingCycle === 'quarterly' ? 'bg-violet-600 text-white shadow' : 'text-zinc-400 hover:text-white'
                                    }`}
                            >
                                Quarterly
                                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Save 15%</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-14 grid lg:grid-cols-3 gap-7 items-stretch">
                        {PRICING_PLANS.map((plan) => {
                            const price = billingCycle === 'quarterly' ? plan.quarterlyPrice : plan.monthlyPrice;
                            return (
                                <div
                                    key={plan.name}
                                    className={`relative rounded-2xl p-7 flex flex-col justify-between transition-transform duration-300 ${plan.featured
                                        ? 'bg-gradient-to-b from-violet-950/60 via-[#10101A] to-[#0B0B12] border-2 border-violet-500/60 shadow-2xl shadow-violet-900/30 lg:-translate-y-2'
                                        : 'glass-card border border-white/[0.08]'
                                        }`}
                                >
                                    {plan.badge && (
                                        <span
                                            className={`absolute -top-3.5 right-6 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${plan.featured
                                                ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white'
                                                : 'bg-zinc-800 text-zinc-300 border border-white/10'
                                                }`}
                                        >
                                            {plan.badge}
                                        </span>
                                    )}

                                    <div>
                                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                        <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{plan.subtitle}</p>

                                        <div className="mt-6 pb-6 border-b border-white/[0.08]">
                                            {price ? (
                                                <div className="flex items-baseline gap-1.5">
                                                    <span className="text-4xl font-extrabold text-white">${price.toLocaleString()}</span>
                                                    <span className="text-sm text-zinc-400">/ month</span>
                                                </div>
                                            ) : (
                                                <div className="text-3xl font-extrabold text-white">Custom Scope</div>
                                            )}
                                        </div>

                                        <ul className="mt-6 space-y-3.5 text-sm text-zinc-300">
                                            {plan.features.map((feat) => (
                                                <li key={feat} className="flex items-start gap-2.5">
                                                    <CheckIcon className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a
                                        href="#contact"
                                        className={`mt-8 w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-semibold transition-all ${plan.featured
                                            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-600/30'
                                            : 'bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10'
                                            }`}
                                    >
                                        {plan.cta}
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section id="faq" className="py-24 border-t border-white/[0.06]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">FAQ</span>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
                    </div>

                    <div className="mt-12 space-y-3.5">
                        {FAQS.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div key={idx} className="glass-card border border-white/[0.08] rounded-2xl overflow-hidden transition-colors">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                                    >
                                        <span className="text-sm sm:text-base font-semibold text-white">{faq.q}</span>
                                        <ChevronDownIcon className={`w-5 h-5 text-violet-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {isOpen && (
                                        <div className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed border-t border-white/[0.05] pt-3.5">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 8. CONTACT SECTION */}
            <section id="contact" className="py-24 relative border-t border-white/[0.06]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-3xl bg-gradient-to-br from-violet-950/50 via-[#0E0E17] to-cyan-950/30 border border-white/10 p-8 sm:p-12 lg:p-14 overflow-hidden">
                        <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-violet-600/20 blur-[100px]" />

                        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-5 space-y-5">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-xs font-medium text-violet-300">
                                    <SparklesIcon className="w-3.5 h-3.5" />
                                    Free 30-Min Architecture Audit
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                                    Ready to Automate Your Highest-Leverage Workflows?
                                </h2>
                                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                                    Tell us about your current bottlenecks. Our solutions architects will map out a custom ROI blueprint and timeline within 24 hours.
                                </p>

                                <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-zinc-300">
                                    <div className="flex items-center gap-2.5">
                                        <GlobeIcon className="w-4 h-4 text-cyan-400" />
                                        <span>San Francisco • London • Remote Worldwide</span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <ShieldCheckIcon className="w-4 h-4 text-violet-400" />
                                        <span>Mutual NDA signed prior to technical discovery</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                {formSubmitted ? (
                                    <div className="glass-card border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4">
                                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto">
                                            <CheckIcon className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white">Discovery Request Received</h3>
                                        <p className="text-sm text-zinc-400 max-w-md mx-auto">
                                            Thank you, <span className="text-white font-medium">{formState.name}</span>. An AI Solutions Architect will reach out to{' '}
                                            <span className="text-cyan-300">{formState.email}</span> within 4 business hours.
                                        </p>
                                        <button onClick={() => setFormSubmitted(false)} className="text-xs text-violet-400 hover:text-violet-300 underline">
                                            Submit another inquiry
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="glass-card border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Alex Rivera"
                                                    value={formState.name}
                                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Work Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="alex@company.com"
                                                    value={formState.email}
                                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Company</label>
                                                <input
                                                    type="text"
                                                    placeholder="Acme Corp"
                                                    value={formState.company}
                                                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Estimated Monthly Budget</label>
                                                <select
                                                    value={formState.budget}
                                                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                                                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/70 border border-white/10 text-sm text-white focus:outline-none focus:border-violet-500"
                                                >
                                                    <option>$3k - $5k (Sprint)</option>
                                                    <option>$5k - $10k</option>
                                                    <option>$10k - $25k</option>
                                                    <option>$25k+ (Enterprise VPC)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-zinc-400 mb-1.5">What process do you want to automate?</label>
                                            <textarea
                                                rows={3}
                                                required
                                                placeholder="e.g. Automating tier-2 support tickets using our internal Notion docs and Zendesk..."
                                                value={formState.message}
                                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:brightness-110 text-white shadow-lg shadow-violet-600/25 transition-all"
                                        >
                                            <SendIcon className="w-4 h-4" />
                                            Request Custom AI Blueprint
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FOOTER */}
            <footer className="border-t border-white/[0.07] bg-[#050508] pt-16 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-white/[0.06]">
                        <div className="col-span-2 space-y-4">
                            <a href="#" className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                                    <SparklesIcon className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-lg font-bold text-white">
                                    NexaMind<span className="text-violet-400">.ai</span>
                                </span>
                            </a>
                            <p className="text-xs sm:text-sm text-zinc-400 max-w-xs leading-relaxed">
                                Applied AI engineering studio building autonomous agents, enterprise RAG systems, and resilient automation infrastructure.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Solutions</h4>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
                                <li><a href="#services" className="hover:text-white transition-colors">Custom LLM Agents</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Enterprise RAG</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Voice Concierge AI</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Workflow Automation</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
                                <li><a href="#features" className="hover:text-white transition-colors">Security & SOC2</a></li>
                                <li><a href="#testimonials" className="hover:text-white transition-colors">Case Studies</a></li>
                                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">Book Audit</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Connect</h4>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
                                <li><a href="#contact" className="hover:text-white transition-colors">X / Twitter</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">GitHub</a></li>
                                <li><a href="mailto:hello@nexamind.ai" className="hover:text-white transition-colors">hello@nexamind.ai</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
                        <p>© {new Date().getFullYear()} NexaMind AI Inc. All rights reserved.</p>
                        <div className="flex items-center gap-6">
                            <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
                            <a href="#" className="hover:text-zinc-300">Terms of Service</a>
                            <a href="#" className="hover:text-zinc-300">Security Disclosure</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}