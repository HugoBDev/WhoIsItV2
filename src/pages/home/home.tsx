import { useEffect, useState } from "react";
import MovieCardComponent from "../../components/movieCardComponent/movieCard.component";
import { MovieCardModel } from "../../models/movieCard.model";
import { MovieAPI } from "../../api/movie.api";
import "./home.scss";
import getGenresById from "../../services/genre.service";

const movieApi = new MovieAPI();

function Home() {
  //? ici le state doit etre une liste de MovieCardModel sous forme de tableau(sinon on peut pas map dedans), de base ce tableau est vide//
  const [movieList, setMovieList] = useState<MovieCardModel[]>([]);

 
  movieApi.getPersonDetails(11)
  .then((data) => console.log(data)
  )
  
  
  useEffect(() => {
    //? .1 Ici on appelle tous les genres 
    movieApi
      .getGenres()
      .then((res : any[]) => {
        //?.2 Ici la "res", c'est les genres, on est surs de les avoirs
        //?.3 Du coup, on a tout pour appeler nos films avec les attributs de MovieModel
        movieApi.getTopRatedMovie(2).then((data) => {
          const topRatedMovies: MovieCardModel[] = data.results.map((el: any) => ({
            id: el.id,
            title: el.title,
            //?4. On utilise la fonction qui prend en paramètres, les ids(des films), et les genres[{id, name}]
            genres: getGenresById(el.genre_ids, res),        
            poster_path: `https://image.tmdb.org/t/p/original/${el.poster_path}`,
          }));
          setMovieList(topRatedMovies);
        });

      })
      .catch((error) => console.log(error))
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
