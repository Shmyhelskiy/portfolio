import { FC } from "react";

type DetailsType = {
    company:string,
    position:string,
    time:string,
    text:string,
}
const DetailsExperience:FC<DetailsType> = ({company, position, time, text}) => {
    return (
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] flex flex-col items-center justify-between">
            <div>
                <h3 className="capitalize font-bold text-sm md:text-base  lg:text-2xl">{position}&nbsp;{company}</h3>
                <span className="capitalize font-medium text-dark/75">
                    {time}
                </span>
                <p className="font-medium w-full">
                    {text}
                </p>
            </div>
        </li>
    );
};

export default DetailsExperience;