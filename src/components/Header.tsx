import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                            <span className="material-symbols-outlined text-2xl font-bold">auto_stories</span>
                        </div>
                        <span className="text-xl font-black tracking-tight text-slate-900 uppercase">EL-HUB VENTURES</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-10">
                        <a href="#about" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">About</a>
                        <a href="#author" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Author</a>
                        <a href="#pricing" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Pricing</a>
                        <a
                            href="https://elhub3.gumroad.com/l/utsose"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-primary/20 transition-all active:scale-95"
                        >
                            Get Your Copy
                        </a>
                    </nav>

                    <button className="md:hidden text-slate-900">
                        <span className="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
