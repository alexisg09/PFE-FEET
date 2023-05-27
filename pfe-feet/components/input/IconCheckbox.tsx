import Image from "next/image";

type IconCheckboxProps = {
    label: string;
    checked: boolean;
    icon: string;
    onChange: any;
    key: string;
}

const IconCheckbox = ({ label, checked, onChange, icon, key }: IconCheckboxProps) => {
    return (
        <div className="flex flex-col items-center gap-1" key={key}>
            <div className={`checkbox w-auto h-full flex flex-col justify-center items-center cursor-pointer border-[#464646] border-1 ${checked ? 'checked' : ''}`} onClick={onChange}>
                 <div className="flex justify-center items-center checkbox-icon w-full p-2">
                    <Image src={icon} width={30} height={30} alt="icon"/>
                 </div>
            </div>
            <div className='checkbox-label font-semibold'>{label}</div>
        </div>
    )
        
};

export default IconCheckbox;