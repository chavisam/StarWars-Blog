import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		store.isLoggedIn ? actions.loadData(`${props.type_info}`) : "";
	}, []);

	return (
		<div className="row scroll">
			{store[props.type_info].length > 0 ? (
				store[props.type_info].map((item, index) => {
					return (
						<div key={index} className="card col-auto mx-auto m-4">
							<img
								// THIS IS THE LOREMPIXEL!!!!!!
								src="http://lorempixel.com/200/200/people/"
								className="characters card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">....</p>

								<button
									className="btn btn-primary"
									onClick={() => actions.getCharacterData(item.uid, props.type_info)}>
									<Link to={"/info/" + index + 1}>
										<span className="text-warning">Más Info</span>
									</Link>
								</button>
							</div>
						</div>
					);
				})
			) : (
				<div className="spinner-grow text-success mx-auto" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			)}
			<div className="row">
				<div className="col mx-auto">
					<button className="btn btn-warning" onClick={() => actions.ten_more(props.type_info)}>
						10 More {props.type_info}
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	type_info: PropTypes.string
};
