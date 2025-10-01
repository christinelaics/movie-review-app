const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors({origin: "http://localhost:5173"}));

let movies = [
    {id: "1", title: "The Matrix", year: 1999, genre: "Sci-Fi"},
    {id: "2", title: "Spirited Away", year: 2001, genre: "Animation"}
];

app.get("/api/movies", (req, res) => {
    res.json(movies);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});
