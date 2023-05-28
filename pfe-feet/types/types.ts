export type addFeelingFormType = {
    moods: string[],
    date: Date,
    symptoms: Symptom[],
    sleepDuration: number | null,
    sleepQuality: 'good' | 'bad' | '',
}


export interface IFeeling {
    id: string,
    date: Date,
    symptoms: Symptom[],
    isFromSensors: boolean,
}

export interface IFeelingUser extends IFeeling {
    sleepDuration: number | null,
    sleepQuality: 'good' | 'bad' | '',
    moods: string[],
}

export interface IAdvice {
    id: string,
    title: string,
    description: string,
    date: Date,
    img: string,
    backgroundImg: string,
    symptomCategories: SymptomCategory[],
    feelings?: Symptom[],
}

export enum Symptom {
    ALL_GOOD = 'Tout va bien',
    BLOCKED_NOSE = 'Nez bouché',
    BREATHING_DIFFICULTIES = 'Difficultés respiratoires',
    BREATHLESSNESS = 'Essoufflement',
    CONSTIPATION = 'Constipation',
    COUGH = 'Toux',
    CRAMPS = 'Crampes',
    DIARRHEA = 'Diarrhée',
    FATIGUE = 'Fatigue',
    GASTRIC_PAIN = 'Douleurs gastriques',
    HEADACHES = 'Maux de tête',
    NAUSEA = 'Nausées',
    SORE_THROAT = 'Mal de gorge',
    SORENESS = 'Courbatures',
    SWEATING = 'Sueurs',
    SWELLING = 'Gonflements',
    VISION_PROBLEMS = 'Troubles de la vision',
    VOMITING = 'Vomissements',
}

export enum SymptomCategory {
    CIRCULATORY = 'Circulatoire',
    DIGESTION = 'Digestion',
    HYDRATION = 'Hydratation',
    MISCELLANEOUS = 'Divers',
    MUSCULAR = 'Musculaire',
}

export type SymptomCategoryMapping = {
    [key in Symptom]: SymptomCategory[];
};

export const symptomCategoryMapping: SymptomCategoryMapping = {
    [Symptom.ALL_GOOD]: [SymptomCategory.MISCELLANEOUS],
    [Symptom.BLOCKED_NOSE]: [SymptomCategory.MISCELLANEOUS, SymptomCategory.CIRCULATORY],
    [Symptom.BREATHING_DIFFICULTIES]: [SymptomCategory.CIRCULATORY],
    [Symptom.BREATHLESSNESS]: [SymptomCategory.CIRCULATORY],
    [Symptom.CONSTIPATION]: [SymptomCategory.DIGESTION],
    [Symptom.COUGH]: [SymptomCategory.MISCELLANEOUS, SymptomCategory.CIRCULATORY],
    [Symptom.CRAMPS]: [SymptomCategory.MUSCULAR, SymptomCategory.CIRCULATORY],
    [Symptom.DIARRHEA]: [SymptomCategory.DIGESTION, SymptomCategory.HYDRATION],
    [Symptom.FATIGUE]: [SymptomCategory.MUSCULAR, SymptomCategory.CIRCULATORY],
    [Symptom.GASTRIC_PAIN]: [SymptomCategory.MUSCULAR, SymptomCategory.HYDRATION],
    [Symptom.HEADACHES]: [SymptomCategory.MISCELLANEOUS, SymptomCategory.CIRCULATORY, SymptomCategory.HYDRATION],
    [Symptom.NAUSEA]: [SymptomCategory.MISCELLANEOUS, SymptomCategory.CIRCULATORY, SymptomCategory.HYDRATION],
    [Symptom.SORENESS]: [SymptomCategory.MISCELLANEOUS, SymptomCategory.CIRCULATORY],
    [Symptom.SORE_THROAT]: [SymptomCategory.MISCELLANEOUS, SymptomCategory.CIRCULATORY],
    [Symptom.SWEATING]: [SymptomCategory.CIRCULATORY, SymptomCategory.HYDRATION, SymptomCategory.DIGESTION],
    [Symptom.SWELLING]: [SymptomCategory.DIGESTION, SymptomCategory.CIRCULATORY],
    [Symptom.VISION_PROBLEMS]: [SymptomCategory.MISCELLANEOUS, SymptomCategory.CIRCULATORY],
    [Symptom.VOMITING]: [SymptomCategory.DIGESTION, SymptomCategory.HYDRATION],
};

export const getSymptomHexCode = (symptom: Symptom): string | undefined =>  {
    const categories = symptomCategoryMapping[symptom];
    if (categories && categories.length > 0) {
      const firstCategory = categories[0];
      switch (firstCategory) {
        case SymptomCategory.MUSCULAR:
          return 'border-[#E1529F]';
        case SymptomCategory.DIGESTION:
          return 'border-[#ABE152]';
        case SymptomCategory.CIRCULATORY:
          return 'border-[#E15252]';
        case SymptomCategory.HYDRATION:
          return 'border-[#528BE1]';
        case SymptomCategory.MISCELLANEOUS:
          return 'border-[#508C97]';
        default:
          return undefined;
      }
    }
    return undefined;
  }