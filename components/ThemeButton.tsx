import { useTheme} from "next-themes"
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

const ThemeButton = () => {
    const {theme, setTheme } = useTheme();

    return (
        <button
        type="button"
        className="flex items-center justify-end mr-10 gap-2 text-xs md:text-base lg:text-lg w-1/3"
        onClick={() => setTheme(theme === "dark" ? 'light' : "dark")}
        >
        {theme === `dark` ? (
            <SunIcon  className="h-5 w-5 text-orange-300"/>
        ) : (
            <MoonIcon className="h-5 w-5 text-state-800"/>
        )}
        </button>
    );
};
export default ThemeButton