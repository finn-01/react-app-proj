import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, img, info, glass }) => {
	return (
		<article className="cocktail">
			<div className="img-container">
				<img src={img} />
			</div>
			<div className="cocktail-footer">
				<h3>{name}</h3>
				<h4>{glass}</h4>
				<p>{info}</p>
				<Link className="btn btn-primary btn-detail" to={`/cocktail/${id}`}>
					Detail
				</Link>
			</div>
		</article>
	);
};

export default Cocktail;
