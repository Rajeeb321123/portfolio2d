'use client';

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import WorkSlider from "./WorkSlider";



const RightSideWork = () => {

  return (
    <motion.div
        className="flex  w-full xl:max-w-[48%] h-[480px] rounded-3xl overflow-hidden shadow-sm shadow-white "
        variants={fadeIn('down',0.6)}
        initial='hidden'
        animate='show'
    >

        <WorkSlider />
    </motion.div>
  )
}

export default RightSideWork