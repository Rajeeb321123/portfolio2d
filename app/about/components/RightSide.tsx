'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/variants";
import useAbout from "@/app/hooks/useAbout";
import Counter from "./Counter";

const RightSide = () => {
    const [index, setIndex] = useState(0)
    const about = useAbout();
    return (
        <motion.div
            variants={fadeIn('left',0.4)}
            initial='hidden'
            animate='show'
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
                {about.map((item, itemIndex) => {
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
                            onClick={() => setIndex(itemIndex)}
                        >
                            {item.title}
                        </div>
                    )
                })}

                {/* about me title , only shows when screen smaller than xl */}
                <div
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
                    xl:hidden
                    ${index === 5 && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                    `}
                    onClick={() => setIndex(5)}
                >
                    Me
                </div>

            </div>

            {index !== 5 && <div
                className="
                    bg-pink-400/10 
                    py-2 xl:py-6 
                    flex flex-col 
                    gap-y-2 xl:gap-y-4 
                    items-center 
                    xl:items-start 
                    rounded-2xl
                    "
            >
                {about[index].info.map((item, itemsIndex) => {
                    return (
                        <div
                            className="lg:px-5"
                            key={itemsIndex}
                        >
                            {/*title */}
                            <div>
                                {item.title}
                            </div>
                            {index !== 0 && <div className="hidden md:inline">-</div>}
                            <div className="inline whitespace-nowrap">{item.stage}</div>
                            {/* {icons} */}
                            <div
                                className={`
                                grid 
                                grid-cols-4 
                                ${item.icons && 'border-b-2 border-white/30 border-r-2'}`
                                }>

                                {item.icons?.map((icon, iconIndex) => {
                                    return (
                                        <div
                                            key={iconIndex}
                                            className="
                                            col-span-1
                                            border-t-2 
                                            border-l-2  
                                            border-white/30  
                                            px-6 
                                            py-2
                                            group
                                            bg-[linear-gradient(45deg,transparent_25%,black_10%,transparent_75%,transparent_80%)]
                                            bg-[length:250%_250%,100%_100%] 
                                            bg-[position:-100%_0,0_0] 
                                            hover:bg-[position:200%_0,0_0] 
                                            bg-no-repeat 
                                            hover:duration-[1500ms]
                                            "
                                        >
                                            <Image
                                                className=" group-hover:scale-110 bg-white/70 flex max-w-[30px] max-h-[30px] items-center justify-center rounded-xl overflow-hidden "
                                                alt="skillsIcon"
                                                src={icon.url}
                                                width={30}
                                                height={30}
                                            />
                                            <p
                                                className=" 
                                                group-hover:scale-110
                                                text-sm 
                                                text-start
                                                font-light
                                                text-white 
                                                group-hover:text-blue-300
                                                "
                                            >
                                                {icon.name}
                                            </p>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>)
                })}
            </div>}
            {/* about me only shown when screen smaller than xl*/}
            {index === 5 && <div
                className="
                    bg-pink-400/10 
                    py-2 xl:py-6 
                    flex-col 
                    flex
                    gap-y-2 xl:gap-y-4 
                    items-center 
                    xl:items-start 
                    rounded-2xl
                    xl:hidden
                    "
            >
                <div
                    className="lg:px-5"
                >
                    <p
                        className="text-white text-sm text-left ml-1"
                    >
                        I am a software developer who has a passion for learning new technologies and solving challenging problems. I am always eager to expand my skills and knowledge by taking online courses, reading books and blogs and building new projects. I am looking for an opportunity to join a dynamic and innovative team where I can contribute to the development of cutting-edge software solutions and grow as a professional.
                    </p>
                    {/* counter */}
                    <div
                        className="
                        flex justify-start mr-12 ml-1
                        "
                    >
                        <Counter/>
                    </div>
                </div>
            </div>}

        </motion.div>
    )
}

export default RightSide