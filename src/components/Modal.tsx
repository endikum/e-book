import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{title}</h3>
                    <button 
                        onClick={onClose}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white border border-transparent hover:border-slate-200 transition-all"
                    >
                        <span className="material-symbols-outlined font-bold">close</span>
                    </button>
                </div>
                <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
                        {children}
                    </div>
                </div>
                <div className="px-8 py-6 border-t border-slate-100 bg-slate-50/50 flex justify-end">
                    <button 
                        onClick={onClose}
                        className="bg-primary text-white px-8 py-3 rounded-xl font-black text-sm shadow-md shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
                    >
                        I Understand
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
