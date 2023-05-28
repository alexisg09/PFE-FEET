import Title from "../global/Title";
import Subtitle from "../global/Subtitle";
import IconCheckbox from "../input/IconCheckbox";
import { addFeelingFormType } from "@/types/types";

type SleepFormProps = {
    addFeelingFormData: addFeelingFormType;
    setAddFeelingFormData: React.Dispatch<React.SetStateAction<addFeelingFormType>>;
}

const SleepForm = ({ addFeelingFormData, setAddFeelingFormData }: SleepFormProps) => {

    const isChecked = (sleepQuality: string) => {
       return addFeelingFormData.sleepQuality === sleepQuality
    }

    const addAndRemoveSleepQuality = (sleepQual: 'good' | 'bad' | '') => {
    if (addFeelingFormData.sleepQuality === sleepQual) {
        setAddFeelingFormData({...addFeelingFormData, sleepQuality: ''})
    } else {
        setAddFeelingFormData({...addFeelingFormData, sleepQuality: sleepQual})
    }
}


    return (
            <div className="flex flex-col justify-center mt-6 w-[90%] ml-3">
                <Title title="Sommeil" />
                <Subtitle subtitle="Combien d'heures avez-vous dormi ?" />
                <div className="flex flex-row w-full items-center mt-4">
                    <input
                        type="number"
                        min="0"
                        max="24"
                        value={addFeelingFormData.sleepDuration || ''}
                        onChange={(e) =>
                            setAddFeelingFormData({
                              ...addFeelingFormData,
                              sleepDuration: parseInt(e.target.value, 10) || null,
                            })
                          }
                        placeholder="Heures"
                        className="input input-bordered w-1/2 max-w-xs text-[#508C97] bg-white" />
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