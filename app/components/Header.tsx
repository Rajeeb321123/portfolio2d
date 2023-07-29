'use Client';

import Link from 'next/link';

import Socials from './Socials';
import Image from 'next/image';

const Header = () => {
  return (
    <header
      className="
      absolute
      w-full
      flex
      items-center
      px-16
      xl:px-0
      xl:h-[90px]
      "
    >
      <div 
        className='
        container
        mx-auto
        '
      >
        <div 
          className='
          flex
          flex-col 
          lg:flex-row
          justify-between 
          items-center
          gap-y-4
          py-2
          '
        >


        {/* logo */}
        <Link href={'/'} className=' hover:cursor-pointer hover:scale-105'>
          <Image
          className=''
            alt='name'
            src={'/avatar/avatar_name.png'}
            width={300}
            height={48}
            priority={true}
          />
        </Link>
        {/* Socials */}
        <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header