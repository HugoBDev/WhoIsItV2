import MovieCardComponent from "./components/movieCard/movieCard"
import { MovieAPI } from "./api/movie.api"
import { useEffect, useState } from "react";
import { MovieCardModel } from "./models/movieCard.model";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../src/pages/home"
import MovieDetails from "./pages/movie-details";
import Layout from "./pages/layout";
const movieApi = new MovieAPI(); 


function App() {
//   //? ici le state doit etre une liste de MovieCardModel sous forme de tableau(sinon on peut pas map dedans), de base ce tableau est vide// 
//   const [movieList, setMovieList] = useState<MovieCardModel[]>([])

 
 
//  useEffect(()=>{
//    movieApi.getTopRatedMovie()
//    .then((data)=>{
//     const topRatedMovies : MovieCardModel[] = data.results.map((el : any) =>({
//       title : el.title,
//       poster_path : `https://image.tmdb.org/t/p/original/${el.poster_path}`
//     }))
//     setMovieList(topRatedMovies)
//    })

//  },[])
 
  

//   return (
//     <div>
//       {movieList.map((moviemap, index)=>(
//         <MovieCardComponent key={index} movie={moviemap}/>
//       ))}

//     </div>




//   )
  

return ( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="home" index element={<Home/>}/>
        <Route path="moviedetails" element={<MovieDetails/>}/>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)


















  
}

export default App
