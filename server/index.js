const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}));

let movies = [
    {id: "m1", title: "The Matrix", year: 1999, genre: "Sci-Fi"},
    {id: "m2", title: "Spirited Away", year: 2001, genre: "Animation"}
];

let reviews = [
    {id: "r1", movieId: "m1", author: "Alice", text: "This movie is amazing", createdAt: Date.now()},
    {id: "r2", movieId: "m2", autho: "Ben", text: "Beautiful animation", createdAt: Date.now()}
];

// GET all movies
app.get("/api/movies", (req, res) => {
    res.json(movies);
});

// GET single movie
app.get("/api/movies/:id", (req,res) => {
    const { id } = req.params;
    const movie = movies.find((m) => m.id === id);
    if (!movie) return res.status(404).json({error: "movie not found"});
    res.json(movie);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
