import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";


type layoutProps = {
    children: ReactNode,
  }

const Layout:FC<layoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;