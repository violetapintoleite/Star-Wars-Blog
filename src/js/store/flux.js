const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      people: [],
      planets: [],
      starships: [],
      person: [],
      planet: [],
      starship: [],
      favourites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
     
      loadSomeData: () => {
        const store = getStore();

        fetch("https://www.swapi.tech/api/people/", { method: "GET" })
          .then((resp) => resp.json())
          .then((data) => setStore({ people: data.results }));

        fetch("https://www.swapi.tech/api/planets/", { method: "GET" })
          .then((resp) => resp.json())
          .then((data) => setStore({ planets: data.results }));

        fetch("https://www.swapi.tech/api/starships/", { method: "GET" })
          .then((resp) => resp.json())
          .then((data) => setStore({ starships: data.results }));
      },
      loadPeopleData: (uid) => {
        const store = getStore();

        fetch("https://www.swapi.tech/api/people/" + uid, { method: "GET" })
          .then((resp) => resp.json())
          .then((data) => setStore({ person: data.result.properties }));
      },
      loadPlanetsData: (uid) => {
        const store = getStore();

        fetch("https://www.swapi.tech/api/planets/" + uid, { method: "GET" })
          .then((resp) => resp.json())
          .then((data) => setStore({ planet: data.result.properties }));
        console.log(store.planet);
      },
      loadStarshipsData: (uid) => {
        const store = getStore();

        fetch("https://www.swapi.tech/api/starships/" + uid, { method: "GET" })
          .then((resp) => resp.json())
          .then((data) => setStore({ starship: data.result.properties }));
        console.log(store.starship);
      },
      deleteFromFavourites: (name) => {
        // gets the store value
		const store = getStore();
		// gets the filtered list excluding the name and item
        const filteredList = store.favourites.filter((item) => item !== name);
        setStore({ favourites: [...filteredList] });
        console.log(store.favourites);
      },
      addToFavourites: (name) => {
        const store = getStore();
        setStore({ favourites: [...store.favourites, name] });
        console.log(store.favourites);
      },
     
    },
  };
};

export default getState;
