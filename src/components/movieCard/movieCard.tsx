import "./movieCard.scss"
import "../chip/Chip.tsx"
import Chip from "../chip/Chip.tsx";

const MovieCard = () => {
    return(
<div className="movie-card">
<div id="img-container">
  <img
    src="https://media.themoviedb.org/t/p/w220_and_h330_face/boAUuJBeID7VNp4L7LNMQs8mfQS.jpg"
    alt="oppenheimer poster"
  />
</div>
<div className="bottom-gradient">
  <div className="movie-genres-container">
  <Chip title="Comédie"/>
  <Chip title="Aventure"/>
  <Chip title="Drama"/>
  </div>
  <div className="moviecard-title"> L'Assassinat de Jesse James par le lâche Robert Ford </div>
  <div className="moviecard-moreinfos">Plus d'infos</div>
</div>
</div>
);
}
export default MovieCard;
