'use client';

import {GiMechaMask} from 'react-icons/gi';

const Mecha_Work = () => {
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
      z-0 
      text-black
      "
      >
      <GiMechaMask
        width={260} 
        height={200}
        className="w-full h-full "
        />
    </div>
    </>
  )
}

export default Mecha_Work