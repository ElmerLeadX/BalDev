/* eslint-disable react/prop-types */
import { useContext } from "react";
import { QuizContext } from "../../lib/quizContext";
import { useNavigate } from "react-router-dom";
import male from "../../assets/male.jpg";
import female from "../../assets/female.jpg";
import "./Genderoption.css";
import Arrow from "../Arrow/Arrow";

const Questionoption = ({
	question,
	/* hide2 = false, */ page,
	setShowNextPage,
	active,
	setActive,
	className,
	lang,
}) => {
	const navigate = useNavigate();
	const data = useContext(QuizContext);
  const males = lang === "fr" ? "Homme": "Male";
  const females = lang === "fr" ? "Femme": "Female";
  const nones = lang === "fr" ? "Aucun": "None";
	/* const visible2 = hide2 === "true" ? "hide" : ""; */

	const handleClick = (ev, option) => {
    data.gender = option;
		setShowNextPage(true);
		setActive(option);
    navigate("/quiz");
	};

	return (
		<section key={page} className={`gen-question ${className}`}>
			<article className="gen-question-card">
				<h2>{question}</h2>
				<div className="gen-options roll-out">
					<button
						className={active === males ? "active" : ""}
						onClick={(ev) => handleClick(ev, males)}
					>
						<img src={male} alt="male" />
						{lang === "fr" ? "Styles pour hommes" : "Men's styles"}
					</button>
					<button
						className={active === females ? "active" : ""}
						onClick={(ev) => handleClick(ev, females)}
					>
						<img src={female} alt="male" />
						{lang === "fr" ? "Styles pour femmes" : "Women's styles"}
					</button>
				</div>
				<div className="gen-options roll-out">
					<button
						className={active === nones ? "none-pref active" : "none-pref"}
						onClick={(ev) => handleClick(ev, nones)}
					>
						{lang === "fr" ? "Aucune préférence" : "No preference"}
						<Arrow color="#000000" flip="false" />
					</button>
				</div>
			</article>
		</section>
	);
};

export default Questionoption;
