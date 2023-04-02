import styles from "../src/styles/Footer.module.css"
import Image from "next/image";


const Footer = () => {
    const year: Date  = new Date()
    return (
        <footer className={styles["wrapper"]}>
        <a href="https://www.linkedin.com/in/shmyhelskyi-oleksandr/"  className={styles["link"]}>
            <Image src="/linkedin.webp" alt="Linkedin" width={25} height={25}/>
            Linkedin
        </a>
        <a href="https://github.com/Shmyhelskiy" className={styles["link"]}>
            <Image src="/github.webp" alt="GitHub" width={25} height={25}/>
             GitHub
        </a>
        <p>{year.getFullYear()}</p>
        </footer>
    );
};

export default Footer;