import { useParams } from "react-router-dom";
import { MovieAPI } from "../../api/movie.api";
import { useEffect, useState } from "react";
import { MovieDetailsModel } from "../../models/movieDetails.model";
import { Link } from "react-router-dom";

import "./movie-details.scss"

function MovieDetails() {
    const  {id}   = useParams();
    const movieApi =  new MovieAPI();
    const [movieDetail, setMovieDetail] = useState<MovieDetailsModel>()

    useEffect(() =>{
        //ParseInt = transforme un string en number et le "!" dit que ce ne sera pas undefined//
        movieApi.getMovieDetails(parseInt(id!),true)
        .then((data)=>{
            console.log(data);
            const currMovieDetails : MovieDetailsModel = {
            title : data.title,
            release_date: data.release_date,
            poster_path : `https://image.tmdb.org/t/p/original/${data.poster_path}`,
            overview : data.overview
            }
            setMovieDetail(currMovieDetails)
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
            <Link className="back-btn" to="/home">RETOUR</Link>
        </>
    )
    }
    export default MovieDetails