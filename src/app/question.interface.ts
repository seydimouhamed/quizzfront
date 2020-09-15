export interface Question{
    libelle:string;
    score: number;
    type:string;
    reponses:Reponse[]
}

export interface Reponse
{
    libelle:string,
    isCorrect:boolean
}