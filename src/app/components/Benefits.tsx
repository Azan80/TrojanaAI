import ScrollReveal from "./ScrollReveal";

export default function Benefits() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.015]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left side - Content */}
                    <div>
                        <ScrollReveal direction="right">
                            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                                Built for teams that move fast
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={100}>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                                Join thousands of companies that have transformed their operations and achieved remarkable results with our platform.
                            </p>
                        </ScrollReveal>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Reduce operational costs by up to 60%",
                                    description: "Automate repetitive tasks and free up your team to focus on what matters most.",
                                },
                                {
                                    title: "Scale without limits",
                                    description: "Our infrastructure grows with you, handling millions of operations seamlessly.",
                                },
                                {
                                    title: "Deploy in minutes, not months",
                                    description: "Get up and running quickly with our intuitive setup and comprehensive documentation.",
                                },
                            ].map((benefit, index) => (
                                <ScrollReveal key={index} direction="right" delay={200 + index * 100}>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal direction="right" delay={500}>
                            <div className="mt-10">
                                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                                    Get Started Today
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right side - Visual */}
                    <ScrollReveal direction="left" delay={200}>
                        <div className="relative">
                            <div className="relative rounded-2xl bg-white p-6 shadow-2xl border border-gray-200">
                                {/* Browser chrome */}
                                <div className="bg-gray-50 border-b border-gray-200 px-4 py-2.5 flex items-center gap-2 mb-6 rounded-t-xl">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex-1 bg-white border border-gray-200 rounded px-3 py-1 mx-3">
                                        <div className="text-xs text-gray-400">analytics.yoursaas.com</div>
                                    </div>
                                </div>

                                {/* Dashboard content */}
                                <div className="space-y-4">
                                    {/* Stats cards */}
                                    <div className="grid grid-cols-3 gap-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                                                <div className="h-3 bg-gray-300 rounded w-16 mb-2"></div>
                                                <div className="h-6 bg-gray-400 rounded w-20 mb-1"></div>
                                                <div className="h-2 bg-gray-200 rounded w-12"></div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Chart area */}
                                    <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 h-64">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="h-4 bg-gray-300 rounded w-24"></div>
                                            <div className="h-3 bg-gray-200 rounded w-20"></div>
                                        </div>
                                        {/* Chart bars */}
                                        <div className="flex items-end justify-between h-40 gap-2">
                                            {[65, 80, 45, 90, 70, 55, 85, 60, 75, 50].map((height, i) => (
                                                <div key={i} className="flex-1 flex flex-col justify-end">
                                                    <div
                                                        className="bg-blue-500 rounded-t transition-all duration-1000 hover:bg-blue-600"
                                                        style={{ height: `${height}%` }}
                                                    ></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* List items */}
                                    <div className="space-y-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                                <div className="h-8 w-8 bg-gray-300 rounded"></div>
                                                <div className="flex-1 space-y-1.5">
                                                    <div className="h-3 bg-gray-300 rounded" style={{ width: `${70 + i * 10}%` }}></div>
                                                    <div className="h-2 bg-gray-200 rounded w-32"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating notification badge */}
                            <div className="absolute -top-3 -right-3 w-12 h-12 bg-blue-600 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
