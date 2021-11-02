const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//we create the variable to login
			isLoggedIn: false,
			//we create the variable for favorites
			favorites: 0,
			//we create variable Characters
			nextPeople: "",
			nextPlanets: "",
			nextStarships: "",

			people: [],
			planets: [],
			starships: [],
			characterData: {}
		},
		actions: {
			//LOGIN
			login: _bool => setStore({ isLoggedIn: true }),
			// LOGOUT
			logout: _bool => setStore({ isLoggedIn: false }),

			//we use the starwars API
			loadData: type_info => {
				fetch(`https://www.swapi.tech/api/${type_info}`)
					.then(response => {
						//console.log(response.ok);
						console.log(response.status);
						return response.json();
					})
					.then(data => {
						setStore({ [type_info]: data.results });
						setStore({ ["next" + type_info]: data.next });
					})
					.catch(error => console.error(error));
			},

			//function to see 10 more
			ten_more: data => {
				const store = getStore();
				//alert(store[`next${data}`]);
				let uri = store[`next${data}`];

				fetch(uri)
					.then(response => {
						console.log(response.status);
						return response.json();
					})
					.then(resp => {
						console.log(resp.results);
						setStore({ [data]: resp.results });
						setStore({ ["next" + data]: resp.next });
					})
					.catch(error => console.error(error));
			},
			//FUNCTION TO FETCH A CHARACTER DATA
			getCharacterData: (id, type) => {
				setStore({ characterData: {} });
				fetch(`https://www.swapi.tech/api/${type}/${id}`)
					.then(response => {
						console.log(response.status);
						return response.json();
					})
					.then(resp => {
						setStore({ characterData: resp });
					})
					.catch(error => console.error(error));
			}
		}
	};
};

export default getState;
