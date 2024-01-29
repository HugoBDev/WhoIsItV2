import "./movieCard.scss";
import "../chip/Chip.tsx";
import Chip from "../chip/Chip.tsx";
import { MovieCardModel } from "../../models/movieCard.model";
import { Link } from "react-router-dom";

const MovieCardComponent = ({ movie }: { movie: MovieCardModel }) => {
  return (
    <div className="movie-card">
      <div id="img-container">
        <img src={movie.poster_path} alt="oppenheimer poster" />
      </div>
      <div className="bottom-gradient">
        <div className="movie-genres-container">
          <Chip title="Comédie" />
          <Chip title="Aventure" />
          <Chip title="Drama" />
        </div>
        <div className="moviecard-title"> {movie.title}</div>
        <Link to={`/moviedetails/${movie.id}`} className="moviecard-moreinfos">
          Plus d'infos
        </Link>
      </div>
    </div>
  );
};
export default MovieCardComponent;
