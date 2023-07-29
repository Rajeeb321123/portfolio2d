import ClientOnly from "../components/ClientOnly"


const Work = () => {
  return (
    <ClientOnly image={'url("/bg/work.gif")'}>
      <div>Work</div>

    </ClientOnly>
  )
}

export default Work