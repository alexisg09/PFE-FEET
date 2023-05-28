
type ButtonProps = {
    bgColor: string;
    textColor: string;
    text: string;
    onClick?: any;
}


const Button = ({bgColor, textColor, text, onClick}: ButtonProps ) => {
    return (
        <button className={`w-auto h-10 font-sans uppercase rounded-md ${bgColor} text-${textColor} font-semibold text-xs`} onClick={() => onClick}><span className="px-4">{text}</span></button>
    )
}

export default Button;