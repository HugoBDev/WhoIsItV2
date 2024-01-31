import { MovieAPI } from "../api/movie.api";

const movieGenres = new MovieAPI();

/**
 * Cette fonction récupère les genres de films à partir de l'API et retourne une Promise.
 * @returns Promise<any[]>
 */
function fetchMovieGenres(): Promise<any[]> {
  return movieGenres.getGenres().then((data) => data.genres);
}

/**
 * Cette fonction prend en paramètres un tableau d'id (ceux des genres TMDB)
 * et retourne un tableau de string ["comedie", "drame", "aventure"].
 * @param idList [17, 12, 123]
 * @returns Promise<string[]>
 */
function getGenresById(idList: number[]): Promise<string[]> {
  return fetchMovieGenres().then((movieGenreList) => {
    const genreNames: string[] = [];
    idList.forEach((id) => {
      const genre = movieGenreList.find((genre) => id === genre.id);
      if (genre) {
        genreNames.push(genre.name);
      }
    });
    return genreNames;
  });
}

export default getGenresById;