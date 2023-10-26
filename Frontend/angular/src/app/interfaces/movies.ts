export interface Movie {
    id?: number,
    genre: string,
    clasification: string,
    format: string, //despues lo cambio por lo de Luca
    description: string,
    durationMin: number,
    title: string,
    imageUri: string //url de la imagen
}