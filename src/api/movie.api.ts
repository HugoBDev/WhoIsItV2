import { environnement } from "../../.env/environnement.ts";

//livre de recettes avec les fonctions pour récuperer les movie et autres//
//! Ici GegtTopRAtedMovie() est une fonction qui renvoie une Promise de type <any>(syntaxe React) elle doit retourner (return) une nouvelle Promise //

export class MovieAPI {
  getTopRatedMovie(page: number = 1, language: string = "fr"): Promise<any> {
    const queryParams: any = {
      page: page,
      language: language,
      api_key: environnement.API_KEY,
    };
    //'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
    const url = `${environnement.api.topRatedMovie}?${new URLSearchParams(
      queryParams
    ).toString()}`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
          resolve(data)})
        .catch((error) => reject(error));
    });
  }

  /**
   *
   * @param id Ici on donne l'id du film pour lequel on veut les détails
   * @param credits = false Ici on choisit si 'lon veut avoir les crédits du film ou non
   * @param language
   * @returns une Promise de type <any>
   */
  getMovieDetails(
    id: number,
    credits: boolean = false,
    language: string = "fr"
  ): Promise<any> {
    const queryParams: any = {
      language: language,
      api_key: environnement.API_KEY,
      append_to_response: credits ? "credits" : "",
    };
    const url = `${environnement.api.movieDetails}${id}?${new URLSearchParams(
      queryParams
    )}`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  /**
   * 
   * @param category = ici sous forme de string on choisit "movie" ou "tv" pour les TV SHOWS
   * @param language 
   * @returns 
   */
  getGenres(category: "movie" | "tv" = "movie", language: string = "fr"): Promise<any> {
    const queryParams: any = {
      language: language,
      api_key: environnement.API_KEY
    };
    const url = `${environnement.api.genresData}${category}/list?${new URLSearchParams(queryParams)}`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}
