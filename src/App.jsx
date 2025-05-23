import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Video from "./components/Video/Video";
import { QuizContext } from "./lib/quizContext";
import { detectLanguage, getURLLang, getURLEmail } from "./lib/actions";

function App() {
	const navigate = useNavigate();
	const data = useContext(QuizContext);
	const [lang, setLang] = useState("fr");
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
					title="Which frames suit you best?"
					subtitle="Quiz"
					signed="Eyewear Bar"
					body="Take 30 seconds to discover through our quiz all the glasses that harmonize with your unique style."
					phrase=""
					button="Start the quiz"
					review="Thanks to the quiz and your advice, no more trying on 100 frames or more. What a relief!"
					author="- Nathalie L -"
					gopage={() => navigate("/gender")}
				>
					<Video
						key={lang}
						footer="Marie-Sophie Dion, Optician, Designer and CEO of the Eyewear Bar"
						src="https://cdn.shopify.com/videos/c/o/v/4aa049c5c59f4f0bac8fbae099012ccc.mp4"
						btn="Click for Sound"
					/>
				</Hero>
			) : (
				<Hero
					title="Quelles formes vous vont le mieux?"
					subtitle="Quiz"
					signed="Bar à Lunettes"
					body="Prenez 30 secondes pour découvrir à travers notre quiz toutes les formes de verres qui s’harmonisent à votre style unique."
					phrase=""
					button="Commencez le quiz"
					review="« Grâce au quiz et vos conseils, fini les essayages de 100 montures et plus. Quel soulagement! »"
					author="- Nathalie L -"
					gopage={() => navigate("/gender")}
				>
					<Video
						key={lang}
						footer="Marie-Sophie Dion, Opticienne, Designer et PDG des Bar à Lunettes"
						src="https://cdn.shopify.com/videos/c/o/v/ae3aa2fb83f845f59d3a92773cb15c1a.mp4"
						btn="Cliquez pour le son"
					/>
				</Hero>
			)}
		</QuizContext.Provider>
	);
}

export default App;
