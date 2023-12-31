// VERY VERY IMP : learn about nested type declaration
// site i learnt it from : https://timmousk.com/blog/typescript-array-of-objects/ & https://bobbyhadz.com/blog/typescript-type-nested-object & https://stackoverflow.com/questions/66751888/typescript-map-array-of-objects-giving-error-property-property-does-not-exi

interface about {
  title:string;
  info: {
    title?:string;
    icons?:{
      name:string;
      url:string;
    }[]
    stage?:string
  }[];
}



const useAbout = () => {

  const aboutData: Array<about> = [
    {
      title: 'skills',
      info: [
        {
          title: 'Full stack  Web Devlopment',
          icons: [
            {
              name: 'HTML5',
              url: '/assets/webdev/html.png'
            },
            {
              name: 'CSS',
              url: '/assets/webdev/css.svg',
            },
            {
              name: 'Javascript',
              url: '/assets/webdev/js.png',
            },
            {
              name: 'TypeScript',
              url: '/assets/webdev/ts.png',
            },
            {
              name: 'React.js',
              url: '/assets/webdev/react.png'
            },
            {
              name: 'Next.js',
              url: '/assets/nextjs/next.png',
            },
            
            {
              name: 'Express.js',
              url: '/assets/webdev/express.svg',
            },
            {
              name: 'Node.js',
              url: '/assets/webdev/node.png',
            },
            {
              name: 'Mongodb',
              url: '/assets/webdev/mongo.svg',
            },
            {
              name: 'MySQL',
              url: '/assets/webdev/MySQL.png',
            },
            {
              name: 'Prisma',
              url: '/assets/nextjs/prisma.svg',
            },
            {
              name: 'SCSS',
              url: '/assets/webdev/scss.png',
            },
            {
              name: 'Tailwind',
              url: '/assets/webdev/tailwind.png',
            },
            {
              name: 'Redux',
              url: '/assets/webdev/redux.png',
            },
            {
              name: 'scoket.io',
              url: '/assets/webdev/socket.png',
            },
            {
              name: 'pusher(web socket)',
              url: '/assets/nextjs/pusher.jpg',
            },
            
            
            {
              name: 'pinecone-Vector-DataBase',
              url: '/assets/webdev/pinecone.svg',
            },
            {
              name: 'llama2 AI',
              url: '/assets/webdev/meta.svg',
            },
            {
              name: 'OpenAI',
              url: '/assets/webdev/OpenAi.png'
            },
            {
              name: 'OAuth',
              url: '/assets/nextjs/auth.png',
            },
          ],
        },
      ]
    },
    {
      title: 'experience',
      info: [
        {
          title: 'Moru Digital Wallet Pvt.ltd',
          stage: '3/9/2023 - present',
        },
        {
          title: 'Next js Developer - self taught',
          stage: '1/10/2022 - present',
        },
        {
          title: 'MERN Stack - self taught',
          stage: '1/9/2022 - present',
        },
      ],
    },
    {
      title: 'credentials',
      info: [
        {
          title: 'Bachelors in Computer Engineering  - Kathford International College, TU university',
          stage: 'July_2023',
        },

      ],
    },
  ];

  return aboutData;
};

export default useAbout;

