'use client';

import { useState } from "react";

import useAbout from "@/app/hooks/useAbout";
import Image from "next/image";

const AboutData = () => {
    
    const [index, setIndex] = useState(0)
    const about = useAbout();
    return (
        <>
            <div
                className="
                flex-1
                p-2 
                flex-col 
                jusity-center 
                my-2 
                z-10 
                rounded-2xl
                
                "
            >
                <h2 
                    className="
                    text-2xl  
                    md:text-[30px] 
                    md:leading-[1.3]  
                    font-semibold
                    
                    "
                >
                    <div className=" inline-block">My</div>&nbsp;
                    <div className="text-accent animate-[waveC_2s_ease-in-out_2] inline-block border-2  border-accent/20 rounded-xl px-1 shadow-sm shadow-accent">Web</div>
                    &nbsp;
                    <div className="inline-block">Development&nbsp;</div> 
                    <div className="text-blue-400 animate-[waveC_2s_ease-in-out_2] inline-block border-2 border-blue-400 shadow-sm rounded-2xl px-1 shadow-blue-400">Journey</div>
                </h2>
                <p 
                    className="
                    hidden
                    xl:block
                    max-w-[500px]
                    xl:mx-0
                    mb-6
                    xl:mb-2
                    px-2
                    xl:px-0
                    "
                >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus et assumenda doloribus suscipit ea fugiat, facilis corrupti commodi ipsa enim magni architecto accusamus laborum corporis esse magnam placeat sed expedita? Voluptatibus officiis ad cupiditate.
                </p>
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
                    onClick={ () => setIndex(5) }
                    >
                    About me
                    </div>

                </div>

                { index !== 5 && <div
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
                                            bg-no-repeat 
                                            hover:bg-[position:200%_0,0_0] 
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
                { index === 5 && <div
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
                        <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus et assumenda doloribus suscipit ea fugiat, facilis corrupti commodi ipsa enim magni architecto accusamus laborum corporis esse magnam placeat sed expedita? Voluptatibus officiis ad cupiditate.
                        </div>
                    </div>
                </div>}

            </div>
        </>
    )
}

export default AboutData