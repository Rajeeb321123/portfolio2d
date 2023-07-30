'use client';

// for transitioning between pages


import {motion} from 'framer-motion';
import Image from 'next/image';

const transitionVariant = {
  initial: {
    x:"50%"
  },
  animate: {
    x:"200%"
  },

}
const transitionVariant2 = {
  initial: {
    x:"0%"
  },
  animate: {
    x:"-200%"
  },

}
const transitionVariant3 = {
  initial: {
    y:"100%",
    height:"100%"
  },
  animate: {
    y:"0%",
    height:"100%"
  },

}

const Transition = () => {
  return (
      <>
      {/* 1 */}
      <motion.div
        className='
        fixed
        bottom-full
        right-0
        w-screen
        z-30 

        
        '
        variants={transitionVariant3}
        initial="initial"
        animate="animate"
        transition={{
          delay: 0.2,
          duration: 0.6, 
          ease:'easeInOut'
        }}
      >
         <Image
          alt='rightdoor'
          src='/bg/door.jpg'

          fill
          className='max-h-[100vh] max-w-[110vw]'
        />
      </motion.div>
      <motion.div
        className='
        absolute
        left-0
        top-0
        bottom-0
        right-0
        z-20 
        
        
        '
        variants={transitionVariant}
        initial="initial"
        animate="animate"
        transition={{
          delay: 0.6,
          duration: 0.6, 
          ease:'easeInOut'
        }}
      >
        <Image
          alt='rightdoor'
          src='/bg/rightdoor.jpg'

          fill
          className='max-h-[100vh] max-w-[50vw]'
        />
      </motion.div>
      <motion.div
        className='
        absolute
        left-0
        top-0
        bottom-0
        right-0
        z-20 
        
        '
        variants={transitionVariant2}
        initial="initial"
        animate="animate"
        transition={{
          delay: 0.6,
          duration: 0.6, 
          ease:'easeInOut'
        }}
      >
         <Image
          alt='rightdoor'
          src='/bg/leftdoor.jpg'

          fill
          className='max-h-[100vh] max-w-[50vw]'
        />
      </motion.div>
      
      {/* 2 */}
      {/* <motion.div
        className='
        fixed 
        top-0 
        bottom-0 
        right-full 
        h-screen 
        z-20 
        bg-[#3b2d71]
        '
        variants={transitionVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.4,
          duration: 0.6, 
          ease:'easeInOut'
        }}
      >
      </motion.div> */}
      {/*3 */}
      {/* <motion.div
        className='
        fixed 
        top-0 
        bottom-0 
        right-full 
        h-screen 
        z-10 
        bg-[#4b3792]
        '
        variants={transitionVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.6,
          duration: 0.6, 
          ease:'easeInOut'
        }}
      >
      </motion.div> */}
   </>
  )
}

export default Transition;