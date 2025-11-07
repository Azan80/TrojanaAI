import { LuArrowUpRight } from "react-icons/lu";
import {
    PiChartLineBold,
    PiLightningBold,
    PiPlayCircleBold,
    PiRocketLaunchBold,
    PiShieldCheckBold,
    PiSparkleFill,
} from "react-icons/pi";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
    return (
        <section className="relative -mt-16 min-h-screen overflow-hidden bg-white sm:-mt-20 lg:-mt-24">
            {/* Animated background */}
            <div className="absolute inset-0 hero-gradient"></div>
            <div className="absolute inset-0 hero-grid-pattern"></div>
            <div className="absolute -top-40 right-1/4 h-[540px] w-[540px] rounded-full bg-blue-200/50 blur-3xl animate-pulse-soft"></div>
            <div className="absolute -bottom-48 left-1/5 h-[520px] w-[520px] rounded-full bg-indigo-200/40 blur-3xl animate-pulse-soft"></div>

            {/* Floating cards */}
            <div className="pointer-events-none absolute inset-0">
                <div className="animate-float-slow absolute left-8 top-28 hidden w-40 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur lg:block">
                    <div className="flex items-center justify-between">
                        <div className="rounded-xl bg-blue-100 p-2 text-blue-600">
                            <PiSparkleFill size={20} />
                        </div>
                        <span className="text-xs font-semibold text-gray-500">AI Boost</span>
                    </div>
                    <p className="mt-4 text-sm font-medium text-gray-800">Workflow saved 12h/week</p>
                </div>

                <div className="animate-float-medium absolute right-14 top-40 hidden w-36 rounded-xl border border-white/50 bg-white/80 p-3 shadow-lg backdrop-blur lg:block">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                            <PiShieldCheckBold size={18} />
                        </div>
                        <div className="space-y-1 text-xs text-gray-600">
                            <p className="font-semibold text-gray-800">Secured</p>
                            <span>ISO 27001</span>
                        </div>
                    </div>
                </div>

                <div className="animate-float-delay absolute bottom-32 right-12 hidden w-52 rounded-2xl border border-white/50 bg-white/80 p-4 shadow-xl backdrop-blur lg:block">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full bg-indigo-100 p-3 text-indigo-600">
                            <PiRocketLaunchBold size={22} />
                        </div>
                        <div className="text-sm">
                            <p className="font-semibold text-gray-900">Launch in minutes</p>
                            <span className="text-xs text-gray-500">Ready-to-use playbooks</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-6xl px-4 pt-32 pb-24 sm:px-6 sm:pt-36 lg:px-8 lg:pt-44">
                <div className="text-center">
                    <ScrollReveal direction="fade" delay={0}>
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-5 py-2 text-sm font-medium text-gray-600 shadow-lg backdrop-blur">
                            <span className="rounded-full bg-blue-100 p-1 text-blue-600">
                                <PiSparkleFill size={14} />
                            </span>
                            <span>AI-first automations are live</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={120}>
                        <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                            <span className="block">Reimagine the way</span>
                            <span className="relative mx-auto mt-3 inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    your team ships work
                                </span>
                                <span className="absolute bottom-2 left-0 right-0 h-3 rounded-full bg-blue-200/50 blur-sm"></span>
                            </span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={200}>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                            YourSaaS delivers real-time orchestration across every workflow. Empower teams with predictive automation,
                            live insights, and guided decisions—no clunky setup, no manual checklists.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={280}>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-blue-600 px-9 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl">
                                <span>Start free trial</span>
                                <LuArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
                                <span className="absolute inset-0 bg-blue-500/0 transition-opacity duration-300 group-hover:bg-blue-500/20"></span>
                            </button>
                            <button className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg">
                                <PiPlayCircleBold className="text-gray-500 transition-colors group-hover:text-blue-600" size={22} />
                                Watch guided demo
                            </button>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal direction="up" delay={360}>
                    <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {[
                            { icon: <PiLightningBold size={22} />, label: "Automation throughput", value: "+63%" },
                            { icon: <PiShieldCheckBold size={22} />, label: "Compliance ready", value: "Global" },
                            { icon: <PiChartLineBold size={22} />, label: "Time to insight", value: "45s" },
                            { icon: <PiRocketLaunchBold size={22} />, label: "Deployment speed", value: "4x faster" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-white/70 bg-white/80 p-5 text-center shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                            >
                                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                    {item.icon}
                                </div>
                                <p className="mt-4 text-3xl font-semibold text-gray-900">{item.value}</p>
                                <p className="text-sm font-medium text-gray-500">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Product preview */}
                <ScrollReveal direction="up" delay={440}>
                    <div className="relative mt-20 rounded-3xl border border-white/70 bg-white/80 p-1 shadow-2xl backdrop-blur">
                        <div className="shimmer-overlay rounded-[26px]"></div>
                        <div className="relative overflow-hidden rounded-[26px] border border-gray-100 bg-white">
                            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50/80 px-4 py-3">
                                <div className="flex gap-2">
                                    <span className="h-3 w-3 rounded-full bg-rose-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-amber-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-emerald-400"></span>
                                </div>
                                <div className="ml-4 flex-1 rounded-lg border border-gray-200 bg-white px-4 py-1">
                                    <p className="flex items-center gap-2 text-xs text-gray-400">
                                        <PiShieldCheckBold size={14} />
                                        dashboard.yoursaas.com
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-6 p-8 lg:grid-cols-[1.3fr_1fr]">
                                <div>
                                    <div className="grid gap-4 sm:grid-cols-3">
                                        {["Active workflows", "Risk score", "Automation feed"].map((title) => (
                                            <div
                                                key={title}
                                                className="rounded-2xl border border-gray-100 bg-gray-50/80 p-6 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                                            >
                                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{title}</p>
                                                <p className="mt-4 text-2xl font-bold text-gray-900">
                                                    {title === "Risk score" ? "99.2%" : title === "Active workflows" ? "124" : "Live"}
                                                </p>
                                                <div className="mt-4 h-2 rounded-full bg-gradient-to-r from-blue-200 to-blue-500"></div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50/80 p-6">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-semibold text-gray-700">Weekly throughput</p>
                                            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-600">Live</span>
                                        </div>
                                        <div className="mt-5 flex h-40 items-end gap-2">
                                            {[58, 72, 65, 92, 85, 110, 105, 128, 136, 150].map((height, index) => (
                                                <span
                                                    key={height}
                                                    className="flex-1 rounded-t-full bg-gradient-to-t from-blue-400 to-indigo-400"
                                                    style={{ height: `${height}px`, animation: `growUp 1s ease-out ${index * 0.08}s both` }}
                                                ></span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {[
                                        {
                                            title: "Intelligence briefing",
                                            description: "AI co-pilot suggested 7 optimizations to unlock $182K ARR.",
                                            icon: <PiSparkleFill size={20} />,
                                            accent: "bg-blue-100 text-blue-600",
                                        },
                                        {
                                            title: "Security posture",
                                            description: "Continuous compliance across SOC 2, HIPAA, and GDPR with automated evidence.",
                                            icon: <PiShieldCheckBold size={20} />,
                                            accent: "bg-emerald-100 text-emerald-600",
                                        },
                                        {
                                            title: "Launch checklist",
                                            description: "All stakeholder approvals are in. Go live is scheduled for 09:30 AM.",
                                            icon: <PiRocketLaunchBold size={20} />,
                                            accent: "bg-indigo-100 text-indigo-600",
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                                        >
                                            <div className="flex items-start gap-4">
                                                <span className={`rounded-xl p-2 ${item.accent}`}>{item.icon}</span>
                                                <div>
                                                    <p className="text-base font-semibold text-gray-900">{item.title}</p>
                                                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center gap-2 text-xs font-medium text-gray-500">
                    <span>Scroll to explore</span>
                    <div className="animate-bounce text-gray-400">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
