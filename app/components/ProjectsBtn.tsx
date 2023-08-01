'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import { fadeIn } from "@/variants";

const ProjectsBtn = () => {

  // onHover on MY projects
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (

    <motion.div
      variants={fadeIn('down', 0.4)}
      initial="hidden"
      animate="show"
      className=" justify-center relative flex lg:justify-start items-end z-30"
    >
      <div 
        className="mx-auto xl:mx-0"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
        <Link 
          href={'/work'}
          className="
          relative
          w-[200px]
            h-[200px]
            flex
            justify-center
            items-center
            group
            cursor-pointer
            "
            >
          <Image 
            src={'/circle-star.svg'}
            alt="myProjects"
            fill
            className="
            w-full
            h-full
            max-w-full
            max-h-full
            animate-spin-slow
            "
            />
          <Image 
            src={'/My_Project_Img.gif'}
            alt="myProjects"
            width={150}
            height={150}
            className="
              w-full
              h-full
              max-w-[180px]
              max-h-[180px]
              opacity-90
              group-hover:opacity-100
              "
              />
          <Image 
            alt=""
            src={`${isHovering ? '/My_Project_Text_Hover1.png' : '/My_Project_Text.png' }`}
            width={100}
            height={100}
            className=" absolute  top-[-25px] w-full h-full max-w-[150px] max-h-[50px]"
            />

          

    
            {/* <HiArrowRight className="absolute text-4xl  group-hover:translate-x-2 group-hover:text-[#c43544] transition-all duration-300"/> */}
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectsBtn