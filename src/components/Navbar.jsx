import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<Link to="/">
					<h2 className="focus-in-contract-bck">LOGO</h2>
				</Link>
				<ul className="nav-links">
					<li className="wobble-hor-bottom">
						<Link to="/">HOME</Link>
					</li>
					<li className="wobble-hor-bottom">
						<Link to="/about">ABOUT</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
