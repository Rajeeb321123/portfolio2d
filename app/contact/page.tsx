import ClientOnly from "../components/ClientOnly"


const Contact = () => {

  return (
    <ClientOnly image={'url("/bg/contact.gif")'}>
    <div>Contact</div>
    </ClientOnly>
  )
}

export default Contact