import { useParams} from "react-router-dom";
import ReviewForm from "./ReviewForm";
import { useMovie } from "../hooks/useMovie";


 export default function MoviePage() {
    const { id } = useParams<{id: string}>();
    const { movie, reviews, setReviews, loading } = useMovie(id);

    if (loading) return <p>Loading movie</p>
    if(!movie) return <p>Movie not Found.</p>

    return (
        <div>
            <h2>{movie.title}</h2>
            <ReviewForm movieId={id!}
            onAdd = {newReview => setReviews([newReview, ...reviews])}
            />
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <b>{review.author}</b>: {review.text} [{new Date(review.createdAt).toLocaleDateString()}]
                    </li>
                ))}
            </ul>
        </div>
    )
} 