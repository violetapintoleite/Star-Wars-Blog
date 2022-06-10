import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Planets = () => {

  const { store, actions } = useContext(Context);
  
 

	return (
    <>
    {
      store.planets.map((planet, index) =>{
        return(
          <div key={index} className="card" Style="width: 18rem;">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text">{planet.url}</p>
              <Link to={"/single/" + index} url={planet.url} onClick={actions.loadPlanetsData(`${planet.url}`)}>
                  <a href="#" className="btn btn-primary" >Go somewhere</a>
                  </Link>
            </div>
          </div>
        )  
      })
    }
    
        
    </>
	)
};


export default Planets;