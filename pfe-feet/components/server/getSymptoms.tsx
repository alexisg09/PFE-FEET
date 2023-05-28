import { addSymptomData, getSymptomsData } from "@/data/symptomsUtils";
import { Symptom, addFeelingFormType } from "@/types/types";


const GetSymptoms = () => {
    const data = getSymptomsData();

    const symptomToAdd: addFeelingFormType = {
        date: new Date(),
        moods: [],
        sleepDuration: 5,
        sleepQuality: 'good',
        symptoms: [Symptom.BLOCKED_NOSE, Symptom.BREATHING_DIFFICULTIES]
    }

    const updatedSymptoms = addSymptomData(symptomToAdd);

    console.info('updatedSymptoms', updatedSymptoms)
    console.info('data', data)

      


    return (
        <div>
            
        </div>
    )


}

export default GetSymptoms;
