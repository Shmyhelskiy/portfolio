import { useRef } from "react";
import {motion, useScroll } from "framer-motion";
import DetailsEducation from "./DetailsEducation";


const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ['start end', "center center"]
        }
    )
    return (
        <div className="mb-50 md:mb-60">
            <h2 className="className='text-sm mb-20 md:text-lg lg:text-5xl font-bold text-center w-full">
                Experience
            </h2>

            <div ref={ref} className="w-screen lg:w-[60%] mx-auto relative ">
                <motion.div
                style={{scaleY: scrollYProgress}}
                className="absolute left-8 top-0 w-[4px] h-full bg-black dark:bg-white origin-top"/>

                <ul className="w-full flex flex-col items-center justify-between ml-4">
                    <DetailsEducation company="CURSOR.Education" 
                    position="FRONT-END ADVANCED" 
                    time="12.2022-03.2023" 
                    text="Study vanilla JS, React, and Redux.Development of own projects using API." 
                    />
                    <DetailsEducation company="Polytechnic National University" 
                    position="Master Information Communication Network" 
                    time="2018-2019" 
                    text="Completed a master's project on the development of a telecommunications network and theoretical introduction to the network of the city."
                    />
                    <DetailsEducation company="Polytechnic National University" 
                    position="Bachelor Telecommunications" 
                    time="2014-2018" 
                    text="Relevant training included data structures and algorithms and network architecture."
                    />
                </ul>
            </div>
        </div>
    )
};

export default Education;