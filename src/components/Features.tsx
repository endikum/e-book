import React from 'react';

const Features: React.FC = () => {
    const cards = [
        {
            icon: 'psychology',
            title: 'Entrepreneurial DNA',
            description: 'Persistence, creativity, and calculated risk-taking. Learn the core pillars that define successful minds.'
        },
        {
            icon: 'hub',
            title: 'Cross-Industry Strategies',
            description: 'Insights from tech, finance, healthcare, and retail. Adapted workflows that work across any enterprise.'
        },
        {
            icon: 'trending_up',
            title: 'Failure Optimization',
            description: 'Strategic advice on how to build resilience and turn every setback into a stepping stone for growth.'
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFC]" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="section-title">What's Inside the Book</h2>
                <p className="section-subtitle">
                    Modern and aesthetic. Learn the systems and workflows used by world-class entrepreneurs to build scalable, beautiful enterprises.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-card hover:shadow-premium transition-all duration-300 text-left group">
                            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl font-bold">{card.icon}</span>
                            </div>
                            <h3 className="text-xl font-black text-slate-900 mb-4">{card.title}</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
