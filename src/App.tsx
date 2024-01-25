import MovieCard from "./components/movieCard/movieCard"
import { MovieAPI } from "./api/movie.api"

const movieApi = new MovieAPI(); 


function App() {
  movieApi.getMovieDetails(13, "es")
  .then((data)=> console.log(data)
  )
  

  return (
    <MovieCard/>
  )
    
  
}

export default App
