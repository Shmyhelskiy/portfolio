import styles from "../src/styles/Footer.module.css"
import Image from "next/image";


const Footer = () => {
    const year: Date  = new Date()
    return (
        <footer className="h-12 flex text-gray-400 items-center justify-end bg-slate-600 pr-4 mt-auto">
        <a href="https://www.linkedin.com/in/shmyhelskyi-oleksandr/" target="_blank" className="footer-link">
            <Image src="/linkedin.webp" alt="Linkedin" width={25} height={25}/>
            Linkedin
        </a>
        <a href="https://github.com/Shmyhelskiy" target="_blank" className="footer-link ">
            <Image src="/github.webp" alt="GitHub" width={25} height={25}/>
            GitHub
        </a>
        <a href="https://t.me/Shmyhelskyi_Oleksandr" target="_blank" className="footer-link ">
            <Image src="/Telegram.webp" alt="Telegram" width={25} height={25}/>
            Telegram
        </a>
        <p>{year.getFullYear()}</p>
        </footer>
    );
};

export default Footer;