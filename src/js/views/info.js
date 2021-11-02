import React, { useContext, useEffect } from "react";
import { Redirect, useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Info = () => {
	const { actions, store } = useContext(Context);
	const params = useParams();
	const pref = store.characterData.result;
	return (
		<div>
			{store.isLoggedIn ? (
				store.characterData.message == "ok" ? (
					<div className="jumbotron p-5 m-3 mb-5">
						<h1 className="display-4">{pref.properties.name}</h1>
						<p className="lead"> {pref.description}</p>
						<button className="btn btn-primary">
							<Link to={"/home/"}>
								<span className="text-warning">Go Back!</span>
							</Link>
						</button>
						<hr className="my-4" />
						<p>Height: {pref.properties.height} cm.</p>
						<p>Weight: {pref.properties.mass} Kg.</p>
						<p>Hair Color: {pref.properties.hair_color}</p>
						<p>Skin Color: {pref.properties.skin_color} </p>
						<p>Eye Color: {pref.properties.eye_color}</p>
						<p>Gender: {pref.properties.gender}</p>
						<p>Year of Birth: {pref.properties.birth_year} </p>
					</div>
				) : (
					<div className="row">
						<div className="spinner-grow text-success mx-auto" role="status">
							<span className="sr-only">Loading...</span>
						</div>
						<span className="sr-only">Loading...</span>
					</div>
				)
			) : (
				<Redirect to={"/"} />
			)}
		</div>
	);
};
