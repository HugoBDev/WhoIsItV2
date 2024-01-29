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

return ( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="moviedetails" element={<MovieDetails/>}/>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
 
}

export default App
