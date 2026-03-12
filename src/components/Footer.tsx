import React, { useState } from 'react';
import Modal from './Modal';

const Footer: React.FC = () => {
    const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

    return (
        <footer className="py-20 bg-[#F8FAFC] border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-xl font-bold">auto_stories</span>
                        </div>
                        <span className="text-lg font-black tracking-tight text-slate-900 uppercase">EL-HUB VENTURES</span>
                    </a>

                    <nav className="flex items-center gap-8">
                        <button 
                            onClick={() => setActiveModal('privacy')}
                            className="text-sm font-bold text-slate-400 hover:text-primary transition-colors"
                        >
                            Privacy Policy
                        </button>
                        <button 
                            onClick={() => setActiveModal('terms')}
                            className="text-sm font-bold text-slate-400 hover:text-primary transition-colors"
                        >
                            Terms of Service
                        </button>
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
                        © 2026 El-HUB VENTURES. All rights reserved. Created with passion for the entrepreneur community.
                    </p>
                </div>
            </div>

            {/* Legal Modals */}
            <Modal 
                isOpen={activeModal === 'privacy'} 
                onClose={() => setActiveModal(null)} 
                title="Privacy Policy"
            >
                <div className="space-y-4">
                    <p>At **El-HUB VENTURES**, we value your privacy. This policy outlines how we handle your data.</p>
                    <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">1. Data Collection</h4>
                    <p>We only collect information that you voluntarily provide, such as your name and email address when you subscribe to our newsletter or purchase our products.</p>
                    <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">2. Use of Information</h4>
                    <p>Your data is used to deliver the services you requested, provide updates about our books, and improve our business strategies. We never sell your personal information to third parties.</p>
                    <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">3. Security</h4>
                    <p>We implement industry-standard security measures to protect your data from unauthorized access.</p>
                </div>
            </Modal>

            <Modal 
                isOpen={activeModal === 'terms'} 
                onClose={() => setActiveModal(null)} 
                title="Terms of Service"
            >
                <div className="space-y-4">
                    <p>Welcome to **El-HUB VENTURES**. By using our website and purchasing our e-books, you agree to these terms.</p>
                    <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">1. Intellectual Property</h4>
                    <p>All content in "Uncovering the Secrets of Successful Entrepreneurs" is the property of Ndikum Elvis Nkwenti. Unauthorized reproduction or distribution is strictly prohibited.</p>
                    <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">2. Usage License</h4>
                    <p>Purchased books are for individual use only. Shared access or commercial distribution requires explicit written permission from the author.</p>
                    <h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest">3. Refun Policy</h4>
                    <p>Due to the digital nature of our products, all sales are final. If you experience technical issues, please contact our support team at elhubventures@gmail.com.</p>
                </div>
            </Modal>
        </footer>
    );
};

export default Footer;
