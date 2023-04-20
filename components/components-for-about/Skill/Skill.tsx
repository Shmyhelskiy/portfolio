import { motion } from "framer-motion";
import { FC } from "react";

type SkillType = {
    name: string,
    x: string,
    y: string,
}
const Skill:FC<SkillType> = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold  md:bg-black md:text-white text-black lg:py-3 lg:px-6 shadow-black cursor-pointer absolute
        md:py-2 md:px-4 text-sm py=1.5 px-3 dark:md:bg-white dark:text-black'
        whileHover={{scale:1.1}}
        initial={{x:0, y:0}}
        animate={{x:x, y:y}}
        transition={{duration: 0.5}}
        >
            {name}
        </motion.div>
    );
};

export default Skill;