import {FC} from 'react';

type buttonTypes = {
    text: string,
    onClick?: () => {},
}

const Button: FC<buttonTypes> = ({ text, onClick}) => {
    return (
        <button onClick={onClick}>
           {text} 
        </button>
    );
};

export default Button;