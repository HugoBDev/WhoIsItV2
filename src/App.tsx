import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "../src/pages/home"
import MovieDetails from "./pages/movie-details";
import Layout from "./pages/layout";



function App() {

return ( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="moviedetails/:id" element={<MovieDetails/>}/>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
 
}

export default App
