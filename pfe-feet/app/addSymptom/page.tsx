'use client';
import MoodForm from "@/components/addSymptoms/MoodForm";
import SleepForm from "@/components/addSymptoms/SleepForm";
import SymptomForm from "@/components/addSymptoms/SymptomForm";
import BackLink from "@/components/global/BackLink";
import Button from "@/components/input/Button";
import { addFeelingFormType } from "@/types/types";
import { format } from "date-fns";
import fr from "date-fns/locale/fr";
import { useState } from "react";
import fs from 'fs';

const addSymptom = () => {
  const today = new Date(); // Obtenez la date d'aujourd'hui
  const jsonData = require('../../data/symptoms.json');
  console.info(jsonData);

  const formattedDate = format(today, 'd MMMM', { locale: fr }); // Formattez la date avec la configuration locale

  const capitalizedMonth = formattedDate.replace(/^\w/, (c) => c.toUpperCase()); // Mettez en majuscule la première lettre du mois

  const [addFeelingFormData, setAddFeelingFormData] = useState<addFeelingFormType>({
    moods: [],
    symptoms: [],
    sleepDuration: null,
    sleepQuality: '',
    date: new Date(),
  })

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    // e.preventDefault();

    // // Ajoutez la nouvelle entrée à votre fichier JSON
    // const updatedData = [...jsonData, addFeelingFormData];

    // // Convertissez les données en format JSON
    // const jsonDataString = JSON.stringify(updatedData);

    // // Écrivez les données dans le fichier symptoms.json
    // fs.writeFileSync('path/to/your/symptoms.json', jsonDataString, 'utf-8');

    // console.log('Données mises à jour :', updatedData);
  };

return (
    <main className="flex min-h-screen min-w-screen flex-col p-2">
      <div className="flex flex-col items-start flex-wrap">
        <BackLink path="/" title={capitalizedMonth}/>
      </div>
      <MoodForm addFeelingFormData={addFeelingFormData} setAddFeelingFormData={setAddFeelingFormData} />
      <SleepForm addFeelingFormData={addFeelingFormData} setAddFeelingFormData={setAddFeelingFormData} />
      <SymptomForm addFeelingFormData={addFeelingFormData} setAddFeelingFormData={setAddFeelingFormData} />
      <div className="flex justify-center">
        <Button text="Valider" bgColor="bg-[#1F2937] mt-12 px-8" textColor="white" onClick={handleSubmit} />
      </div>
    </main>
)


}

export default addSymptom;