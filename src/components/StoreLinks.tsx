import React from 'react';

const StoreLinks: React.FC = () => {
    return (
        <section className="py-24 bg-[#F8FAFC]" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="section-title">Available on All Major Platforms</h2>
                <p className="section-subtitle">Get your copy in your favorite format today.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <a href="https://elhub3.gumroad.com/l/utsose" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-xl active:scale-95 group">
                        <span className="material-symbols-outlined text-3xl text-primary font-black">shopping_cart</span>
                        Gumroad
                    </a>
                    <a href="https://endikum.selar.com/2kjh" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#06D6A0] text-white px-8 py-5 rounded-2xl font-black text-xl hover:brightness-110 transition-all shadow-xl active:scale-95 group">
                        <span className="material-symbols-outlined text-3xl text-white font-black">flash_on</span>
                        Selar
                    </a>
                    <a href="https://www.amazon.com/dp/B0GS3J5GTL" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#FF9900] text-white px-8 py-5 rounded-2xl font-black text-xl hover:brightness-110 transition-all shadow-xl active:scale-95 group">
                        <span className="material-symbols-outlined text-3xl font-black">book</span>
                        Amazon
                    </a>
                </div>
            </div>
        </section>
    );
};

export default StoreLinks;
