import   { FC } from "react";
import Nav from "./Nav";




const Header:FC = () => {
    return (
        <header className="w-full h-32 flex items-center  text-white bg-black">
          <Nav />
        </header>
    );
};

export default Header;