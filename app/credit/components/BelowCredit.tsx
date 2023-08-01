'use client';

'use client';

import { motion } from "framer-motion";

import { fadeIn } from "@/variants";

const BelowCredit = () => {
    return (
        <motion.div 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"        
            className="
            flex 
            flex-col
            text-white
            px-1 shadow-sm 
            shadow-white
            border-white/50 rounded-xl 
            border-2 
            p-3
            bg-[linear-gradient(45deg,transparent_25%,black_10%,transparent_75%,transparent_80%)]
            bg-[length:250%_250%,100%_100%] 
            bg-[position:-100%_0,0_0] 
            hover:bg-[position:200%_0,0_0] 
            hover:duration-[1500ms]
            bg-no-repeat 

            "
        >
            <motion.h2
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                className="
                text-center
                mb-2
                text-2xl  
                md:text-[30px] 
                md:leading-[1.3]  
                font-semibold
  
                "
                >
                <div className=" inline-block">Special </div>&nbsp;
                <div
                    className="
                    inline-block
                    "
                    >
                    Thanks to </div>
                &nbsp;
                <div
                    className="
                    inline-block 
                    "
                    >
                    <div className="">Kirokaze</div>
                </div>
            </motion.h2>
            <motion.h2
                variants={fadeIn('up', 0.9)}
                initial="hidden"
                animate="show"
                className="
                text-center
                mb-2
                text-2xl  
                md:text-[30px] 
                md:leading-[1.3]  
                font-semibold
                "
                >
                <div className=" inline-block">For his </div>&nbsp;
                <div
                    className="
                    inline-block
                    "
                    >
                    arts. His </div>
                &nbsp;
                <a
                    href={'https://kirokazepixel.tumblr.com/'}
                    target="_blank"
                    className=" 
                    inline-block
                    "
                    >
                    <div className=" text-accent">link</div>
                </a>
            </motion.h2>
        </motion.div>
    )
}

export default BelowCredit