// hooks just to return routes for icons shown like in DesktopSidebar

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { 
    HiHome,
    HiUser,
    HiRectangleGroup,
    HiEnvelope,
    HiOutlineCreditCard
} from 'react-icons/hi2';




const useRoutes = () => {
    // getting the current pathname
    const pathname = usePathname();
    
    const routes = useMemo(() => [
        {
            label:'Home',
            icon: HiHome ,
            path: '/',
            active: pathname === '/' 
        },
        {
            label:'About',
            icon: HiUser ,
            path: '/about',
            active: pathname === '/about' 
        },
        {
            label:'Services',
            icon: HiRectangleGroup ,
            path: '/services',
            active: pathname === '/services' 
        },
        {
            label:'Contact',
            icon: HiEnvelope,
            path: '/contact',
            active: pathname === '/contact' 
        },
        {
            label:'Credit',
            icon: HiOutlineCreditCard,
            path: '/credit',
            active: pathname === '/credit' 
        },
   
    ],[pathname]);

    return routes;
}

export default useRoutes;
