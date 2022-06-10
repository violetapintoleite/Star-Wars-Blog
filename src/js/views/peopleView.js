import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleView = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

    useEffect(()=>{
        actions.loadPeopleData(params.uid)
    })
    

	return (
		<div className="jumbotron">
			<h1 className="display-4">{store.person.name}</h1>
<h3>Gender: {store.person.gender}</h3>
<h3>Eye Color: {store.person.eye_color}</h3>
<h3>Hair Color: {store.person.hair_color}</h3>
<h3>Height: {store.person.height}</h3>
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>

	);

	
};


