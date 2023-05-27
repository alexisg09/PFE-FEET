import { addSymptomFormType } from "@/app/addSymptom/page";
import IconCheckbox from "../input/IconCheckbox";
import Title from "../global/Title";
import Subtitle from "../global/Subtitle";


type MoodFormProps = {
    addSymptomFormData: addSymptomFormType;
    setAddSymptomFormData: React.Dispatch<React.SetStateAction<addSymptomFormType>>;
}

const MoodForm = ({ addSymptomFormData, setAddSymptomFormData }: MoodFormProps) => {
    const moods = [
        {mood: 'Calme', icon: '/images/Leaf.svg'},
        {mood: 'Heureux', icon: '/images/Smiley.svg'},
        {mood: 'Triste', icon: '/images/SmileySad.svg'}, 
        {mood: 'Energique', icon: '/images/SmileyWink.svg'},
        {mood: 'Irritable', icon: '/images/SmileyXEyes.svg'}
      ]

    const addMoodandRemoveMood = (mood: string) => {
        //Function that should add or remove a mood from the array
        //If the mood is already in the array, it should be removed
        //If the mood is not in the array, it should be added
      
        if(addSymptomFormData.mood.includes(mood)) {
          //Remove mood from array
          const newMoodArray = addSymptomFormData.mood.filter((moodInArray) => moodInArray !== mood)
          setAddSymptomFormData({...addSymptomFormData, mood: newMoodArray})
        } else {
          //Add mood to array
          setAddSymptomFormData({...addSymptomFormData, mood: [...addSymptomFormData.mood, mood]})
        }
    
      }
    
      const isChecked = (mood: string) => {
        return addSymptomFormData.mood.includes(mood)
      }


      return (
        <>
        <div className="flex flex-col justify-center mt-6 w-[90%] ml-3">
        <Title title="Humeur" />
        <Subtitle subtitle="Comment vous sentez-vous ?" />
      </div>
        <div className="flex flex-row mt-6 w-full justify-between px-3">
      {moods.map((mood) => (
        <div className="h-16">
          <IconCheckbox checked={isChecked(mood.mood)} icon={mood.icon} label={mood.mood}
           onChange={() =>{
            addMoodandRemoveMood(mood.mood)

            }} key={mood.mood}/> 
        </div>
        ))
      }
      </div>
      </>
      );

    }

    export default MoodForm;
