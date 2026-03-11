import React from 'react';
import authorImg from '../assets/author.jpg';

const Author: React.FC = () => {
    return (
        <section className="py-24 bg-white" id="author">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
                    <div className="w-full md:w-[45%] lg:w-[40%] group">
                        <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-premium relative bg-slate-100 border-8 border-slate-50">
                            <img
                                src={authorImg}
                                alt="Ndikum Elvis Nkwenti"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
                        <div>
                            <span className="section-tag">The Author</span>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Meet Ndikum Elvis Nkwenti</h2>
                            <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed">
                                <p>
                                    Author, Digital Strategist, and CEO of <span className="text-primary font-bold">El-HUB VENTURES</span>. Elvis combines a foundation in cybersecurity and AI with a sharp eye for business excellence.
                                </p>
                                <p>
                                    Ndikum Elvis Nkwenti is a Senior Business Strategist with over 12 years of experience building products for millions of users worldwide. Having worked at the forefront of digital innovation, he now mentors the next generation of entrepreneurs.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-4">
                            <a
                                href="https://www.ubirtai.site/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-black text-primary hover:text-primary/80 transition-colors"
                            >
                                <span className="material-symbols-outlined text-2xl font-bold">language</span>
                                Visit Website
                            </a>
                            <a
                                href="https://www.linkedin.com/in/elvis-nkwenti-n-452100121/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-black text-slate-900 hover:text-primary transition-colors"
                            >
                                <span className="material-symbols-outlined text-2xl font-bold">account_circle</span>
                                LinkedIn
                            </a>
                            <a
                                href="https://www.fiverr.com/endikum"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 font-black text-[#1DBF73] hover:opacity-80 transition-all"
                            >
                                <span className="material-symbols-outlined text-2xl font-bold">work</span>
                                Fiverr
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Author;
