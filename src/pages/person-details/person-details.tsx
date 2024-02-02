import { useParams } from "react-router-dom";
import { MovieAPI } from "../../api/movie.api";
import { useEffect, useState } from "react";
import "./person-details.scss";
import PersonDetailsModel from "../../models/person-details.model";
import Chip from "../../components/chipComponent/Chip";


function PersonDetails() {
  const { personid } = useParams();
  const movieApi = new MovieAPI();
  const [personDetail, setPersondetail] = useState<PersonDetailsModel>();

  useEffect(() => {
    movieApi.getPersonDetails(parseInt(personid!), true).then((data) => {
      const currPersonDetails: PersonDetailsModel = {
        id: data.id,
        name: data.name,
        birthday: data.birthday,
        known_for_department: data.known_for_department,
        profile_path: `https://image.tmdb.org/t/p/original/${data.profile_path}`,
      };
      setPersondetail(currPersonDetails)
    });
  }, []);

  return (
    <>
        
        
        <div className="person-details-card">
    <div id="img-container">
      <img src={personDetail?.profile_path} alt="person-details-poster" />
    </div>
    <div className="person-details-bottom-gradient">
      <div className="person-details-name"> {personDetail?.name}</div>
      <div className="person-details-birthday">Né(é) le : {personDetail?.birthday}</div>
      <div >{personDetail?.known_for_department} </div>
    </div>
  </div>
        
    
    </>
  )
}
export default PersonDetails;
