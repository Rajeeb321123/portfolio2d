'use client';

import ClientOnly from "../components/ClientOnly"
import PageTransition from "../components/PageTransition";

// export const serviceData = [
// {
//     tilte: ' Full Stack Web Development',
// },
// {
//     tilte: 'FrontEnd Developer',
// },
// {
//     tilte: 'BackEnd Development',
// },
// ]

const Services = () => {
    return (
        <PageTransition>

        <ClientOnly image={'url("/bg/skills.gif")'} >
        <div>Services</div>
        </ClientOnly>
        </PageTransition>
    );
};
  
export default Services;