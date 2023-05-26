import Image from "next/image";

type IconCheckboxProps = {
    label: string;
    checked: boolean;
    icon: string;
    onChange: () => void;
}

const IconCheckbox = ({ label, checked, onChange, icon }: IconCheckboxProps) => {
    return (
        <div className="flex flex-col items-center gap-1">
            <div className={`checkbox w-full h-full flex flex-col justify-center items-center cursor-pointer border-[#464646] border-1 ${checked ? 'checked' : ''}`} onClick={onChange}>
                 <div className="flex justify-center items-center checkbox-icon w-full p-2">
                    <Image src={icon} width={30} height={30} alt="icon"/>
                 </div>
            </div>
            <div className='checkbox-label font-semibold'>{label}</div>
        </div>
    )
        
};

export default IconCheckbox;

// .checkbox {
//     border: 1px solid #000;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//   }


