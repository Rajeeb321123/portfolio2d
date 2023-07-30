'use client';

import Link from "next/link";
import { 
  RiYoutubeLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div
      className="
      flex
      items-center
      gap-x-5
      text-2xl
      text-black
      border-2
      px-3
      rounded-xl
      border-black
      bg-white/20
      "
    >
      <Link
        href={''} 
        className="
          hover:text-accent
          transtion-all
          duration-300
          hover:cursor-pointer
        "
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={''} 
        className="
          hover:text-accent
          transtion-all
          duration-300
          hover:cursor-pointer
        "
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={''} 
        className="
          hover:text-accent
          transtion-all
          duration-300
          hover:cursor-pointer
        "
      >
        <RiGithubLine />
      </Link>
      <Link
        href={''} 
        className="
          hover:text-accent
          transtion-all
          duration-300
          hover:cursor-pointer
        "
      >
        <RiLinkedinLine />
      </Link>
    </div>
  )
}

export default Socials