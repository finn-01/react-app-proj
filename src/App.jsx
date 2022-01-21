import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import CocktailDetail from "./pages/CocktailDetail";

import Navbar from "./components/Navbar";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route element={<Home />} exact path="/" />
				<Route element={<About />} exact path="/about" />
				<Route element={<CocktailDetail />} exact path="/cocktail/:id" />
				<Route element={<Error />} exact path="*" />
			</Routes>
		</Router>
	);
};

export default App;
