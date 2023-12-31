import ClientOnly from "../components/ClientOnly"

import Form from "./components/Form"
import FormHeading from "./components/FormHeading"
import PageTransition from "../components/PageTransition"


const Contact = () => {

  return (
    <PageTransition>
      <ClientOnly image={'url("/bg/contact.gif")'}>
      <div
        className='
        h-[90vh]
        '
        >
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
            className="flex flex-col w-full max-w-[700px]"
            >
            {/* formHeading */}
            <FormHeading />
            {/* FORM */}
            <Form />
          </div>
        </div>
        
      </div>
      </ClientOnly>
    </PageTransition>
  )
}

export default Contact