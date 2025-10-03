import { useState, useEffect } from "react";
import { fetchMovies } from "../services/movieServices";
import type { Movie } from "../types";

export function useMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchMovies()
        .then(m => setMovies(m))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }, []);

    return { movies, loading, error };
}