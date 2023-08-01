'use client';

import { motion } from "framer-motion";

import { fadeIn } from "@/variants";

const FormHeading = () => {
    return (
        <motion.h2
            variants={fadeIn('up', 0.2)}
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
            <div className=" inline-block">Get in</div>&nbsp;
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
                Touch</div>
            &nbsp;
            <div
                className="
                text-blue-400 
                inline-block border-2 
                border-blue-400 
                shadow-sm 
                rounded-2xl 
                px-1 
                shadow-blue-400
                "
            >
                <div className="animate-[waveC_2s_ease-in-out_infinite]">.</div>
            </div>
        </motion.h2>
    )
}

export default FormHeading