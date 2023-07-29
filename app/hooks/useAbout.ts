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
              name: 'Express',
              url: '/assets/webdev/express.svg',
            },
            {
              name: 'Node',
              url: '/assets/webdev/node.png',
            },
            {
              name: 'Mongodb',
              url: '/assets/webdev/mongo.svg',
            },
            {
              name: 'Redux',
              url: '/assets/webdev/redux.png',
            },
            {
              name: 'Tailwind',
              url: '/assets/webdev/tailwind.png',
            },
            {
              name: 'SCSS',
              url: '/assets/webdev/scss.png',
            },
            {
              name: 'Git',
              url: '/assets/webdev/git.png',
            },
          ],
        },
        {
          title: 'Next.js Full Stack Development',
          icons: [
            {
              name: 'Next.js',
              url: '/assets/nextjs/next.png',
            },
            {
              name: 'Auth',
              url: '/assets/nextjs/auth.png',
            },
            {
              name: 'Git',
              url: '/assets/nextjs/prisma.svg',
            },
            {
              name: 'pusher',
              url: '/assets/nextjs/pusher.png',
            },
          ],
        },

      ]
    },
    {
      title: 'experience',
      info: [
        {
          title: 'MERN Stack - self learnt',
          stage: '1/9/2022 - present',
        },
        {
          title: 'Next js Developer - self learnt',
          stage: '1/10/2022 - present',
        },
      ],
    },
    {
      title: 'credentials',
      info: [
        {
          title: 'Bachelors in Computer Engineering  - Kathford Internation College, TU university',
          stage: '2023',
        },

      ],
    },
  ];

  return aboutData;
};

export default useAbout;

