import React from 'react';

const About: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="flex flex-col gap-6">
                        <div className="w-16 h-1 w-16 bg-primary rounded-full"></div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What's Inside</h2>
                        <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>In this book, Ndikum Elvis Nkwenti explores the secrets of some of the world's most successful business minds, sharing their stories, strategies, and insights to help you build a thriving enterprise.</p>
                            <p>The principles are drawn from deep research, in-depth studies, divine inspiration, and the hard-won wisdom acquired from his role as CEO of **El-Hub Ventures**.</p>
                            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">psychology</span>
                                    </div>
                                    <span className="font-bold text-slate-900 dark:text-slate-100">Mindset Shift</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">trending_up</span>
                                    </div>
                                    <span className="font-bold text-slate-900 dark:text-slate-100">Growth Tools</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                            <span className="material-symbols-outlined">workspace_premium</span>
                            Key Takeaways
                        </h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <span className="text-primary font-bold text-lg italic mt-1">01</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-slate-100">Entrepreneurial DNA</h4>
                                    <p className="text-slate-500 text-sm">Persistence, creativity, and calculated risk-taking.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-primary font-bold text-lg italic mt-1">02</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-slate-100">Cross-Industry Strategies</h4>
                                    <p className="text-slate-500 text-sm">Insights from tech, finance, healthcare, and retail.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-primary font-bold text-lg italic mt-1">03</span>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-slate-100">Failure Optimization</h4>
                                    <p className="text-slate-500 text-sm">Learning from setbacks to achieve ultimate goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
