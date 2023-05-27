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


                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <div className="flex flex-row mt-6 w-full justify-between px-3 h-12">
                        <IconCheckbox checked={isChecked('good')} icon='/images/ThumbsUp.svg' label='Bien dormi'
                            onChange={ () => addAndRemoveSleepQuality('good') } 
                         />
                         <IconCheckbox checked={isChecked('bad')} icon='/images/ThumbsDown.svg' label='Mal dormi'
                            onChange={ () => addAndRemoveSleepQuality('bad') } 
                         />
                </div>
            </div>
        );

    }

export default SleepForm;