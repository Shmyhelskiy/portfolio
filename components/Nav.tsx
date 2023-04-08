import Link from "next/link";

const Nav = () => {
    return (
        <div className="flex ml-5 gap-2 text-xl">
            <Link href="/" className="p-5 hover:text-red-400 hover:scale-125">Home</Link>
            <Link href="/projects" className="p-5 hover:text-red-400 hover:scale-125">Projects</Link>
        </div>
    );
};

export default Nav;