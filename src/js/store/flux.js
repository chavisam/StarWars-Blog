const getState = ({ setStore }) => {
	return {
		store: {
			//we create the variable to login
			isLoggedIn: false,
			//we create the variable for favorites
			favorite: 0,
			//we create variable Characters
			characters: []
		},
		actions: {
			//LOGIN
			login: _bool => setStore({ isLoggedIn: true }),
			// LOGOUT
			logout: _bool => setStore({ isLoggedIn: false }),

			//we use the starwars API
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/1")
					.then(response => {
						console.log(response.ok);
						console.log(response.status);
						console.log(response);
						return response.json();
					})
					.then(data => setStore({ characters: data }))
					.catch(error => console.error(error));
			}

			//	changeColor: (index, color) => {
			//get the store
			//const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			// const demo = store.demo.map((elm, i) => {
			// 	if (i === index) elm.background = color;
			// 	return elm;
			// });

			//reset the global store
			//setStore({ login: false });
			//}
		}
	};
};

export default getState;
