import ScrollReveal from "./ScrollReveal";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CEO, TechFlow Inc.",
        image: "SC",
        content: "This platform has completely transformed how we operate. We've cut our processing time by 70% and our team can finally focus on strategic work.",
        rating: 5,
    },
    {
        name: "Michael Rodriguez",
        role: "CTO, DataSync Solutions",
        image: "MR",
        content: "The best investment we've made this year. The automation capabilities are incredible, and the support team is world-class.",
        rating: 5,
    },
    {
        name: "Emily Watson",
        role: "Operations Director, CloudScale",
        image: "EW",
        content: "Implementation was seamless, and the results exceeded our expectations. Our productivity has increased dramatically.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <ScrollReveal direction="up">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Loved by teams worldwide
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                            See what our customers have to say about their experience.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <ScrollReveal key={index} direction="up" delay={index * 150}>
                            <div className="relative p-8 rounded-xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                {/* Rating */}
                                <div className="flex gap-1 mb-5">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold text-sm border-2 border-gray-300">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>

                                {/* Quote icon */}
                                <div className="absolute top-6 right-6 opacity-5">
                                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
