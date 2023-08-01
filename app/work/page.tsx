import ClientOnly from "../components/ClientOnly"
import PageTransition from "../components/PageTransition"
import LeftSideWork from "./components/LeftSideWork"
import Mecha_Work from "./components/Mecha_Work"
import RightSideWork from "./components/RightSideWork"


const Work = () => {
  return (
    <PageTransition>
      <ClientOnly image={'url("/bg/work.gif")'} >

        <Mecha_Work/>
        <div
          className="
          h-[90vh]
          bg-primary/30
          py-32
          text-center
          xl:text-left`
          "
        >
          <div
          className='
          container
          mx-auto
          h-full
          flex
          flex-col
          items-center
          xl:flex-row
          gap-x-6
          '
          >
            <LeftSideWork />
            <RightSideWork />
        </div>


        </div>
      </ClientOnly>
    </PageTransition>
  )
}

export default Work