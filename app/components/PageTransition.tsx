'use client';

// used as wrapper 


import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';

import Transition from "./Transition";


interface PageTransitionProps {
    children: React.ReactNode;
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {

    const pathname = usePathname();
    return (
        <>
            <AnimatePresence mode='wait'>
                <motion.div key={pathname} className="h-full">
                    <Transition />
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default PageTransition;