"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative z-50 w-full pt-6 px-4 sm:px-6 lg:px-8">
            <nav
                className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 ${scrolled
                    ? "bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl shadow-gray-900/5"
                    : "bg-white/10 border border-white/40 shadow-lg shadow-blue-500/10 backdrop-blur"
                    }`}
            >
                <div className="px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="#" className="text-2xl font-bold text-gray-900">
                                TrojanDev
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center gap-8 md:flex">
                            <a href="#features" className="text-gray-700 transition-colors duration-300 hover:text-gray-900 font-medium text-sm">
                                Features
                            </a>
                            <a href="#pricing" className="text-gray-700 transition-colors duration-300 hover:text-gray-900 font-medium text-sm">
                                Pricing
                            </a>
                            <a href="#testimonials" className="text-gray-700 transition-colors duration-300 hover:text-gray-900 font-medium text-sm">
                                Testimonials
                            </a>
                            <a href="#" className="text-gray-700 transition-colors duration-300 hover:text-gray-900 font-medium text-sm">
                                Docs
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="hidden text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-gray-900 sm:block">
                                Sign In
                            </a>
                            <button className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
