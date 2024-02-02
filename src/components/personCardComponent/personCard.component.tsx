import { PersonModel } from "../../models/person.model";
import "./personCard.scss";
import Chip from "../chipComponent/Chip";
import { Link } from "react-router-dom";

const PersonCard = ({ person }: { person: PersonModel }) => {
   
    
  return (
   
      <Link to ={`/persondetails/${person.personId}`} className="person-card">
        <div id="img-container">
          <img src={person.profile_path} alt="actor-poster" />
        </div>
        <div className="person-bottom-gradient">
          <div className="personcard-character"> {person.movieCharacter}</div>
          <div className="personcard-name"> {person.name}</div>
          <Chip name={person.department} />
        </div>
      </Link>
    
  );
};
export default PersonCard;
