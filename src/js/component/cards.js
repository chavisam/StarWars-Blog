import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import no_dispo from "./../../img/nodispo.jpg";

export const Card = props => {
	const { actions, store } = useContext(Context);

	const addToFavorite = item => {
		actions.addToFavorite(item);
	};
	const isExistFavorite = item => {
		let existFavorite = store.favorites.find(element => element == item);
		if (existFavorite == undefined) {
			return false;
		} else {
			return true;
		}
	};
  
	useEffect(() => {
		store.isLoggedIn ? actions.loadData(`${props.type_info}`) : "";
	}, []);

	return (
		<div className="scroll">
			{store[props.type_info].length > 0 ? (
				store[props.type_info].map((item, index) => {
					return (
						<div key={index} className="card">
							<div className="row">
								<div className="col-auto mx-auto">
									<img
										src={`https://starwars-visualguide.com/assets/img/${
											props.type_info == "people" ? "characters" : props.type_info
										}/${item.uid}.jpg`}
										onError={e => {
											e.target.src = no_dispo;
										}}
										className="characters card-img-top mx-auto"
										alt="..."
									/>
								</div>
							</div>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									<h6>Eye Color: {item.eye_color}</h6>
									<h6>Eye Color: {item.hair_color}</h6>
								</p>
								<button
									className="btn btn-primary mb-2"
									onClick={() => actions.getCharacterData(item.uid, props.type_info)}>
									<Link to={"/info/" + index + 1}>
										<span className="text-warning ">Más Info</span>
									</Link>
								</button>
								{isExistFavorite(item) ? (
									<button className="bg-success">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-suit-heart"
											viewBox="0 0 16 16">
											<path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
										</svg>
									</button>
								) : (
									<button onClick={() => addToFavorite(item)}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-suit-heart"
											viewBox="0 0 16 16">
											<path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
										</svg>
									</button>
								)}              
							</div>
						</div>
					);
				})
			) : (
				<div className="spinner-grow text-success mx-auto" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			)}
		</div>
	);
};

Card.propTypes = {
	type_info: PropTypes.string
};
