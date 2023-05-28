import IconCheckbox from "../input/IconCheckbox";
import Title from "../global/Title";
import Subtitle from "../global/Subtitle";
import { addFeelingFormType } from "@/types/types";


type MoodFormProps = {
  addFeelingFormData: addFeelingFormType;
  setAddFeelingFormData: React.Dispatch<React.SetStateAction<addFeelingFormType>>;
}

const MoodForm = ({ addFeelingFormData, setAddFeelingFormData }: MoodFormProps) => {
    const moods = [
        {mood: 'Calme', icon: '/images/Leaf.svg'},
        {mood: 'Heureux', icon: '/images/Smiley.svg'},
        {mood: 'Triste', icon: '/images/SmileySad.svg'}, 
        {mood: 'Energique', icon: '/images/SmileyWink.svg'},
        {mood: 'Irritable', icon: '/images/SmileyXEyes.svg'}
      ]

    const addMoodandRemoveMood = (mood: string) => {
        if(addFeelingFormData.moods.includes(mood)) {
          const newMoodArray = addFeelingFormData.moods.filter((moodInArray: string) => moodInArray !== mood)
          setAddFeelingFormData({...addFeelingFormData, moods: newMoodArray})
        } else {
          setAddFeelingFormData({...addFeelingFormData, moods: [...addFeelingFormData.moods, mood]})
        }
    
      }
    
      const isChecked = (mood: string) => {
        return addFeelingFormData.moods.includes(mood)
      }

      return (
        <>
        <div className="flex flex-col justify-center mt-4 w-[90%] ml-3">
        <Title title="Humeur" />
        <Subtitle subtitle="Comment vous sentez-vous ?" />
        </div>
        <div className="flex flex-row mt-6 w-full justify-between px-3">
      {moods.map((mood) => (
        <div className="h-16"  key={mood.mood}>
          <IconCheckbox checked={isChecked(mood.mood)} icon={mood.icon} label={mood.mood}
           onChange={() =>{
            addMoodandRemoveMood(mood.mood)
            }}
           /> 
        </div>
        ))
      }
      </div>
      </>
      );

    }

    export default MoodForm;
