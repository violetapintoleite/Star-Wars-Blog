import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarshipsView = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    useEffect(()=>{
        actions.loadStarshipsData(params.uid)
    })
    

	return (
		<div className="jumbotron">
			<h1 className="display-4">{store.starship.name}</h1>
		
			<div className="row">
				<div className="col">
					<img src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`}></img>
				</div>
				<div className="col">
				
					<h3>Consumables: {store.starship.consumables}</h3>
					<h3>Crew: {store.starship.crew}</h3>
					<h3>Manufacturer: {store.starship.manufacturer}</h3>
					<h3>Passengers: {store.starship.passengers}</h3>
			
				</div>
			</div>
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>

	);

	
};

