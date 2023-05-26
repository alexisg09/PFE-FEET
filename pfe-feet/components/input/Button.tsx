
type ButtonProps = {
    bgColor: string;
    textColor: string;
    text: string;
    onClick?: () => void;
}


const Button = ({bgColor, textColor, text, onClick}: ButtonProps ) => {
    console.log(bgColor)

    return (
        <button className={`w-auto h-10 font-sans uppercase rounded-md ${bgColor} text-${textColor} font-bold`} onClick={() => onClick}><span className="px-4">{text}</span></button>
    )
}

export default Button;