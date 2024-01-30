import { MovieAPI } from "../api/movie.api"


const movieGenres = new MovieAPI();

let movieGenreList: any[] = [];

movieGenres
    .getGenres()
    .then((data) => {
      movieGenreList = data.genres;
    })
    .catch((error) => console.log(error));

/**
 * Cete fonction prend en paramètres un tableau d'id(ceux des genres TMDB) et retourne un tableau de string
 * [17,12,123]=>["comedie", "drame", "aventure"]
 *
 * @param idList [17,12,123]
 * @returns ["comedie", "drame", "aventure"]
 */

    function getGenresById(idList:number[]) :string[]{
    let genreNames : string[] = []
    idList.map((id) =>{
        movieGenreList.map((genre : any)=>{
            if (id ===genre.id){
                genreNames.push(genre.name)
            }
        })
    })
    return genreNames
    
  }

  export default getGenresById


