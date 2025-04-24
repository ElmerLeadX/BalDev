/* eslint-disable react/prop-types */
import Arrow from "../Arrow/Arrow";
import "./Navbar.css";
import { useContext } from "react";
import { QuizContext } from "../../lib/quizContext";

const Navbar = ({lang, setLang, flag=true}) => {
	const data = useContext(QuizContext);
	const handleLang = () => {
		if(lang === "fr"){
			history.pushState(null, null, "?lang=en");
			setLang("en");
			data.lang = "en";
		}
		else{
			history.pushState(null, null, "?lang=fr");
			setLang("fr");
			data.lang = "fr";
		}
	}
	return (
		<nav>
			{flag &&
				<button onClick={() => handleLang()} className={lang}>{lang === "fr" ? "EN" : "FR"}</button>
			}
		</nav>
	);
};

export default Navbar;
