import React from 'react';

const Testimonials: React.FC = () => {
    const reviews = [
        {
            name: 'Sandra Jenkins',
            role: 'Tech Entrepreneur',
            text: 'The book completely changed my approach to building products. The chapter on failure optimization is a game-changer.',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sandra'
        },
        {
            name: 'Marcus Chris',
            role: 'Serial Founder',
            text: "The roadmap provided here is so practical. Ndikum doesn't just show you what works, he explains the 'why' behind every decision.",
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus'
        },
        {
            name: 'Amara K.',
            role: 'Retail Business Owner',
            text: "Finishing this book felt like a masterclass. It's a must-have for any ambitious leader looking to scale.",
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amara'
        }
    ];

    return (
        <section className="py-24 bg-[#F8FAFC]" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="section-title">What Readers Are Saying</h2>
                <p className="section-subtitle">
                    Join thousands of entrepreneurs who have transformed their careers with this guide.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-card flex flex-col gap-6">
                            <div className="flex gap-1 text-primary">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                            </div>
                            <p className="text-slate-600 font-medium leading-relaxed italic">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-black text-slate-900">{review.name}</p>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
