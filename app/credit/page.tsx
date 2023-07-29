import ClientOnly from "../components/ClientOnly";

const Credit = () => {
    return (
      <ClientOnly image={'url("/bg/credit.gif")'} >
        <div>About</div>
      </ClientOnly>
    );
  };
  
  export default Credit;