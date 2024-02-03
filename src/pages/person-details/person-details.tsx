import { useParams } from "react-router-dom";
import { MovieAPI } from "../../api/movie.api";
import { useEffect, useState } from "react";
import "./person-details.scss";
import PersonDetailsModel from "../../models/person-details.model";
import MovieCardComponent from "../../components/movieCardComponent/movieCard.component";
import { MovieCardModel } from "../../models/movieCard.model";
import getGenresById from "../../services/genre.service";

function PersonDetails() {
  const { personid } = useParams();
  const movieApi = new MovieAPI();
  const [personDetail, setPersondetail] = useState<PersonDetailsModel>();
  const [personMovieCareer, setPersonMovieCareer] = useState<MovieCardModel[]>([]);
  let genres : string[]
  const Getgenres = movieApi.getGenres().then((data) => 
  genres = data )


  useEffect(() => {
    movieApi
      .getPersonDetails(parseInt(personid!), true)
      .then((data) => {
        console.log(data);
        console.log(data.combined_credits.cast);
        
        const currPersonDetails: PersonDetailsModel = {
          id: data.id,
          name: data.name,
          birthday: data.birthday,
          known_for_department: data.known_for_department,
          profile_path: `https://image.tmdb.org/t/p/original/${data.profile_path}`,
        };
        setPersondetail(currPersonDetails);
        
        const currPersonMovie: MovieCardModel[] = data.combined_credits.cast.map((el: any) => ({
          id: el.id,
          title: el.title,
          //?4. On utilise la fonction qui prend en paramètres, les ids(des films), et les genres[{id, name}]
          genres: getGenresById(el.genre_ids, genres),        
          poster_path: `https://image.tmdb.org/t/p/original/${el.poster_path}`,
        }));
        setPersonMovieCareer(currPersonMovie)
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div className="person-details-card">
        <div id="img-container">
          <img src={personDetail?.profile_path} alt="person-details-poster" />
        </div>
        <div className="person-details-bottom-gradient">
          <div className="person-details-name"> {personDetail?.name}</div>
          <div className="person-details-birthday">
            Né(é) le : {personDetail?.birthday}
          </div>
          <div>{personDetail?.known_for_department} </div>
        </div>
      </div>
      <div className="crew-wrapper">
      {personMovieCareer.map((moviemap, index) => (
        <MovieCardComponent key={index} movie={moviemap} />
      ))}
      </div>
    </>
  );
}
export default PersonDetails;
