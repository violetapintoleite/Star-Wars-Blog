import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<>{
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
			<div className="dropdown">
  <button class="btn btn-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Favourites
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
	{store.favourites.length > 0 ?
	store.favourites.map((item, index) => 
	<li key={index}>{item} 
	<button type="button" className="btn-close" aria-label="Close" onClick={()=>actions.deleteFromFavourites(item)}></button>
	</li>) 
	: <li><a className="dropdown-item" href="#">Empty</a></li>}
  </ul>
</div>
				
			</div>
		</nav>
		}</>
	);
};
