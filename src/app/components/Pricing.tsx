import ScrollReveal from "./ScrollReveal";

const plans = [
    {
        name: "Starter",
        price: "$29",
        period: "per month",
        description: "Perfect for small teams getting started",
        features: [
            "Up to 5 team members",
            "10,000 operations/month",
            "Basic automation",
            "Email support",
            "Standard integrations",
        ],
        cta: "Start Free Trial",
        popular: false,
    },
    {
        name: "Professional",
        price: "$99",
        period: "per month",
        description: "For growing teams that need more power",
        features: [
            "Up to 25 team members",
            "100,000 operations/month",
            "Advanced automation",
            "Priority support",
            "All integrations",
            "Advanced analytics",
            "Custom workflows",
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "pricing",
        description: "For organizations with complex needs",
        features: [
            "Unlimited team members",
            "Unlimited operations",
            "Everything in Professional",
            "Dedicated account manager",
            "Custom integrations",
            "SLA guarantee",
            "On-premise deployment",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.015]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <ScrollReveal direction="up">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Simple, transparent pricing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                            Choose the plan that's right for you. All plans include a 14-day free trial.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 100}>
                            <div
                                className={`relative rounded-xl p-8 ${plan.popular
                                        ? "bg-white border-2 border-blue-600 shadow-2xl scale-105 z-10"
                                        : "bg-white border border-gray-200 shadow-lg"
                                    } hover:shadow-xl transition-all duration-500`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="px-4 py-1.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>
                                    <div className="mb-2">
                                        <span className="text-5xl font-bold text-gray-900">
                                            {plan.price}
                                        </span>
                                        {plan.period !== "pricing" && (
                                            <span className="text-gray-600 ml-2 text-lg">/{plan.period}</span>
                                        )}
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3">
                                            <svg
                                                className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${plan.popular
                                            ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                            : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300"
                                        }`}
                                >
                                    {plan.cta}
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Footer note */}
                <ScrollReveal direction="up" delay={400}>
                    <div className="text-center mt-12">
                        <p className="text-gray-600">
                            All plans include a 14-day free trial. No credit card required.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
