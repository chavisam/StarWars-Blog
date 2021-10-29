import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = () => {
	const { actions, store } = useContext(Context);

	return (
		<div>
			{store.characters != [] ? (
				store.characters.map((item, index) => {
					return (
						<div key={index} classNameName="card" style="width: 18rem;">
							<img src="..." classNameName="card-img-top" alt="..." />
							<div classNameName="card-body">
								<h5 classNameName="card-title">{item.result.name}</h5>
								<p classNameName="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									content.
								</p>
								<a href="#" classNameName="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					);
				})
			) : (
				<div className="spinner-grow text-success" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			)}
		</div>
	);
};
