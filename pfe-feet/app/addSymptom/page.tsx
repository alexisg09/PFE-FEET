'use client';
import SymptomForm from "@/components/addSymptoms/SymptomForm";
import BackLink from "@/components/global/BackLink";
import AddSymptom from "@/components/server/AddSymptom";
import { addFeelingFormType } from "@/types/types";
import { format } from "date-fns";
import fr from "date-fns/locale/fr";
import { useState } from "react";

const addSymptom = () => {
  const today = new Date(); // Obtenez la date d'aujourd'hui

  const formattedDate = format(today, 'd MMMM', { locale: fr }); // Formattez la date avec la configuration locale

  const [shouldDoAction, setShouldDoAction] = useState<boolean>(false);

  const [addFeelingFormData, setAddFeelingFormData] = useState<addFeelingFormType>({
    moods: [],
    symptoms: [],
    sleepDuration: null,
    sleepQuality: '',
    date: new Date(),
  })



  return (
    <main className="flex min-h-screen min-w-screen flex-col p-2">
      <div className="flex flex-col items-start flex-wrap">
        <BackLink path="/" title={formattedDate} />
      </div>
      <SymptomForm addFeelingFormData={addFeelingFormData} setAddFeelingFormData={setAddFeelingFormData} setShouldDoAction={setShouldDoAction}>
        <AddSymptom  data={addFeelingFormData} shouldDoAction={shouldDoAction}/>
      </SymptomForm>
    </main>
  )
}

export default addSymptom;