'use client';


import CountUp from "react-countup";

const Counter = () => {
  return (
    <div>
        <div
            className="
            relative
            flex-1
            after:w-[2px]
            after:h-full
            after:bg-blue-400
            after:absolute
            after:top-0
            after:right-0
            my-5
            "
        >
            <div
                className="
                    text-2xl xl:text-4xl font-extrabold text-accent mb-2 
                "
            >
                <CountUp  start={0} end={12} duration={5}/>+
            </div>
            <div
                className="
                text-xs uppercase tracking-[1px] leading[1.4] max-w-[100px] text-white
                "
            >
                Months of experience
            </div>
        </div>
        <div
            className="
            relative
            flex-1
            after:w-[2px]
            after:h-full
            after:bg-accent
            after:absolute
            after:top-0
            after:right-0
            "
        >
            <div
                className="
                    text-2xl xl:text-4xl font-extrabold text-blue-400 mb-2 
                "
            >
                <CountUp  start={0} end={10} duration={5}/>+
            </div>
            <div
                className="
                text-xs uppercase tracking-[1px] leading[1.4] max-w-[100px] text-white
                "
            >
                Finished Projects
            </div>
        </div>
    </div>
  )
}

export default Counter