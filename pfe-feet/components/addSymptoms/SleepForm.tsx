import { addSymptomFormType } from "@/app/addSymptom/page";
import Title from "../global/Title";
import Subtitle from "../global/Subtitle";
import IconCheckbox from "../input/IconCheckbox";

type SleepFormProps = {
    addSymptomFormData: addSymptomFormType;
    setAddSymptomFormData: React.Dispatch<React.SetStateAction<addSymptomFormType>>;
}

const SleepForm = ({ addSymptomFormData, setAddSymptomFormData }: SleepFormProps) => {

    const isChecked = (sleepQuality: string) => {
       return addSymptomFormData.sleepQuality === sleepQuality
    }

    const addAndRemoveSleepQuality = (sleepQual: 'good' | 'bad' | '') => {
    if (addSymptomFormData.sleepQuality === sleepQual) {
        setAddSymptomFormData({...addSymptomFormData, sleepQuality: ''})
    } else {
        setAddSymptomFormData({...addSymptomFormData, sleepQuality: sleepQual})
    }
}


    return (
            <div className="flex flex-col justify-center mt-6 w-[90%] ml-3">
                <Title title="Sommeil" />
                <Subtitle subtitle="Combien d'heures avez-vous dormi ?" />
                <div className="flex flex-row w-full items-center mt-4">
                    <input type="number" placeholder="Heures" className="input input-bordered w-1/2 max-w-xs text-[#508C97] bg-white" />
                    <span className="ml-3">h</span>
                    <div className="flex flex-row w-full justify-end gap-5 px-3 h-12">
                            <IconCheckbox key='good' checked={isChecked('good')} icon='/images/ThumbsUp.svg' label='Bien dormi'
                                onChange={ () => addAndRemoveSleepQuality('good') } 
                             />
                             <IconCheckbox key='bad' checked={isChecked('bad')} icon='/images/ThumbsDown.svg' label='Mal dormi'
                                onChange={ () => addAndRemoveSleepQuality('bad') } 
                             />
                    </div>
                </div>
                
            </div>
        );

    }

export default SleepForm;