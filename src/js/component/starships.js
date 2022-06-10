import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Starships = () => {

  const { store, actions } = useContext(Context);
  
 

	return (
    <>
    {
      store.starships.map((starship, index) =>{
        if(index>1){
        return(
          <div key={index} className="card" Style="width: 18rem;">
            <img src={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{starship.name}</h5>
              <p className="card-text">{starship.url}</p>
              <Link to={"/starshipsView/" + starship.uid}>
                  <a href="#" className="btn btn-primary">More Details</a>
                </Link>
              
            </div>
          </div>
        ) } 
      })
      
      
    }
    
        
    </>
	)
};


export default Starships;