import Image from "next/image";

type CheckboxProps = {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox = ({ label, checked, onChange  }: CheckboxProps) => {
    return (
            <div className={`checkbox w-auto flex flex-col items-center justify-center cursor-pointer border-1 border-[#464646] py-3 px-4 ${checked ? 'checked' : ''}`} onClick={onChange}>
                {label && <div className={`checkbox-label font-semibold ${checked ? 'checked' : ''}`}>{label}</div>}
            </div>
    )
        
};

export default Checkbox;




