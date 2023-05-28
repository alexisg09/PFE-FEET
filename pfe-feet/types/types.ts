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
    CRAMPS = 'Crampes',
    NAUSEA = 'Nausées',
    HEADACHES = 'Maux de tête',
    MISCELLANEOUS = 'Divers',
    BREATHLESSNESS = 'Essoufflement',
    DIARRHEA = 'Diarrhée',
    CONSTIPATION = 'Constipation',
    SWELLING = 'Gonflements',
    GASTRIC_PAIN = 'Douleurs gastriques',
    FATIGUE = 'Fatigue',
    VISION_PROBLEMS = 'Troubles de la vision',
    SORE_THROAT = 'Mal de gorge',
    BREATHING_DIFFICULTIES = 'Difficultés respiratoires',
    SWEATING = 'Sueurs',
    COUGH = 'Toux',
    VOMITING = 'Vomissements',
    BLOCKED_NOSE = 'Nez bouché',
    SORENESS = 'Courbatures',
}
  
export enum SymptomCategory {
    DIGESTION = 'Digestion',
    HYDRATION = 'Hydratation',
    MUSCULAR = 'Musculaire',
    CIRCULATORY = 'Circulatoire',
    MISCELLANEOUS = 'Divers',
}

