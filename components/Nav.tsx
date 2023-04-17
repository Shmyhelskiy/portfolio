import Link from "next/link";
import ThemeButton from "./ThemeButton";
import { useState } from "react";
import Xmark from "./icons/X-mark";
import Bars from "./icons/Bars";

const Nav = () => {  
    const [isOpen, setisOpen] = useState(false);

    const handleClick = () =>{
        setisOpen(!isOpen)
    }

    return (
        <div className="flex w-full relative">

            <button className="flex flex-col ml-5 w-2/3 md:hidden" onClick={handleClick}>
            {!isOpen ? <Bars className="w-6 h-6 "/> : <Xmark className="w-6 h-6"/>}
            </button>

            <div className="hidden md:flex items-center ml-5 gap-2 text-xs md:text-base lg:text-lg w-2/3">
                <Link href="/" className="p-5 hover:text-blue-400 hover:scale-125">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
                <Link href="/projects" className="p-5 hover:text-blue-400 hover:scale-125">Projects</Link>
            </div>
            { isOpen ?
                <div className="min-w-[50%] min-h-[50%] rounded-lg backdrop-blur-md py-32 text-lg md:hidden bg-sky-800/90 dark:bg-sky-800/90 z-30 flex flex-col items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link href="/" className="p-5 hover:text-blue-400 hover:scale-125" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
                <Link href="/projects" className="p-5 hover:text-blue-400 hover:scale-125" onClick={handleClick}>Projects</Link>
            </div>
                : null
            }

            <div className="flex items-center justify-end mr-10 gap-2 text-xs md:text-base lg:text-lg w-1/3">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    );
};

export default Nav;