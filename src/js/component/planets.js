import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Planets = () => {

  const { store, actions } = useContext(Context);
  
 

	return (
    <>
    {
      store.planets.map((planet, index) =>{
        if(index>1){return(
          <div key={index} className="card" Style="width: 18rem;">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              
              <Link to={"/planetsView/" + planet.uid}>
                  <a href="#" className="btn btn-primary" >More Details</a>
                  </Link>
                  <a href="#" className="btn btn-secondary" onClick={()=>actions.addToFavourites(`${planet.name}`)}>♡</a>
            </div>
          </div>
        )  }
        
      })
    }
    
        
    </>
	)
};


export default Planets;