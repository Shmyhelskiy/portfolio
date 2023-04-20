import { useRef } from "react";
import DetailsExperience from "./DetailsExperience";
import {motion, useScroll } from "framer-motion";

const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end', "center start"]
        }
    )
    return (
        <div className="my-80">
            <h2 className="className='text-sm mb-20 md:text-lg lg:text-5xl font-bold text-center w-full">
                Experience
            </h2>

            <div ref={ref} className="w-screen lg:w-[60%] mx-auto relative ">
                <motion.div
                style={{scaleY: scrollYProgress}}
                className="absolute left-8 top-0 w-[4px] h-full bg-black dark:bg-white origin-top"/>

                <ul className="w-full flex flex-col items-center justify-between ml-4">
                    <DetailsExperience company="Freelance" 
                    position="Front-end developer" 
                    time="03.2023-Present" 
                    text="I create intuitive and attractive web applications and interfaces that enhance the user experience. I implement new features and develop websites, constantly push the boundaries of what is possible and create innovative solutions to complex problems."
                    />
                    <DetailsExperience company="Army of Ukraine" 
                    position="An officer of the" 
                    time="2019-2020 and 25/02/2022-0812/2022" 
                    text="Control of combat missions, create and effectively manage my own team and collaborate with others to achieve common goals."
                    />
                    <DetailsExperience company="Equipment for Business" 
                    position="Sales manager" 
                    time="2018-2019 and 2020-2023" 
                    text="I searched for new customers, sales of products and services of the company and organization, and holding of presentations."
                    />
                    <DetailsExperience company="Equipment for Business" 
                    position="Information technolohy specialist" 
                    time="2014-2018" 
                    text="In my work, I had to company network support, fix error,s and create a new workplaces."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;