import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-left max-w-2xl">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                            Ready to transform your business skills?
                        </h2>
                        <p className="text-white/80 text-lg font-medium">
                            Join thousands of aspiring leaders who are scaling their enterprises today.
                        </p>
                    </div>
                    <button className="whitespace-nowrap bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all active:scale-95">
                        Download Free Preview
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
