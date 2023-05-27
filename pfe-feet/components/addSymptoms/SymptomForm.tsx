import { addSymptomFormType } from "@/app/addSymptom/page";
import Title from "../global/Title";
import Subtitle from "../global/Subtitle";


type SymptomFormProps = {
    addSymptomFormData: addSymptomFormType;
    setAddSymptomFormData: React.Dispatch<React.SetStateAction<addSymptomFormType>>;
}

const SymptomForm = ({ addSymptomFormData, setAddSymptomFormData }: SymptomFormProps) => {

    return (
        <>
            <div className="flex flex-col justify-center mt-6 w-[90%] ml-3">
                <Title title="Symptômes" />
                <Subtitle subtitle="Des symptômes en particulier ?" />
            </div>
            <div className="flex flex-row mt-6 w-full justify-between px-3">
            </div>

        </>
        
    )

}

export default SymptomForm;