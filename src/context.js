import React, { useState, useContext, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [cocktails, setCocktails] = useState([]);

	const fetchData = async () => {
		try {
			//Lay du lieu
			const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json();
			//console.log(data);

			const { drinks } = data;

			//Neu co
			if (drinks) {
				const newCocktail = drinks.map((item) => {
					const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
						item;
					return {
						id: idDrink,
						name: strDrink,
						img: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					};
				});

				//set cocktails
				setCocktails(newCocktail);
			} else {
				setCocktails([]);
			}

			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [searchTerm]);

	return <AppContext.Provider value="valus">{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
