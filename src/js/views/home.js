import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Card } from "../component/cards";

export const Home = () => {
	const { actions, store } = useContext(Context);

	return (
		<div>
			{store.isLoggedIn ? (
				<div className="container-fluid">
					<div className="row">
						<h1 className="text-center text-danger">Characters</h1>
						{/* ADDING CARDS */}
						<Card type_info="people" />
						<div className="col-2" />
					</div>

					<div className="row">
						<h1 className="text-center text-danger">Planets</h1>
						{/* ADDING CARDS */}
						<Card type_info="planets" />
						<div className="col-2" />
					</div>

					<div className="row">
						<h1 className="text-center text-danger">Starships</h1>
						{/* ADDING CARDS */}
						<Card type_info="starships" />
						<div className="col-2" />
					</div>
				</div>
			) : (
				<Redirect to={"/"} />
			)}
		</div>
	);
};
