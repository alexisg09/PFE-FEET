import Title from "../global/Title";
import Subtitle from "../global/Subtitle";
import Checkbox from "../input/Checkbox";
import { Symptom, addFeelingFormType } from "@/types/types";

export type FeelingFormProps = {
    addFeelingFormData: addFeelingFormType;
    setAddFeelingFormData: React.Dispatch<React.SetStateAction<addFeelingFormType>>;
}

const FeelingForm = ({ addFeelingFormData, setAddFeelingFormData }: FeelingFormProps) => {
    const feelingValues = Object.values(Symptom);
    feelingValues.sort(); // Trie les éléments par ordre croissant

    const addAndRemoveSymptom = (symptom: Symptom) => {
        if (addFeelingFormData.symptoms.includes(symptom)) {
            setAddFeelingFormData({...addFeelingFormData, symptoms: addFeelingFormData.symptoms.filter((symptom) => symptom !== symptom)})
        } else {
            setAddFeelingFormData({...addFeelingFormData, symptoms: [...addFeelingFormData.symptoms, symptom]})
        }
    }

    const isChecked = (symptom: Symptom) => {
        return addFeelingFormData.symptoms.includes(symptom)
    }

    return (
        <>
            <div className="flex flex-col justify-center mt-6 w-[90%] ml-3">
                <Title title="Symptômes" />
                <Subtitle subtitle="Des symptômes en particulier ?" />
            </div>
            <div className="flex flex-row mt-4 flex-wrap -full gap-2 px-3">
             {feelingValues.map((feeling) => (
                <Checkbox checked={isChecked(feeling)} label={feeling} onChange={() => addAndRemoveSymptom(feeling)} key={feeling}/>
            ))}
            </div>

        </>
        
    )

}

export default FeelingForm;