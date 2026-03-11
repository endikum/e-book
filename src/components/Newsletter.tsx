import React from 'react';

const Newsletter: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Subtle background ornament */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8">
                    <span className="material-symbols-outlined text-4xl font-black">mail</span>
                </div>
                <h2 className="section-title">Join the Entrepreneur Community</h2>
                <p className="text-slate-500 font-medium mb-12 text-lg">
                    Get design tips, book updates, and exclusive resources delivered straight to your inbox. No spam, just pure inspiration.
                </p>

                <form className="w-full flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary transition-colors font-medium"
                    />
                    <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-lg shadow-primary/20 transition-all active:scale-95">
                        Subscribe
                    </button>
                </form>
                <p className="mt-6 text-xs text-slate-400 font-medium">
                    By subscribing, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a> and receive periodic updates.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
