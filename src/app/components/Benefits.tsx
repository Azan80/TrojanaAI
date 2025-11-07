import ScrollReveal from "./ScrollReveal";

const benefits = [
    {
        eyebrow: "Operational agility",
        title: "Trim the busywork without losing control",
        description:
            "Automate reconciliations, approvals, and escalations with built-in guardrails so your team stays focused on strategic growth.",
    },
    {
        eyebrow: "Enterprise reach",
        title: "Scale processes across every market",
        description:
            "Launch reusable playbooks with localisation baked in. Keep policies, evidence, and auditable trails in sync as you expand.",
    },
    {
        eyebrow: "Speed to impact",
        title: "Ship new experiences in weeks, not quarters",
        description:
            "Design, simulate, and deploy new customer journeys from a single command centre, then iterate with real-time insight.",
    },
];

const milestones = [
    {
        label: "Week 1",
        title: "Hypercare onboarding",
        description: "Secure data syncs, tailored integrations, and success planning with your dedicated launch team.",
    },
    {
        label: "Week 3",
        title: "Automation blueprint",
        description: "AI insights expose friction points and recommend workflows that unlock the biggest operational upside first.",
    },
    {
        label: "Week 6",
        title: "Momentum unlocked",
        description: "Roll out across regions with staged approvals, compliance automation, and live KPI dashboards for leadership.",
    },
];

const metrics = [
    { label: "Change-readiness", value: "91%", notation: "Teams confident in weekly launches" },
    { label: "Risk exposure", value: "-43%", notation: "Incidents resolved before escalation" },
    { label: "Time-to-value", value: "30 days", notation: "From kickoff to measurable ROI" },
];

export default function Benefits() {
    return (
        <section className="relative overflow-hidden py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-[#f5f9ff] via-white to-[#f5f8fb]" />
            <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: "linear-gradient(transparent 87%, rgba(78, 115, 248, 0.12) 87%), linear-gradient(90deg, transparent 87%, rgba(78, 115, 248, 0.12) 87%)",
                backgroundSize: "48px 48px",
            }} />
            <div className="absolute top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#99c0ff]/40 blur-[120px]" />
            <div className="absolute -bottom-24 right-1/4 h-[30rem] w-[30rem] rounded-full bg-[#cfd9ff]/50 blur-[140px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-start gap-x-16 gap-y-16 lg:grid-cols-[1.05fr_1fr] lg:gap-y-0">
                    <div className="flex h-full flex-col">
                        <ScrollReveal direction="up">
                            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-500 shadow-sm backdrop-blur">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                Why operators choose us
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={90}>
                            <h2 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">
                                Give every team a launchpad, not another checklist
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={180}>
                            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
                                YourSaaS weaves automation, governance, and collaboration into a single operating layer. High-velocity
                                teams stay aligned, audits stay effortless, and customers feel the impact immediately.
                            </p>
                        </ScrollReveal>

                        <div className="mt-12 space-y-7">
                            {benefits.map((benefit, index) => (
                                <ScrollReveal key={benefit.title} direction="right" delay={260 + index * 120}>
                                    <article className="group rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-blue-500/80">
                                            {benefit.eyebrow}
                                        </p>
                                        <h3 className="mt-3 text-xl font-semibold text-slate-900">{benefit.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
                                    </article>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal direction="up" delay={640}>
                            <div className="mt-12 grid gap-4 sm:grid-cols-3">
                                {metrics.map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="rounded-3xl border border-slate-200/70 bg-white/85 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                                    >
                                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-400">{metric.label}</p>
                                        <p className="mt-3 text-2xl font-semibold text-slate-900">{metric.value}</p>
                                        <p className="mt-2 text-xs font-medium text-slate-500">{metric.notation}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={760}>
                            <div className="mt-12 flex flex-wrap items-center gap-4">
                                <button className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_32px_-18px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.6)]">
                                    See the platform
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                                <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900 hover:shadow-md">
                                    Download the ROI brief
                                </button>
                            </div>
                        </ScrollReveal>

                        <div className="flex-1" />
                    </div>

                    <div className="relative h-full">
                        <div className="absolute -top-12 left-6 h-24 w-24 rounded-full bg-blue-500/15 blur-3xl" />
                        <div className="absolute bottom-8 right-4 h-28 w-28 rounded-full bg-indigo-400/15 blur-3xl" />

                        <ScrollReveal direction="left" delay={180}>
                            <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/90 p-8 shadow-[0_45px_80px_-50px_rgba(15,23,42,0.55)] backdrop-blur">
                                <div className="absolute -top-40 right-0 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
                                <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-indigo-400/15 blur-3xl" />

                                <div className="relative z-10 flex h-full flex-col space-y-8">
                                    <header className="flex flex-wrap items-center justify-between gap-4">
                                        <div>
                                            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-blue-500/80">
                                                Operator mission control
                                            </p>
                                            <h3 className="mt-2 text-2xl font-semibold text-slate-900">Global automation overview</h3>
                                        </div>
                                        <span className="rounded-full border border-blue-200/70 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 shadow-sm">
                                            Synced 45 seconds ago
                                        </span>
                                    </header>

                                    <div className="grid gap-5 sm:grid-cols-[1.15fr_1fr]">
                                        <div className="space-y-4 rounded-[22px] border border-slate-200/70 bg-white/80 p-5 shadow-sm">
                                            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                                                Live automation health
                                            </p>
                                            <div className="space-y-3">
                                                {[
                                                    { label: "Workflows online", value: "127", accent: "bg-emerald-500" },
                                                    { label: "AI recommendations", value: "9 awaiting review", accent: "bg-blue-500" },
                                                    { label: "Exception queue", value: "2 assigned", accent: "bg-amber-400" },
                                                ].map((item) => (
                                                    <div key={item.label} className="flex items-center justify-between text-sm text-slate-600">
                                                        <span className="flex items-center gap-2">
                                                            <span className={`h-2.5 w-2.5 rounded-full ${item.accent}`} />
                                                            {item.label}
                                                        </span>
                                                        <span className="font-semibold text-slate-900">{item.value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="rounded-[22px] border border-slate-200/70 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-5 text-white shadow-lg">
                                            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/60">AI insight</p>
                                            <h4 className="mt-3 text-lg font-semibold">
                                                “Automate account closure workflows to reclaim 22 analyst hours per week.”
                                            </h4>
                                            <p className="mt-3 text-sm text-white/70">
                                                Review impact analysis, align stakeholders, and promote to production with one approval.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rounded-[22px] border border-slate-200/70 bg-white/85 p-5 shadow-sm">
                                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-slate-400">Adoption timeline</p>
                                        <div className="mt-4 space-y-4">
                                            {milestones.map((milestone, index) => (
                                                <div key={milestone.label} className="relative flex items-start gap-4">
                                                    <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 shadow-inner">
                                                        <span className="text-xs font-semibold">{milestone.label}</span>
                                                        {index !== milestones.length - 1 && (
                                                            <span className="absolute left-1/2 top-10 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/30 to-transparent" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h5 className="text-sm font-semibold text-slate-900">{milestone.title}</h5>
                                                        <p className="mt-1 text-xs leading-relaxed text-slate-500">{milestone.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex-1" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
