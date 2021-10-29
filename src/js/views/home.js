import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Card } from "../component/cards";

export const Home = () => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.loadCharacters();
	}, []);

	return (
		<div>
			{store.isLoggedIn ? (
				<div className="container-fluid">
					<div className="row">
						<h1 className="text-center">Characters</h1>
					</div>
					<div className="row">
						{/* ADDING CARDS */}
						<Card />
					</div>
				</div>
			) : (
				<Redirect to={"/"} />
			)}
		</div>
	);
};
