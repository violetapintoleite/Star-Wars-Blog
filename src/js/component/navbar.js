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
			<div class="dropdown">
  <button class="btn btn-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Favourites
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
	{store.favourites.length > 0 ? 
	store.favourites.map((item, index)=>{
		<li>{item.name}</li>
	}) : <li><a class="dropdown-item" href="#">Empty</a></li>}
    
  </ul>
</div>
				
			</div>
		</nav>
		}</>
	);
};
