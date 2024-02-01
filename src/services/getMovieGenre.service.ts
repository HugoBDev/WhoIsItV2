import { MovieAPI } from "../api/movie.api";

const movieGenres = new MovieAPI();
/**
 * Cette fonction prend en paramètres un tableau d'id (ceux des genres TMDB)
 * et retourne un tableau de string ["comedie", "drame", "aventure"].
 * @param idList [17, 12, 123]
 * @returns Promise<string[]>
 */
function getGenresById(idList: number[], movieGenreList: any[]): string[] {
  if (movieGenreList.length === 0){
    console.error('la liste des genres est vide')
    return []
  } 
  let genreNames : string[] = []
  idList.forEach((id) => {
    const genre = movieGenreList.find((genre: any) => id === genre.id);
    if (genre) {
      genreNames.push(genre.name);
    }
  }); 
  
  return genreNames
}

export default getGenresById;
