import Link from "next/link";
import styles from "../src/styles/Nav.module.css"
const Nav = () => {
    return (
        <div className={styles["wrapper"]}>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
        </div>
    );
};

export default Nav;