import Link from "next/link";
import ThemeButton from "./ThemeButton";

const Nav = () => {  
    return (
        <div className="flex w-full">
            <div className="flex items-center ml-5 gap-2 text-xs md:text-base lg:text-lg w-2/3">
                <Link href="/" className="p-5 hover:text-blue-400 hover:scale-125">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
                <Link href="/projects" className="p-5 hover:text-blue-400 hover:scale-125">Projects</Link>
            </div>
            <div className="flex items-center justify-end mr-10 gap-2 text-xs md:text-base lg:text-lg w-1/3">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    );
};

export default Nav;