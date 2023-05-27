'use client';
import MoodForm from "@/components/addSymptoms/MoodForm";
import SleepForm from "@/components/addSymptoms/SleepForm";
import BackLink from "@/components/global/BackLink";
import { format } from "date-fns";
import fr from "date-fns/locale/fr";
import { useState } from "react";

export type addSymptomFormType = {
  mood: string[],
  symptoms: string[],
  sleepDuration: number | null,
  sleepQuality: 'good' | 'bad' | '',

}

const addSymptom = () => {
  const today = new Date(); // Obtenez la date d'aujourd'hui

  const formattedDate = format(today, 'd MMMM', { locale: fr }); // Formattez la date avec la configuration locale

  const capitalizedMonth = formattedDate.replace(/^\w/, (c) => c.toUpperCase()); // Mettez en majuscule la première lettre du mois

  const [addSymptomFormData, setAddSymptomFormData] = useState<addSymptomFormType>({
    mood: [],
    symptoms: [],
    sleepDuration: null,
    sleepQuality: '',
  })

return (
    <main className="flex min-h-screen min-w-screen flex-col p-2">
      <div className="flex flex-col items-start flex-wrap">
        <BackLink path="/" title={capitalizedMonth}/>
      </div>
      <MoodForm addSymptomFormData={addSymptomFormData} setAddSymptomFormData={setAddSymptomFormData} />
      <SleepForm addSymptomFormData={addSymptomFormData} setAddSymptomFormData={setAddSymptomFormData} />

    </main>
)


}

export default addSymptom;