'use client';

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';



const RightSideWork = () => {
  const WorkSlider = dynamic(() => import('./WorkSlider'), {
    ssr: false,
  });
  return (
    <motion.div
        className="flex  w-full xl:max-w-[48%] h-[480px] rounded-3xl overflow-hidden"
        variants={fadeIn('down',0.6)}
        initial='hidden'
        animate='show'
    >

        <WorkSlider />
    </motion.div>
  )
}

export default RightSideWork