'use client';

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const LeftSideWork = () => {
  return (
    <div
      className=" 
      text-center  
      flex-1 
      xl:w-[30vw] 
      lg:text-left 
      mb-4 xl:mb-0  
      p-2 
      my-2 
      z-10 
      rounded-2xl"
    >
      <motion.h2
        variants={fadeIn('up',0.6)}
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
            Work</div>
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
          <div className="animate-[waveC_2s_ease-in-out_infinite]">

            .
          </div>
        </div>
      </motion.h2>
      <motion.p
        variants={fadeIn('up', 0.4)}
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
        Following projects in the right handside showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        <br />
        <span
          className="text-white font-extrabold p-2 round-xl border bg-pink-400/10 "
        >
        Five of my latest projects. For more go to my GitHub
        </span>
      </motion.p>
    </div>
  );
};

export default LeftSideWork;