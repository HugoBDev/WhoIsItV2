import { useParams } from "react-router-dom";
import { MovieAPI } from "../../api/movie.api";
import { useEffect, useState } from "react";
import { MovieDetailsModel } from "../../models/movieDetails.model";
import { Link } from "react-router-dom";

import "./movie-details.scss"
import PersonCard from "../../components/personCardComponent/personCard.component";
import { PersonModel } from "../../models/person.model";

function MovieDetails() {
    const  {id}   = useParams();
    const movieApi =  new MovieAPI();
    const [movieDetail, setMovieDetail] = useState<MovieDetailsModel>()
    const [personsDetail, setPersonsDetail] = useState<PersonModel[]>([])

    useEffect(() =>{
        //ParseInt = transforme un string en number et le "!" dit que ce ne sera pas undefined//
        movieApi.getMovieDetails(parseInt(id!),true)
        .then((data)=>{
            const currMovieDetails : MovieDetailsModel = {
            title : data.title,
            release_date: data.release_date,
            poster_path : `https://image.tmdb.org/t/p/original/${data.poster_path}`,
            director : data.credits.crew.find((e : any) => e.known_for_department === "Directing" && e.department === "Directing").name,
            overview : data.overview,  
            cast : data.credits.cast  
            }

            const currCrew : PersonModel[] = data.credits.cast.slice(0,5).map((actor : any) => ({
                personId : actor.id,
                name : actor.name,
                movieCharacter : actor.character,
                department : actor.known_for_department,
                profile_path : `https://image.tmdb.org/t/p/original/${actor.profile_path}`   
            }))
            setMovieDetail(currMovieDetails)
            setPersonsDetail(currCrew)
        })       
    }, []);
    return(
        <>
            <div className="img-container">
                <img src={movieDetail?.poster_path} alt="" />
            </div>
            <div className="infos-wrapper">
                <div className="title">{movieDetail?.title}</div>
                <div className="realease-date">{movieDetail?.release_date}</div>
                <div className="overview">{movieDetail?.overview}</div>
                
            </div>
            <div className="crew-wrapper">
            {personsDetail.map((person, index) => (
                <PersonCard key={index} person={person} />
            ))}
        </div>

            <Link className="back-btn" to="/home">RETOUR</Link>
        </>
    )
    }
    export default MovieDetails