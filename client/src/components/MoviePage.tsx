import { useEffect, useState } from "react"
import { useParams} from "react-router-dom";
import type { Review, Movie } from "../types";
import ReviewForm from "./ReviewForm";


 export default function MoviePage() {
    const {id} = useParams<{id: string}>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch(`/api/movies/${id}`)
        .then(res => res.json())
        .then(setMovie)
        .catch(console.error);

        fetch(`/api/movies/${id}/reviews`)
        .then(res => res.json())
        .then(setReviews)
        .catch(console.error);

        async function loadData() {
            try {
                setLoading(true);
                setError(null);

                const movieRes = await fetch(`/api/movies/${id}`);
                if(!movieRes.ok) throw new Error("Movie fetch failed");
                const movieData = await movieRes.json();

                const reviewRes = await fetch(`/api/movie/${id}/reviews`);
                if (!reviewRes.ok) throw new Error("Reviews fetch failed");
                const reviewsData = await reviewRes.json();

                setMovie(movieData);
                setReviews(reviewsData);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [id]);

    if (!movie) return <p>Loading movie...</p>

    return (
        <div>
            <h2>{movie.title}</h2>
            <ReviewForm movieId={id!}
            onAdd = {newReview => setReviews([newReview, ...reviews])}
            />
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <b>{review.author}</b>: {review.text} [{review.createdAt.toLocaleString().split("T")[0]}]
                    </li>
                ))}
            </ul>
        </div>
    )
} 