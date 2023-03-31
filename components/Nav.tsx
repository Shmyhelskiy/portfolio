import Link from "next/link";
import styles from "../src/styles/Nav.module.css"
const Nav = () => {
    return (
        <div className={styles["wrapper"]}>
            <Link href="/" className={styles["link"]}>Home</Link>
            <Link href="/projects" className={styles["link"]}>Projects</Link>
            <Link href="/contacts" className={styles["link"]}>Contacts</Link>
        </div>
    );
};

export default Nav;