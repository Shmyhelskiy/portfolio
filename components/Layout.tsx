import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../src/styles/Layout.module.css"

type layoutProps = {
    children: ReactNode,
  }

const Layout:FC<layoutProps> = ({ children }) => {
  return (
    <div className={styles["wrapper"]}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;