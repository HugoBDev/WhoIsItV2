import MovieCardComponent from "./components/movieCard/movieCard"
import { MovieAPI } from "./api/movie.api"
import { useEffect, useState } from "react";
import { MovieCardModel } from "./models/movieCard.model";

const movieApi = new MovieAPI(); 


function App() {
  //? ici le state doit etre une liste de MovieCardModel sous forme de tableau(sinon on peut pas map dedans), de base ce tableau est vide// 
  const [movieList, setMovieList] = useState<MovieCardModel[]>([])

 
 
 useEffect(()=>{
   movieApi.getTopRatedMovie()
   .then((data)=>{
    const topRatedMovies : MovieCardModel[] = data.results.map((el : any) =>({
      title : el.title,
      poster_path : `https://image.tmdb.org/t/p/original/${el.poster_path}`
    }))
    setMovieList(topRatedMovies)
   })

 },[])
 
  

  return (
    <div>
      {movieList.map((moviemap, index)=>(
        <MovieCardComponent key={index} movie={moviemap}/>
      ))}

    </div>




  )
    
  
}

export default App
