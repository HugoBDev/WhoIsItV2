import { useParams } from "react-router-dom";
import { MovieAPI } from "../../api/movie.api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./person-details.scsss"

function PersonDetails() {
    const {id} = useParams()
    const movieApi = new MovieAPI()

    useEffect(() => {
        movieApi.getPersonDetails(parseInt(id!))
    },[])
}