import React, { useState } from 'react';

const FAQ: React.FC = () => {
    const faqs = [
        {
            q: 'What format is the e-book delivered in?',
            a: 'The book is delivered in high-quality PDF, EPUB, and MOBI formats, compatible with all devices and e-readers.'
        },
        {
            q: 'Is this book suitable for beginners?',
            a: 'Absolutely. We cover everything from the basic entrepreneurial DNA to advanced cross-industry growth strategies.'
        },
        {
            q: 'Do I get lifetime updates?',
            a: "Yes! Any new editions or added materials will be sent directly to your email at no extra cost."
        },
        {
            q: 'How can I contact support?',
            a: 'You can reach out to us at elhubventures@gmail.com for any inquiries or partnership discussions.'
        }
    ];

    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="section-subtitle">Everything you need to know about the book.</p>

                <div className="space-y-4 text-left">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-2xl transition-all duration-300 ${open === idx ? 'border-primary bg-primary/5 shadow-premium' : 'border-slate-100 bg-slate-50'}`}
                        >
                            <button
                                onClick={() => setOpen(open === idx ? null : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left"
                            >
                                <span className={`font-black text-lg ${open === idx ? 'text-primary' : 'text-slate-900'}`}>{faq.q}</span>
                                <span className={`material-symbols-outlined transition-transform duration-300 ${open === idx ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
                                    expand_more
                                </span>
                            </button>
                            {open === idx && (
                                <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
