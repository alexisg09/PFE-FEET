import fs from 'fs';
import path from 'path';

export function getSymptomsData(date?: Date) {
  const filePath = path.join(process.cwd(), 'data', 'symptoms.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  const symptomsData = JSON.parse(fileData);
  return symptomsData;
}

export function updateSymptomData(updatedSymptom: any) {
    // 1. Lire les données des symptômes à partir du fichier JSON
    const symptomsData = getSymptomsData();
  
    // 2. Rechercher le symptôme à mettre à jour en fonction de son ID
    const updatedSymptoms = symptomsData.map((symptom: any) => {
      if (symptom.id === updatedSymptom.id) {
        return { ...symptom, ...updatedSymptom };
      }
      return symptom;
    });
  
    // 3. Écrire les données mises à jour dans le fichier JSON
    const filePath = path.join(process.cwd(), 'data', 'symptoms.json');
    fs.writeFileSync(filePath, JSON.stringify(updatedSymptoms));
  
    return updatedSymptom;
  }


  export function addSymptomData(newSymptom: any) {
    // 1. Lire les données des symptômes à partir du fichier JSON
    const symptomsData = getSymptomsData();
  
    // 2. Ajouter le nouveau symptôme à la liste
    symptomsData.push(newSymptom);
  
    // 3. Écrire les données mises à jour dans le fichier JSON
    const filePath = path.join(process.cwd(), 'data', 'symptoms.json');
    fs.writeFileSync(filePath, JSON.stringify(symptomsData));

    const newSymptomsData = getSymptomsData();

    return newSymptomsData;
  }