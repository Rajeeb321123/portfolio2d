'use client';

import ClientOnly from "../components/ClientOnly"

export const serviceData = [
{
    tilte: ' Full Stack Web Development',
},
{
    tilte: 'FrontEnd Developer',
},
{
    tilte: 'BackEnd Development',
},
]

const Services = () => {
    return (
        <ClientOnly image={'url("/bg/skills.gif")'} >
        <div>Services</div>
        </ClientOnly>
    );
};
  
export default Services;