import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsView = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    useEffect(()=>{
        actions.loadPlanetsData(params.uid)
    })
    

	return (
		<div className="jumbotron">
			
			<h1 className="display-4">{store.person.name}</h1>
			<div className="row">
				<div className="col">
					<img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}></img>
				</div>
				<div className="col">
					<h3>Climate: {store.planet.climate}</h3>
					<h3>Population: {store.planet.population}</h3>
					<h3>Terrain: {store.planet.terrain}</h3>
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

