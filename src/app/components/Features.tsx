"use client";

import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type CSSProperties,
} from "react";
import { LuArrowUpRight } from "react-icons/lu";
import {
    PiBrainBold,
    PiChartLineUpBold,
    PiCheckCircleBold,
    PiCirclesFourBold,
    PiHandsClappingBold,
    PiLightningBold,
    PiShieldCheckBold,
    PiUsersThreeBold,
} from "react-icons/pi";
import ScrollReveal from "./ScrollReveal";

const features = [
    {
        title: "Predictive Automation Studio",
        description:
            "Design intelligent workflows with AI-suggested logic, adaptive routing, and automation guardrails that continuously learn from your data.",
        icon: <PiBrainBold size={26} />,
        badge: "AI Orchestrator",
        accent: "bg-blue-100 text-blue-600",
        highlights: [
            "Drag-and-drop intelligence with contextual AI assistance",
            "Continuous optimisation loop that re-trains every 24 hours",
            "Human-in-the-loop checkpoints to approve critical decisions",
        ],
        metrics: [
            { value: "68%", label: "manual effort removed" },
            { value: "24h", label: "adaptive retraining" },
        ],
    },
    {
        title: "Unified Control Tower",
        description:
            "Monitor every automation, SLA, and dependency from a single live command centre. Resolve bottlenecks before they surface.",
        icon: <PiChartLineUpBold size={26} />,
        badge: "Live Observability",
        accent: "bg-emerald-100 text-emerald-600",
        highlights: [
            "Real-time anomaly alerts with automatic root-cause tracing",
            "Digital twin visualises every system hand-off at a glance",
            "Executive-ready insights shipped to Slack, Teams, and email",
        ],
        metrics: [
            { value: "45s", label: "time to insight" },
            { value: "4x", label: "faster resolution" },
        ],
    },
    {
        title: "Compliance Autopilot",
        description:
            "Automated evidence capture, continuous risk scoring, and instant audit reporting keep you ahead of every regulation.",
        icon: <PiShieldCheckBold size={26} />,
        badge: "Always-on Trust",
        accent: "bg-indigo-100 text-indigo-600",
        highlights: [
            "Policy engine maps controls to SOC 2, HIPAA, and GDPR",
            "Tamper-proof activity ledger with time-synced artefacts",
            "Automated remediation playbooks for flagged exceptions",
        ],
        metrics: [
            { value: "0", label: "unattended gaps" },
            { value: "100%", label: "audit readiness" },
        ],
    },
    {
        title: "Collaborative Launchpad",
        description:
            "A shared workspace where ops, product, and compliance teams co-create playbooks, review insights, and launch outcomes together.",
        icon: <PiUsersThreeBold size={26} />,
        badge: "Team Workspace",
        accent: "bg-rose-100 text-rose-600",
        highlights: [
            "Role-aware workstreams with contextual approvals",
            "Feedback loops that feed AI models with curated insights",
            "Reusable playbooks versioned and synced across teams",
        ],
        metrics: [
            { value: "92%", label: "team adoption" },
            { value: "7 min", label: "average launch prep" },
        ],
    },
];

export default function Features() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const wheelZoneRef = useRef<HTMLDivElement | null>(null);
    const lockPositionRef = useRef(0);
    const capturingRef = useRef(false);

    const progressRef = useRef(0);
    const targetRef = useRef(0);
    const animationRef = useRef<number | null>(null);
    const [progress, setProgress] = useState(0);

    const startAnimation = useCallback(() => {
        if (animationRef.current !== null) return;

        const animate = () => {
            const current = progressRef.current;
            const target = targetRef.current;
            const next = current + (target - current) * 0.12;

            if (Math.abs(next - target) < 0.0005) {
                progressRef.current = target;
                setProgress(target);
                animationRef.current = null;
                return;
            }

            progressRef.current = next;
            setProgress(next);
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        if (progress <= 0 || progress >= 1) {
            capturingRef.current = false;
        }
    }, [progress]);

    useEffect(() => {
        return () => {
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const SCROLL_SENSITIVITY = 1 / 1600;
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 768px)");
        const listener = (event: MediaQueryListEvent) => setIsMobile(event.matches);

        setIsMobile(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, []);

    const processScrollDelta = useCallback(
        (delta: number, preventDefault?: () => void) => {
            if (isMobile) return;
            if (delta === 0) return;

            const zone = wheelZoneRef.current;
            if (!zone) return;

            const bounds = zone.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const center = viewportHeight / 3;
            const zoneCenter = bounds.top + bounds.height / 2;
            const CENTER_TOLERANCE = Math.min(80, viewportHeight * 0.06);
            const fullyVisible =
                bounds.top >= viewportHeight * 0.1 &&
                bounds.bottom <= viewportHeight - viewportHeight * 0.1;

            const centered = Math.abs(zoneCenter - center) <= CENTER_TOLERANCE;

            if (!fullyVisible || !centered) {
                capturingRef.current = false;
                return;
            }

            if (delta > 0 && progressRef.current >= 1) {
                capturingRef.current = false;
                return;
            }

            if (delta < 0 && progressRef.current <= 0) {
                capturingRef.current = false;
                return;
            }

            preventDefault?.();

            if (!capturingRef.current) {
                capturingRef.current = true;
                lockPositionRef.current = window.scrollY;
                progressRef.current = Math.min(Math.max(progressRef.current, 0), 1);
                targetRef.current = progressRef.current;
                console.log("Feature wheel engaged", {
                    index:
                        ((Math.round(progressRef.current * features.length) % features.length) +
                            features.length) %
                        features.length,
                    progress: progressRef.current,
                    bounds: {
                        top: bounds.top,
                        bottom: bounds.bottom,
                        height: bounds.height,
                        viewportHeight: window.innerHeight,
                        zoneCenter,
                        viewportCenter: center,
                    },
                });
            }

            window.scrollTo({ top: lockPositionRef.current, behavior: "auto" });

            const nextTarget = Math.min(
                Math.max(targetRef.current + delta * SCROLL_SENSITIVITY, 0),
                1
            );

            targetRef.current = nextTarget;
            startAnimation();

            if (nextTarget <= 0 || nextTarget >= 1) {
                capturingRef.current = false;
            }
        },
        [isMobile, startAnimation]
    );

    useEffect(() => {
        const onWheel = (event: WheelEvent) => {
            processScrollDelta(event.deltaY, () => event.preventDefault());
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        return () => window.removeEventListener("wheel", onWheel);
    }, [processScrollDelta]);

    const angleStep = 360 / features.length;
    const rotationAmount = progress * features.length;
    const radius = 250;

    const activeIndex = ((Math.round(rotationAmount) % features.length) + features.length) % features.length;

    return (
        <section
            ref={sectionRef}
            id="features"
            className="relative overflow-hidden py-32"
            style={{ minHeight: isMobile ? undefined : "170vh" }}
        >
            <div className="absolute inset-0 features-surface"></div>
            <div className="absolute inset-0 hero-grid-pattern opacity-30"></div>
            <div className="features-glow-one absolute -top-32 left-1/4 h-96 w-96"></div>
            <div className="features-glow-two absolute bottom-0 right-1/5 h-[420px] w-[420px]"></div>

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <ScrollReveal direction="up">
                    <div className="text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                            <PiLightningBold size={14} /> Platform Capabilities
                        </span>
                        <h2 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                            Enterprise automation designed for operational teams
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
                            From orchestrating predictive workflows to proving compliance in real-time, YourSaaS brings every critical capability under one polished experience.
                        </p>
                    </div>
                </ScrollReveal>

                {isMobile ? (
                    <div className="mt-10 space-y-8">
                        {features.map((feature, index) => (
                            <ScrollReveal key={feature.title} direction="up" delay={index * 80}>
                                <article className="feature-card">
                                    <div className="flex items-start justify-between gap-4">
                                        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${feature.accent}`}>
                                            {feature.icon}
                                        </span>
                                        <span className="feature-card-badge">
                                            <PiCirclesFourBold size={14} /> {feature.badge}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 text-2xl font-semibold text-gray-900">{feature.title}</h3>
                                    <p className="mt-3 text-base leading-relaxed text-gray-600">{feature.description}</p>

                                    <div className="mt-6 space-y-3">
                                        {feature.highlights.map((highlight) => (
                                            <div key={highlight} className="feature-highlight">
                                                <span className="feature-highlight-icon">
                                                    <PiCheckCircleBold size={15} />
                                                </span>
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-3">
                                        {feature.metrics.map((metric) => (
                                            <div key={metric.label} className="feature-metric">
                                                <span className="feature-metric-value">{metric.value}</span>
                                                <span className="feature-metric-label">{metric.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </article>
                            </ScrollReveal>
                        ))}
                    </div>
                ) : (
                    <div className="relative mt-10 h-[145vh]">
                        <div
                            ref={wheelZoneRef}
                            className="sticky flex h-[min(46vh,360px)] items-center justify-center"
                            style={{ top: "48%", transform: "translateY(-50%)" }}
                        >
                            <div className="feature-wheel">
                                <div className="feature-wheel-ring"></div>
                                <div className="feature-wheel-core">
                                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                                        Capabilities
                                    </span>
                                </div>
                                {features.map((feature, index) => {
                                    const relativeIndex = index - rotationAmount;
                                    const angleDeg = relativeIndex * angleStep;
                                    const angleRad = (Math.PI / 180) * angleDeg;
                                    const x = Math.sin(angleRad) * radius;
                                    const y = Math.cos(angleRad) * radius;
                                    const normalized = Math.min(Math.abs(angleDeg) / 180, 1);
                                    const scale = 0.7 + (1 - normalized) * 0.3;
                                    const opacity = 0.25 + (1 - normalized) * 0.75;
                                    const elevation = Math.round(scale * 100);
                                    const isActive = index === activeIndex;

                                    const style: CSSProperties = {
                                        transform: `translate(-50%, -48%) translate(${x}px, ${y}px) scale(${scale})`,
                                        opacity,
                                        zIndex: elevation,
                                        pointerEvents: isActive ? "auto" : "none",
                                    };

                                    return (
                                        <article
                                            key={feature.title}
                                            className={`feature-card wheel-card ${isActive ? "wheel-card-active" : ""}`}
                                            style={style}
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${feature.accent}`}>
                                                    {feature.icon}
                                                </span>
                                                <span className="feature-card-badge">
                                                    <PiCirclesFourBold size={14} /> {feature.badge}
                                                </span>
                                            </div>

                                            <h3 className="mt-6 text-2xl font-semibold text-gray-900">{feature.title}</h3>
                                            <p className="mt-3 text-base leading-relaxed text-gray-600">{feature.description}</p>

                                            <div className="mt-6 space-y-3">
                                                {feature.highlights.map((highlight) => (
                                                    <div key={highlight} className="feature-highlight">
                                                        <span className="feature-highlight-icon">
                                                            <PiCheckCircleBold size={15} />
                                                        </span>
                                                        <span>{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-8 flex flex-wrap gap-3">
                                                {feature.metrics.map((metric) => (
                                                    <div key={metric.label} className="feature-metric">
                                                        <span className="feature-metric-value">{metric.value}</span>
                                                        <span className="feature-metric-label">{metric.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                <ScrollReveal direction="up" delay={480}>
                    <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/70 bg-white/80 p-8 text-center shadow-xl backdrop-blur sm:flex-row sm:text-left">
                        <div className="flex items-center gap-4 text-gray-800">
                            <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
                                <PiHandsClappingBold size={26} />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Trusted by operational teams at category-leading insurers</p>
                                <p className="text-sm text-gray-500">Join 10,000+ power users orchestrating revenue, compliance, and customer moments with YourSaaS.</p>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md"
                        >
                            Explore customer stories
                            <LuArrowUpRight size={16} />
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
