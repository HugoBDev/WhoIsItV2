import { PersonModel } from "../../models/person.model";
import "./personCard.scss";
import Chip from "../chipComponent/Chip";

const PersonCard = ({ person }: { person: PersonModel }) => {
    console.log(person);
    
  return (
   
      <div className="person-card">
        <div id="img-container">
          <img src={person.profile_path} alt="actor-poster" />
        </div>
        <div className="person-bottom-gradient">
          <div className="personcard-character"> {person.movieCharacter}</div>
          <div className="personcard-name"> {person.name}</div>
          <Chip name={person.department} />
        </div>
      </div>
    
  );
};
export default PersonCard;
