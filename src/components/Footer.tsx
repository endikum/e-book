import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-20 bg-[#F8FAFC] border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-xl font-bold">auto_stories</span>
                        </div>
                        <span className="text-lg font-black tracking-tight text-slate-900 uppercase">EL-HUB VENTURES</span>
                    </div>

                    <nav className="flex items-center gap-8">
                        <a href="#" className="text-sm font-bold text-slate-400 hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="text-sm font-bold text-slate-400 hover:text-primary transition-colors">Terms of Service</a>
                        <a href="mailto:elhubventures@gmail.com" className="text-sm font-bold text-slate-400 hover:text-primary transition-colors">Contact</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary transition-all shadow-sm">
                            <span className="material-symbols-outlined text-lg font-bold">public</span>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary transition-all shadow-sm">
                            <span className="material-symbols-outlined text-lg font-bold">share</span>
                        </a>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-200/50 text-center">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        © 2024 El-HUB VENTURES. All rights reserved. Created with passion for the entrepreneur community.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
