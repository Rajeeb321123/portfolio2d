'use client';

import Image from "next/image";

// const DarkTheme = () => {
//   return (
//     <style jsx global>
//       {`
//         body {
//           background: black;
//        }
//       `}
//     </style>
//   );
// };

const TopLeftImage = () => {
  return (
    <div 
      className="
        absolute
        left-0
        top-0
        z-[60]
        pointer-events-none
        w-[200px]
        xl:w-[400px]
        rotate-180
        opacity-90
      "
    >
      <Image 
        src='/top-left-img.gif'
        width={400}
        height={400}
        alt="topleft"
      />
    </div>
  )
}

export default TopLeftImage