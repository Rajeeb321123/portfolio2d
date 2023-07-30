"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { fadeIn } from "@/variants";

const Title = () => {
  return (
    <>
      <motion.h1
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className="
        md:h1
        h2
        mt-20 
        xl:mt-0  
        rounded-xl  
        py-3 
        xl:w-[70vh]
        bg-[linear-gradient(45deg,transparent_25%,white_10%,transparent_75%,transparent_80%)]
        bg-[length:250%_250%,100%_100%] 
        bg-[position:-100%_0,0_0] bg-no-repeat   
        hover:bg-[position:200%_0,0_0] 
        hover:duration-[1500ms]
        "
      >
        <span className="text-accent">
          Welcome,
          <br /> I&apos;m a{" "}
          <Image
            className="inline"
            alt="job"
            src={"/avatar/profession.png"}
            width={300}
            height={48}
            priority={true}
          />
        </span>
      </motion.h1>
      {/* subtitle */}
      <motion.p
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        animate="show"
        className="
        max-w-sm 
        xl:max-w-xl 
        mx-auto 
        xl:mx-0 
        mb-10 
        xl:mb-16
        "
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
        veritatis alias ea delectus natus ab.
      </motion.p>
    </>
  );
};

export default Title;
