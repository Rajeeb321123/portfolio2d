'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

interface AvatarProps{
  page?: string
};

const Avatar:React.FC<AvatarProps> = ({
  page = 'home'
}) => {
    return (
      <motion.div
      variants={fadeIn('up',0.5)}
      initial='hidden'
      animate='show'
      transition={{duration: 1, ease: 'easeInOut'}}
      className={`
        w-[500px]
        h-[420px]
        absolute
        hidden
        lg:block
        lg:bottom-1

        overflow-hidden
        ${page === 'home' ? 'rounded-tl-full lg:right-[-75px]': 'rounded-tr-full lg:left-[-75px]' }
      `}
    >

        <div
          className="
          hidden
          xl:flex
          xl:max-w-none
          xl:relative
          overflow-hidden
          "
        >
          {/* opacity layers */}
          <div
          className={`
          absolute
          h-full
          lg:bg-gradient-to-l
          ${page === 'home' ? 'lg:from-[#04152d]/70': 'lg:from-[#04152d]/50'}
          lg:via-[#04152d]/10
          lg:to-[#04152d00]/0
          w-[50%]
          left-0
          `}
          />
          <div
          className={`
          absolute
          h-full
          lg:bg-gradient-to-r
          ${page === 'home' ? 'lg:from-[#04152d]/50': 'lg:from-[#04152d]/70'}
          lg:via-[#04152d]/10
          lg:to-[#04152d00]/0
          w-[50%]
          right-0
          top-0
          `}
          />
          <div
          className="
          absolute
          w-full
          lg:bg-gradient-to-t
          lg:from-[#04152d]/50
          lg:via-[#04152d]/10
          lg:to-[#04152d00]/0
            h-[50%]
            top-0
            "
            />
          <div
          className="
          absolute
          w-full
          lg:bg-gradient-to-b
          lg:from-[#04152d]/20
          lg:via-[#04152d]/10
          lg:to-[#04152d00]/0
          h-[50%]
          bottom-0
          "
          />

          <Image 
            alt="avatar"       
            src={page === 'home' ? '/avatar/Avatar.png' : '/avatar/Avatar2.png'}
            width={540}
            height={462}
            className="
            translate-z-0  h-full bg-clip-border
            "
            
            />
        </div>
      </motion.div>
    );
  };
  
  export default Avatar;