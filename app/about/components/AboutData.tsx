'use client';

import { useState } from "react";

import useAbout from "@/app/hooks/useAbout";

const AboutData = () => {
    
    const [index, setIndex] = useState(0)
    const about = useAbout();
    return (
        <>
            <div
                className="
                flex-1 flex flex-col jusity-center
                "
            >
                text
            </div>

            <div
                className="
                flex flex-col w-full xl:max-w-[48%] h-[480px]
                "
            >
                {/* about title of about data */}
                <div 
                    className='
                    flex
                    gap-x-4
                    xl:gap-x-8
                    mx-auto
                    xl:mx-0
                    mb-4
                    '
                >
                    { about.map((item, itemIndex) => {
                    return (
                        <div
                        key={itemIndex}
                        className={`
                        cursor-pointer
                        capitalize
                        xl:text-lg
                        relative
                        after:w-8
                        after:h-[2px]
                        after:bg-white
                        after:absolute
                        after:-bottom-1
                        after:left-0
                        ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                        `}
                        onClick={ () => setIndex(itemIndex) }
                        >
                        {item.title}
                        </div>
                    )
                    })}
                </div>

                <div
                    className="
                    bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start 
                    "
                >
                    {about[index].info.map((item, itemsIndex) => {
                        return (
                        <div
                            key={itemsIndex}
                        >
                            {/*title */}
                            <div>
                                {item.title}
                            </div>
                            <div className="hidden md:flex">-</div>
                            <div className="">{item.stage}</div>
                        </div>)
                    } )}
                </div>

            </div>
        </>
    )
}

export default AboutData