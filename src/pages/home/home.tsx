
import { useEffect, useState } from "react";
import MovieCardComponent from "../../components/movieCard/movieCard";
import { MovieCardModel } from "../../models/movieCard.model";
import { MovieAPI } from "../../api/movie.api";
import "./home.scss"
const movieApi = new MovieAPI();

function Home() {
  //? ici le state doit etre une liste de MovieCardModel sous forme de tableau(sinon on peut pas map dedans), de base ce tableau est vide//
  const [movieList, setMovieList] = useState<MovieCardModel[]>([]);

movieApi.getGenres()
.then((data) => console.log(data)


)
  useEffect(() => {
    movieApi.getTopRatedMovie().then((data) => {
      const topRatedMovies: MovieCardModel[] = data.results.map((el: any) => ({
        id: el.id,
        title: el.title,
        poster_path: `https://image.tmdb.org/t/p/original/${el.poster_path}`
      }));
      setMovieList(topRatedMovies);
    });
  }, []);

  return (
    <div className="movies-cards-wrapper">
      {movieList.map((moviemap, index) => (
        <MovieCardComponent key={index} movie={moviemap} />
      ))}
    </div>
  );
}
export default Home;
