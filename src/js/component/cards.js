import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = () => {
	const { actions, store } = useContext(Context);

	return (
		<div className="row">
			{store.characters != {} ? (
				store.characters.results.map((item, index) => {
					return (
						<div key={index} className="card col-auto mx-auto m-4">
							<img
								src="http://lorempixel.com/200/200/people/"
								className="characters card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">
									<h6>Eye Color: {item.eye_color}</h6>
									<h6>Eye Color: {item.hair_color}</h6>
								</p>
								<a href="#" className="btn btn-primary">
									Más info
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
