
import Avatar from '../components/Avatar';
import Circle from '../components/Circle';
import ClientOnly from '../components/ClientOnly';
import PageTransition from '../components/PageTransition';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const About = () => {


  return (
    <PageTransition>

    <ClientOnly image={'url("/bg/about.gif")'} >
      <div
        className='
        h-full
        bg-primary/30
        py-32
        text-center
        xl:text-left
        '
        >
        <Circle />
        <Avatar page='about' />

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
          {/* about data */}
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </ClientOnly>
    </PageTransition>
  );
};

export default About;