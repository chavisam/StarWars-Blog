import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { actions, store } = useContext(Context);
	return (
		<div className="mx-auto text-center">
			<h1 className="text-warning">Welcome to Our Star Wars Blog</h1>

			{store.isLoggedIn ? (
				<Redirect to={"/home"} />
			) : (
				<div>
					<button className="btn btn-warning" onClick={() => actions.login()}>
						Go into Jedi&apos;s World !
					</button>
				</div>
			)}
		</div>
	);
};
