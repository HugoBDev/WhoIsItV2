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
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  /**
   * 
   * @param id Ici on donne l'id du film pour lequel on veut les détails    
   * @param language 
   * @returns une Promise de type <any>
   */
  getMovieDetails(id: number, language: string = "fr"): Promise<any> {
    const queryParams: any = {
      language: language,
      api_key: environnement.API_KEY,
    };
    const url = `${environnement.api.movieDetails}${id}?${new URLSearchParams(
      queryParams
    ).toString()}`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}
