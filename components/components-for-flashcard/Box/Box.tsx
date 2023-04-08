import { FC } from "react";


type BoxProps = {
number: number,
disabled: boolean | undefined,
onClick: () => {}
}

const Box: FC<BoxProps> = ({number,disabled,  onClick}) => {
    return  <button className="w-1/3 border-none block sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold text-center rounded-3xl bg-amber-100 hover:cursor-pointer active:bg-indigo-700 disabled:bg-orange-100 disabled:cursor-default" disabled={disabled} onClick={onClick}>{number}</button>
    };

export default Box;