import { useEffect, useState } from "react";
import type { Movie } from "../types";

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            try {
                const res = await fetch("/api/movies");
                const data: Movie[] = await res.json();
                setMovies(data);
            } catch (err) {
                console.log("Failed to fetch movies", err);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    if (loading) return <p>Loading...</p>
    return (
        <ul>
            {movies.map((m) => (
                <li key={m.id}>
                    <strong>{m.title}</strong> ({m.year}) - {m.genre}
                </li>
            ))}
        </ul>
    )
}