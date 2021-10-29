import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { actions, store } = useContext(Context);
	return (
		<div>
			<h1>Login View</h1>
			{store.isLoggedIn ? (
				<Redirect to={"/home"} />
			) : (
				<div>
					<p>You are not logged in. Please, do it before see the Star Wars Blog</p>
					<button onClick={() => actions.login()}>Fake login</button>
				</div>
			)}
		</div>
	);
};
