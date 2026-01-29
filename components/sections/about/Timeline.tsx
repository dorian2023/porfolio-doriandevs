"use client";

import { dataAboutPage } from "@/data";
import { FadeIn } from "@/components/animations/FadeIn";

const TimeLine = () => {
    return (
        <section className="relative max-w-4xl mx-auto py-12 px-6">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-terciaro/30 to-transparent -translate-x-1/2" />

            <div className="space-y-16">
                {dataAboutPage.map((data, index) => (
                    <FadeIn
                        key={data.id}
                        direction={index % 2 === 0 ? "right" : "left"}
                        delay={index * 0.1}
                    >
                        <div className={`relative flex items-center justify-between md:justify-normal group ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}>
                            {/* Dot */}
                            <div className="absolute left-2 md:left-1/2 w-4 h-4 rounded-full bg-terciaro border-4 border-[#09070f] shadow-[0_0_10px_rgba(194,4,28,0.5)] -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-150" />

                            {/* Content */}
                            <div className={`w-full md:w-[45%] ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                }`}>
                                <div className="bg-secondary-900/40 border border-white/5 backdrop-blur-md p-6 rounded-3xl group-hover:border-terciaro/30 transition-all shadow-xl">
                                    <span className="inline-block px-3 py-1 rounded-full bg-terciaro/10 text-terciaro text-xs font-bold mb-4 uppercase tracking-wider">
                                        {data.date}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                        {data.title}
                                    </h3>
                                    <h4 className="text-terciaro font-medium mb-4">
                                        {data.subtitle}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}

export default TimeLine;
