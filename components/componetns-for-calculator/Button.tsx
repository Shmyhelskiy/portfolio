import {FC} from 'react';

type buttonTypes = {
    text: string,
    onClick?: () => {},
}

const Button: FC<buttonTypes> = ({ text, onClick}) => {
    return (
        <button onClick={onClick} className='w-[55px] h-[55px] text-white text-3xl rounded-full bg-orange-500 flex items-center justify-center active:shadow-[inset_0_-2px_10px_rgba(0,0,0,0.75)]'>
        {text} 
        </button>
    );
};

export default Button;