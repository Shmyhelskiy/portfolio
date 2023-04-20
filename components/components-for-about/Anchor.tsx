import { FC } from "react";
import Link from 'next/link';

type AnchorType = {
    link: string,
    text: string,
}

const Anchor:FC<AnchorType> = ({link, text}) => {
    return (
        <li className="m-5 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2 md:w-5 md:h-5 lg:w-6 lg:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            <Link href={link} legacyBehavior >
                <a className='text-sm md:text-lg lg:text-3xl'>{text}</a>
            </Link>
        </li>

    );
};

export default Anchor;