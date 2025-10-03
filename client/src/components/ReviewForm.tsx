import { useState } from "react";
import type { Review } from "../types";

interface MovieFormProps {
    movieId: string;
    onAdd: (review: Review) => void;
}

export default function ReviewForm({onAdd, movieId}: MovieFormProps) {
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if(!author.trim() || !text.trim()) return;

        const res = await fetch(`/api/movies/${movieId}/reviews`, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({author, text})
        });

        const newReview: Review = await res.json();

        setAuthor("");
        setText("");
        onAdd(newReview)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Enter your name"/>
            <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter your review" />
            <button type="submit">Submit</button>
        </form>
    );


}