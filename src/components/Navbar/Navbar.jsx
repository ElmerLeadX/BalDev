/* eslint-disable react/prop-types */
import Cup from "../Cup/Cup";
import "./Navbar.css";
import { useContext } from "react";
import { QuizContext } from "../../lib/quizContext";

const Navbar = ({lang, setLang, flag=true, result=false}) => {
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
			{flag && (
				<button onClick={() => handleLang()} className={lang}>
					{lang === "fr" ? "EN" : "FR"}
				</button>
			)}
			{result && (
				<div className="message-container">
					<Cup color="#ffffff" Width="38.5" Height="56" />
					{lang === "fr" ? (
						<div className="message">
							<span>Bien joué! Vos résultats sont en route par courriel.</span>
							<span>{`(D’ici quelques minutes, pensez à jeter un œil à vos indésirables, juste au cas où!)`}</span>
						</div>
					) : (
						<div className="message">
							<span>Well done! Your results are on the way by email.</span>
							<span>{`(In a few minutes, be sure to check your spam, just in case!)`}</span>
						</div>
					)}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
