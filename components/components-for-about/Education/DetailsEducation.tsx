import { FC } from "react";

type DetailsType = {
    company:string,
    position:string,
    time:string,
    text:string,
}
const DetailsEducation:FC<DetailsType> = ({company, position, time, text}) => {
    return (
        <li className="my-8 first:mt-0 last:mb-0 max-w-[60%] md:max-w-[500px] flex flex-col items-center justify-between">
            <div>
                <h3 className="capitalize font-bold text-sm md:text-base  lg:text-2xl">{position}</h3>
                <span className="capitalize font-medium text-dark/75">
                    {time}&nbsp;{company}
                </span>
                <p className="font-medium w-full">
                    {text}
                </p>
            </div>
        </li>
    );
};

export default DetailsEducation;