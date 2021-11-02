const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//we create the variable to login
			isLoggedIn: false,
			//we create the variable for favorites
			favorites: 0,
			//we create variable Characters
			characters: {}
		},
		actions: {
			//LOGIN
			login: _bool => setStore({ isLoggedIn: true }),
			// LOGOUT
			logout: _bool => setStore({ isLoggedIn: false }),

			//we use the starwars API
			loadCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(response => {
						console.log(response.ok);
						console.log(response.status);
						return response.json();
					})
					.then(data => {
						setStore({ characters: data });
						console.log(data);
					})
					.catch(error => console.error(error));
			},
			addFavorite: item => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] });
			},
			removeFavorite: index => {
				const store = getStore();
				const newFavs = [...store.favorites];
				newFavs.splice(index, 1);
				setStore({ favorites: newFavs });
			}
		}
	};
};

export default getState;
