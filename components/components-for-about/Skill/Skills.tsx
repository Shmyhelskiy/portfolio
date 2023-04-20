import {motion} from "framer-motion"
import Skill from './Skill';

const Skills = () => {
    return (
        <>
        <div className='flex flex-col justify-center items-center'> 
            <h1 className='font-bold text-4xl lg:text-7xl'>Skills</h1>
            <div className='w-full h-[40vh] sm:h-[60vh] md-h-[80vh] lg:h-screen relative flex items-center justify-center rounded-full
            bg-circularLight md:bg-circularLightMd lg:bg-circularLightLg xl:bg-circularLightXl 
            dark:bg-circularDark dark:md:bg-circularDarkMd dark:lg:bg-circularDarkLg dark:xl:bg-circularDarkXl'
            >
                <motion.div className='flex items-center justify-center rounded-full font-semibold  md:bg-black md:text-white text-black p-6 md:shadow-black dark:md:bg-white dark:text-black  cursor-pointer'
                    whileHover={{scale:1.1}}
                    >
                    Web
                </motion.div>
                <Skill name="HTML" x="-10vw" y="-5vw"/>
                <Skill name="CSS" x="10vw" y="5vw"/>
                <Skill name="JavaScript" x="-20vw" y="0vw"/>
                <Skill name="React" x="23vw" y="-5vw"/>
                <Skill name="Github" x="0vw" y="-14vw"/>
                <Skill name="NextJS" x="-10vw" y="16vw"/>
                <Skill name="Tailwind CSS " x="18vw" y="-17vw"/>

            </div>

        </div>
        </>
    );
};

export default Skills;