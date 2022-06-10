const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			
			people: [],
			planets: [],
			starships: [],
			person: [],
			planet:[],
			starship: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const store = getStore();

			 fetch("https://www.swapi.tech/api/people/", {method: "GET"})
			 .then((resp)=>resp.json())
			 .then(data => setStore({ "people": data.results }));

			 fetch("https://www.swapi.tech/api/planets/", {method: "GET"})
			 .then((resp)=>resp.json())
			 .then(data => setStore({ "planets": data.results }));

			 fetch("https://www.swapi.tech/api/starships/", {method: "GET"})
			 .then((resp)=>resp.json())
			 .then(data => setStore({ "starships": data.results }));


			},
			loadPeopleData:(uid) => {
				const store = getStore();
				
				fetch("https://www.swapi.tech/api/people/" + uid, {method: "GET"})
				.then((resp)=>resp.json())
				.then(data => setStore({"person": data.result.properties}));
				
			},
			loadPlanetsData:(uid) => {
					const store = getStore();
				
				fetch("https://www.swapi.tech/api/planets/" + uid, {method: "GET"})
				.then((resp)=>resp.json())
				.then(data => setStore({"planet": data.result.properties}));
				console.log(store.planet);
			},
			loadStarshipsData:(uid) => {
				const store = getStore();
				
				fetch("https://www.swapi.tech/api/starships/" + uid, {method: "GET"})
				.then((resp)=>resp.json())
				.then(data => setStore({"starship": data.result.properties}));
				console.log(store.starship);
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
