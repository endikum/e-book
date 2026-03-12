import React from 'react';
import coverImg from '../assets/cover.jpg';
import backCoverImg from '../assets/back_cover.jpg';

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-white">
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8 text-center lg:text-left">
                        <div>
                            <span className="section-tag">New Release</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 mb-6">
                                Master the Art of <span className="text-primary">Successful Entrepreneurship</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                What does it take to build a thriving business? Explore the strategies, secrets, and hard-won wisdom of the world's most successful minds in this definitive guide.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#pricing" className="btn-primary flex items-center justify-center gap-2">
                                Get Your Copy Now
                            </a>
                            <a 
                                href="https://wa.me/2348160012799" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-secondary flex items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-xl">download</span>
                                Download Free Preview
                            </a>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                                            alt="User avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-bold text-slate-600">
                                Joined by <span className="text-primary">10,000+</span> entrepreneurs
                            </p>
                        </div>
                    </div>

                    {/* 3D Book Visualization */}
                    <div className="relative flex justify-center py-10 lg:py-0 scale-90 lg:scale-100">
                        <div className="book-container w-full max-w-[360px] aspect-[1/1.4]">
                            <div className="book-inner">
                                {/* Front Cover */}
                                <div className="book-front bg-slate-100 border border-slate-200">
                                    <img src={coverImg} alt="Book Front Cover" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
                                </div>
                                {/* Back Cover */}
                                <div className="book-back bg-slate-900 border border-slate-800">
                                    <img src={backCoverImg} alt="Book Back Cover" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Perspective Shadows */}
                            <div className="absolute top-1/2 -left-12 w-24 h-[110%] bg-black/10 blur-2xl -rotate-12 -z-10 origin-right"></div>

                            {/* Interaction Hint */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2 whitespace-nowrap bg-slate-50 px-4 py-2 rounded-full border border-slate-100 italic">
                                <span className="material-symbols-outlined text-sm animate-spin-slow">autorenew</span>
                                Hover to reveal back cover
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
