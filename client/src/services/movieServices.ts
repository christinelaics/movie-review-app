import type { Movie, Review } from "../types";

export async function fetchMovies(): Promise<Movie[]> {
    const res = await fetch(`/api/movies`);
    if(!res.ok) throw new Error("Failed to fetch movies");
    return res.json();
}

export async function fetchMovie(id: string): Promise<Movie> {
    const res = await fetch(`/api/movies/${id}`);
    if(!res.ok) throw new Error("Failed to fetch movie");
    return res.json();
}

export async function fetchReviews(id: string): Promise<Review[]> {
    const res = await fetch(`/api/movies/${id}/reviews`);
    if(!res.ok) throw new Error("failed to fetch reviews");
    return res.json();
}