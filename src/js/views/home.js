import React from "react";

import "../../styles/home.css";

import  People    from "../component/people.js";
import Planets from "../component/planets.js";
import Starships from "../component/starships.js";

export const Home = () => (
	<div className="text-center mt-5">
		<h2>People</h2>
		<div class="container-fluid py-2">
			<div class="d-flex flex-row flex-nowrap">
				<People/>
			</div>
		</div>
		
		<h2>Planets</h2>
		<div class="container-fluid py-2">
			<div class="d-flex flex-row flex-nowrap">
				<Planets/>
			</div>
		</div>
		<h2>Starships</h2>
		<div class="container-fluid py-2">
			<div class="d-flex flex-row flex-nowrap">
				<Starships/>
			</div>
		</div>
	</div>
);

