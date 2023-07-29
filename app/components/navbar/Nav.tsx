'use client';

import useRoutes from "../../hooks/useRoutes";
import NavItem from "./NavItem";

const Nav = () => {
    const routes = useRoutes();

    return (
        <nav
            className="
                flex 
                flex-col
                items-center
                xl:justify-center
                gap-y-4
                fixed
                h-max
                bottom-0
                z-50
                mt-auto
                top-0
                w-full
                xl:max-w-md
                xl:w-14
                xl:h-screen
                xl:right-[2%]
            "
        >
            <div
                className="
                    flex 
                    w-full 
                    items-center 
                    justify-between
                    md:px-40
                    h-[70px]
                    xl:bg-[#3D3D3D].
                    backdrop-blur-sm
                    text-3xl
                    xl:text-xl
                    xl:rounded-full
                    xl:px-0
                    group/wholeNav
                    xl:h-max
                    xl:flex-col 
                    relative
                    bg-gradient-to-b
                    from-primary/30
                    via-black/70
                    to-black/30
                "
            >
                {routes.map((item) => (
                    <NavItem
                        key={item.label}
                        href={item.path}
                        icon={item.icon}
                        label={item.label}
                        active={item.active}
                    />
                ))}
            </div>
        </nav>
    )
}

export default Nav