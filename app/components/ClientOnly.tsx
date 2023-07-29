'use client';

// used as wrapper to delay mount of dom 
// for solving  error framer motion for  next js 13  as dom donot wait unitil the animation due to experimentel app folder in next js 13

import { useState, useEffect, useMemo } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
  image: string;
  position1?: string;
  position2?: string;
}

const BgTheme = ({ image, position1, position2 }: { image: string, position1: string, position2: string, }) => {
  return (
    <style jsx global>
      {`
        body {
          background-image: ${image};
          background-position: ${position1}% ${position2}%;
          pointer-events: auto;
       }
      `}
    </style>
  );
};

const ClientOnly: React.FC<ClientOnlyProps> = ({ children, image, position1 = '50', position2 = '50' }) => {

  const [hasMounted, setHasMounted] = useState(false);

  // for dynamically setting the background postion w.r.t mouse postion
  const [bgPostion1, setBgPostion1] = useState(position1);

  // querySelector with .classname grab all the elememt with parallax className and put them in array of nodelist: we may maynot use it later on
  // to grab the body css class use: const body = docucment.body;

  // setting p1 as fixed value of bg position we already set in page.tsx so it can use later on
  // we dont need p2 here 
  const p1 = parseInt(position1);

  // x1 is just for placeholder var so we can compare and calculate later on , very imp for project
  let x1:number;

  // mouse position
  let xValue:number = 0, yValue:number = 0;

  // for handling mouse mov
  const handleMouseMove = (e:MouseEvent) => {
    const event = e as MouseEvent

    // if we have set background position 0% 50%, it isnot ideal way as usecase isont flexible enough , but as we setting p1 as 0 or 50 it works fine for our project
    if(p1 !== 0){
      // initializing x and y value w.r.t center of screen
      xValue = event.clientX - window.innerWidth/2;
      yValue = event.clientY - window.innerHeight/2;
    }
    else{
      // initializing x and y value of mouse to top left corner of screen 
      xValue = event.clientX;
      yValue = event.clientY;
    }
    
    // if ( x1 which is going to set as bgpostion1), if x1 or bgposition1 within 0 to 100
    if((x1 > 0 && x1 < 100) || x1 === undefined ){

      x1 = p1 + xValue/10
    }

    //if x1 or bgposition1  not within 0 to 100
    if(x1 <= 0 || x1 >= 100 ) {
      if(x1<= 0){
        x1 = 0.00001;
      }
      if(x1 >= 100){
        x1 = 99.999;
      }
    }

    
    setBgPostion1(x1.toString(10))
    // setPo2(x1.toString(10))
    console.log(x1)

    // for each of nodelist array

  }

  useEffect(()=> {


      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        
        window.removeEventListener("mousemove", handleMouseMove);
      }

  },[xValue, yValue])

  useEffect(() => {

    if(hasMounted === false)
    {let timer1 = setTimeout(() => setHasMounted(true), 783);

    

    return () => {
      clearTimeout(timer1);
    }}

  }, []);

  if (!hasMounted) {
    return null;
  }


  return (
    <>
      <BgTheme
        image={image}
        position1={bgPostion1}
        position2={position2}
      />
        {children}
    </>
  )
}

export default ClientOnly