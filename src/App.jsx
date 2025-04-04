import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Video from "./components/Video/Video";
import Footer from "./components/Footer/Footer";
import { QuizContext } from "./lib/quizContext";
import { detectLanguage, getURLLang, getURLEmail } from "./lib/actions";

function App() {
	const navigate = useNavigate();
	const data = useContext(QuizContext);
	const [lang, setLang] = useState("fr");

	useEffect(() => {
		const urlemail = getURLEmail();
		if (urlemail) {
			data.email = urlemail;
		}
		const url = getURLLang();
		const currentLang = detectLanguage();
		if (url !== null) {
			data.lang = url;
			setLang(url);
		} else {
			data.lang = currentLang;
			setLang(currentLang);
		}
	}, [lang, data, setLang]);
	return (
		<QuizContext.Provider value={data}>
			<Navbar lang={lang} setLang={setLang} />
			{lang === "en" ? (
				<Hero
					title="Wich Eyewear Shape Suits You Best?"
					subtitle="Quiz"
					signed=""
					body="Discover the frame styles that match your style and personality—because, yes, we <i>all</i> have an oval face!"
					phrase=""
					button="Start Now"
					gopage={() => navigate("/gender")}
				>
					<Video src="https://cdn.shopify.com/videos/c/o/v/90983ca74c784c75bd02d0b86c466b7d.mp4" />
				</Hero>
			) : (
				<Hero
					title="Quelles Formes de Lunettes Vous Convient le Mieux?"
					subtitle="Quiz"
					signed=""
					body="Découvrez les styles de montures qui correspondent à votre style et à votre personnalité—car, oui, nous avons <i>tous</i> un visage ovale!"
					phrase=""
					button="Commencez maintenant"
					gopage={() => navigate("/gender")}
				>
					<Video src="https://cdn.shopify.com/videos/c/o/v/90983ca74c784c75bd02d0b86c466b7d.mp4" />
				</Hero>
			)}
			<Footer copy="© 2025, BAR À LUNETTES MARIE-SOPHIE DION" />
		</QuizContext.Provider>
	);
}

export default App;
