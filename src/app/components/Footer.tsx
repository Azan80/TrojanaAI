export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">TrojanDev</h3>
                        <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
                            Transform your business workflow with our powerful automation platform. Built for teams that demand excellence.
                        </p>
                        <div className="flex gap-3">
                            {["twitter", "linkedin", "github"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300"
                                    aria-label={social}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-1 4v8h8v-2h-6v-6h-2z" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
                        <ul className="space-y-3">
                            {["Features", "Pricing", "Integrations", "Changelog"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white transition-colors duration-300 text-sm text-gray-400">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
                        <ul className="space-y-3">
                            {["About", "Blog", "Careers", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white transition-colors duration-300 text-sm text-gray-400">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} YourSaaS. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-white transition-colors duration-300 text-gray-400">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300 text-gray-400">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
