import ClientOnly from "../components/ClientOnly";
import AboveCredit from "./components/AboveCredit";
import BelowCredit from "./components/BelowCredit";
import Mecha_Credit from "./components/Mecha_Credit";

const Credit = () => {
    return (
      <ClientOnly image={'url("/bg/credit.gif")'} >
         <div
      className='
      h-[90vh]
      '
    >
      <Mecha_Credit/>
      <div
        className="
        container
        mx-auto 
        py-32 
        text-center 
        xl:text-left 
        flex 
        items-center 
        justify-center 
        h-full"
      >
        <div
          className="flex flex-col justify-between gap-10  w-full max-w-[500px]"
        >
          <AboveCredit />
          <BelowCredit />
        </div>
      </div>
      
    </div>
      </ClientOnly>
    );
  };
  
  export default Credit;