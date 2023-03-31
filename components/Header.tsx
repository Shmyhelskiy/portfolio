import   { FC } from "react";
import styles from "../src/styles/Header.module.css"
import Nav from "./Nav";




const Header:FC = () => {
    return (
        <header className={styles["wrapper"]}>
          <Nav />
        </header>
    );
};

export default Header;