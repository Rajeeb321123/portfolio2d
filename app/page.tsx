// Home page

import ParticlesContainer from "./components/ParticlesContainer";
import ProjectsBtn from "./components/ProjectsBtn";
import Avatar from "./components/Avatar";
import ClientOnly from "./components/ClientOnly";
import Title from "./components/home_components/Title";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (

    <PageTransition>
    <ClientOnly 
      image={'url("/bg/main_bg.gif")'}
      position1="0"
      position2="50"
      >

    <div
      className="
      bg-primary/10.
      h-full
      "
      >
         {/* text */}
        <div 
          className="
          w-full
          h-full
          bg-gradient-to-r.
          from-primary/10.
          via-black/30.
          to-black/10.
          "
          >
          <div 
            className="
            text-center 
            flex 
            flex-col 
            justify-center 
            xl:pt-40 
            xl:text-left 
            h-full 
            container 
            mx-auto
            "
            >
            {/* Title */}
            <Title />
              <ProjectsBtn />
          </div>
        </div>
        {/* images */}
        <div 
          className="
          w-[1000px]
          h-full 
          absolute 
          right-0 
          bottom-0
          pointer-events-none
          "
          >
          {/* particles */}
          <div className="">
            <ParticlesContainer />
          </div>
          {/* avatar image */}
            <Avatar/>
        </div>
      </div>
    </ClientOnly>
    </PageTransition>
  )
}
