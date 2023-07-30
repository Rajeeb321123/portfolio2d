'use client';

import {GiMechaHead} from 'react-icons/gi';
import {motion} from 'framer-motion';

import { fadeIn } from '@/variants';
const Circle = () => {
  return (
    <>
    <div 
      className="
      w-[200px]
      xl:w-[300px] 
      absolute 
      lg:-right-2 
      lg:-bottom-2  
      -right-20
      -bottom-10
      animate-[pulse_5s_ease-in-out_infinite]
      z-[10] 
      "
      >
      <GiMechaHead
        width={260} 
        height={200}
        className="w-full h-full "
        />
    </div>
    </>
  )
}

export default Circle