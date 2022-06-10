import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/cards.css";

const People = () => {

  const { store, actions } = useContext(Context);
  
 

	return (
    <>
    {
      store.people.map((person, index) =>{
        return(
          <div key={index} className="card">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <p className="card-text">{person.url}</p>
              <Link to={"/single/" + index} url={person.url} onClick={actions.loadSpecificData(`${person.url}`)}>
                <a href="#" className="btn btn-primary">Go somewhere</a>
                </Link>
              
            </div>
          </div>
        )  
      })
    }  
    </>
	)
};


export default People;