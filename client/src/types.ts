
export interface Movie {
    id: string;
    title: string;
    year: number;
    genre: string;
}

export interface Review {
    id: string;
    movieId: string;
    author: string;
    text: string;
    createdAt: Date;
}