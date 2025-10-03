import { Routes, Route, Link} from "react-router-dom";
import MovieList from "./components/MovieList";
import MoviePage from "./components/MoviePage";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MovieList/>} />
        <Route path="/movies/:id" element={<MoviePage/>} />
      </Routes>
    </div>
  );
}