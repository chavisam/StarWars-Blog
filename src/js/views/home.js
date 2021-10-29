import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { actions, store } = useContext(Context);

	return (
		<div>
			{store.isLoggedIn ? (
				<div>
					<h1>This is the Dashboard</h1>
					<button onClick={() => actions.logout()}>LogOut</button>
				</div>
			) : (
				<Redirect to={"/"} />
			)}
		</div>
	);
};
