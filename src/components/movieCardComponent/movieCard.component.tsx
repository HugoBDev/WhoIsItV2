import "./movieCard.scss";
import Chip from "../chipComponent/Chip.tsx";
import { MovieCardModel } from "../../models/movieCard.model.ts";
import { Link } from "react-router-dom";

const MovieCardComponent = ({ movie }: { movie: MovieCardModel }) => {

  return (
    <Link  to={`/moviedetails/${movie.id}`} className="movie-card">
      <div id="img-container">
        <img src={movie.poster_path} alt="oppenheimer poster" />
      </div>
      <div className="bottom-gradient">
        <div className="movie-genres-container">
          {movie.genres.map((genremap, index) => (
            <Chip key={index} name={genremap} />
          ))}
        </div>
        <div className="moviecard-title"> {movie.title}</div>
        <div className="moviecard-moreinfos">
          Plus d'infos
        </div>
      </div>
    </Link>
  );
};
export default MovieCardComponent;
