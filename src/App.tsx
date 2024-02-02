import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/home"
import MovieDetails from "./pages/movie-details/movie-details";
import Layout from "./pages/layout/layout";
import PersonDetails from "./pages/person-details/person-details";



function App() {

return ( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="moviedetails/:id" element={<MovieDetails/>}/>
        <Route path="persondetails/:personid" element={<PersonDetails/>}/>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
 
}

export default App
