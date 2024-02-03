import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/home"
import MovieDetails from "./pages/movie-details/movie-details";
import Layout from "./pages/layout/layout";
import PersonDetails from "./pages/person-details/person-details";
import { useState } from "react";



const App: React.FC = () => {
  const [query, setQuery] = useState<string>("");



return ( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout setQuery={setQuery}/>}>
        <Route index element={<Home query={query}/>}/>
        <Route path="moviedetails/:id" element={<MovieDetails/>}/>
        <Route path="persondetails/:personid" element={<PersonDetails/>}/>
        <Route path="*" element={<Home query={query} />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
 
}

export default App
