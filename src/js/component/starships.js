import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Starships = () => {

  const { store, actions } = useContext(Context);
  
 

	return (
    <>
    {
      store.starships.map((starship, index) =>{
        return(
          <div key={index} className="card" Style="width: 18rem;">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">{starship.name}</h5>
              <p className="card-text">{starship.url}</p>
              <Link to={"/single/" + index} url={starship.url}>
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


export default Starships;