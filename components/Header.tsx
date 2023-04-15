import   { FC } from "react";
import Nav from "./Nav";




const Header:FC = () => {
    return (
        <header className="w-full h-20 flex items-center  text-white bg-sky-800">
          <Nav />
        </header>
    );
};

export default Header;