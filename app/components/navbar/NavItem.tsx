'useclient';

import clsx from "clsx";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  active?: boolean;
};


const NavItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  href,
  active
}) => {
  return (

    <div
      className={clsx(`
      cursor-pointer
      h-full 
      w-full
      xl:ml-5
      xl:mb-1
      py-[10px] 
      xl:hover:translate-x-[0.4rem]
      group-hover/wholeNav:animate-none
      `,
      label === 'Home' && 'xl:animate-[wave1_2s_ease-in-out_infinite]  xl:bg-[#d1c49f] xl:rounded-t-full border-2 xl:border-b border-white/20 xl:shadow-sm xl:shadow-[#d1c49f] ',
      label === 'About' && 'xl:animate-[wave2_2s_ease-in-out_infinite] xl:bg-[#2f2e25] border-2 xl:border-t xl:border-b border-white/20 xl:shadow-sm xl:shadow-[#2f2e25]',
      label === 'Work' && 'xl:animate-[wave3_2s_ease-in-out_infinite] xl:bg-[#909b90] border-2 xl:border-t xl:border-b border-white/20 xl:shadow-sm xl:shadow-[#909b90]',
      label === 'Contact' && 'xl:animate-[wave4_2s_ease-in-out_infinite] xl:bg-[#978163] border-2 xl:border-t xl:border-b border-white/20 xl:shadow-sm xl:shadow-[#978163]',
      label === 'Credit' && 'xl:animate-[wave5_2s_ease-in-out_infinite] xl:bg-[#94b977] xl:rounded-b-full border-2 xl:border-t border-white/20 xl:shadow-sm xl:shadow-[#94b977]',
      active && ' '
      )}
    >
      <Link
        title={label}
        href={href}
        className={clsx(`
          group
          flex
          gap-x-3
          rounded-md
          p-3
          transition-all
          duration-300
          text-sm
          items-center
          justify-center
          leading-6
          font-semibold
          text-white
          hover:text-[#c43544]
          cursor-pointer
          group
          `,
        )}
      >

        {/* toolTip */}
        <div
          className="
            absolute pr-14 right-0 hidden xl:group-hover:flex
          "
        >
          <div
            className="
              bg-white
              relative
              flex 
              text-primary
              items-center
              p-[6px]
              rounded-[3px]
            "
          >
            <div className="text-[12px] leading-none font-semibold capitalize">
              {label}
            </div>
            {/* triangle of tooltip */}
            <div
              className="
                border-solid
                border-l-white
                border-l-8
                border-y-transparent
                border-y-[6px]
                border-r-0
                absolute
                -right-2
              "
            >

            </div>
          </div>
        </div>

        <Icon className={clsx(" h-6 w-6 shrink-0 ", active && 'text-[#c43544]')} />
        {/* sr only make it visible in only server side rendering */}
        <span className="font-pixel text-xl sr-only ">{label}</span>
      </Link>

    </div>
  )
}

export default NavItem;