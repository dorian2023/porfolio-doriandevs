import CountUp from "react-countup";

import { dataCounter } from "@/data";

const CounterServices = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto py-12 px-6">
            {dataCounter.map(({ id, endCounter, text }) => (
                <div key={id} className="relative group p-6 rounded-3xl bg-secondary-900/40 border border-white/5 backdrop-blur-md hover:border-terciaro/30 transition-all overflow-hidden shadow-2xl">
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-terciaro/5 rounded-full blur-3xl group-hover:bg-terciaro/20 transition-colors" />

                    <div className="relative z-10 space-y-2 text-center md:text-left">
                        <p className="text-3xl md:text-5xl font-extrabold text-white flex items-center justify-center md:justify-start gap-1">
                            <CountUp end={endCounter} start={0} duration={3} />
                            <span className="text-terciaro">+</span>
                        </p>
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
                            {text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CounterServices;
