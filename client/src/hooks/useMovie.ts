import {useEffect, useState} from "react";
import { fetchMovie, fetchReviews } from "../services/movieServices";
import type { Movie, Review } from "../types";

export function useMovie(id: string | undefined) {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        setLoading(true);

        Promise.all([fetchMovie(id), fetchReviews(id)])
        .then(([m, r]) => {
            setMovie(m);
            setReviews(r);
        })
        .finally(() => setLoading(false));
    }, [id]);

    return {movie, reviews, setReviews, loading};

}