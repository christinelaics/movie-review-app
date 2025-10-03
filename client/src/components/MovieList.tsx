import { Link } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";

export default function MovieList() {
    const {movies, loading, error} = useMovies();
    if (loading) return <p>Loading...</p>
    if (error) return <p>Could not load movies</p>
    return (
        <ul>
            {movies.map((m) => (
                <li key={m.id}>
                    <Link to={`/movies/${m.id}`}>
                    <strong>{m.title}</strong> ({m.year}) - {m.genre}
                    </Link>
                    
                </li>
            ))}
        </ul>
    )
}