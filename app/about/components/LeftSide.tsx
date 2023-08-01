'use client';

import { motion } from "framer-motion";

import { fadeIn } from "@/variants";
import Counter from "./Counter";


const LeftSide = () => {
    return (
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
            <motion.h2
                variants={fadeIn('right',0.2)}
                initial='hidden'
                animate='show'
                className="
                    text-2xl  
                    md:text-[30px] 
                    md:leading-[1.3]  
                    font-semibold
                    
                "
            >
                <div className=" inline-block">My</div>&nbsp;
                <div 
                    className="
                    text-accent 
                    animate-[waveC_2s_ease-in-out_4] 
                    inline-block border-2 
                    border-accent/20 rounded-xl 
                    px-1 shadow-sm 
                    shadow-accent
                    "
                >
                    Web</div>
                &nbsp;
                <div className="inline-block">Development&nbsp;</div>
                <div 
                    className="
                    text-blue-400 
                    animate-[waveC_2s_ease-in-out_4] 
                    inline-block border-2 
                    border-blue-400 
                    shadow-sm 
                    rounded-2xl 
                    px-1 
                    shadow-blue-400
                    "
                >
                    Journey
                </div>
            </motion.h2>
            <motion.p
                variants={fadeIn('right',0.4)}
                initial='hidden'
                animate='show'
                className="
                    hidden
                    xl:block
                    max-w-[500px]
                    xl:mx-0
                    mb-6
                    xl:mb-2
                    px-2
                    xl:px-0
                    text-white
                    "
            >
                I am a software developer who has a passion for learning new technologies and solving challenging problems. I am always eager to expand my skills and knowledge by taking online courses, reading books and blogs and building new projects. I am looking for an opportunity to join a dynamic and innovative team where I can contribute to the development of cutting-edge software solutions and grow as a professional.
            </motion.p>

            {/* counter */}
            <motion.div
                variants={fadeIn('right',0.6)}
                initial='hidden'
                animate='show'
                className="
                hidden xl:flex xl:justify-end mr-12
                "
            >
            <Counter/>
            </motion.div>

        </div>
    )
}

export default LeftSide