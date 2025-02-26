import { useEffect, useState, useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Message from "./components/Message/Message";
import Footer from "./components/Footer/Footer";
import { QuizContext } from "./lib/quizContext";
import Aviateur from "./assets/Aviateur.svg";
import Grandrond from "./assets/Grand rond.svg";
import Hexagone from "./assets/Hexagone.svg";
import Pantos from "./assets/Pantos.svg";
import Rectangle from "./assets/Rectangle.svg";
import OeilDeChat from "./assets/Oeil de chat.svg";
import Papillon from "./assets/Papillon.svg";
import PetitRond from "./assets/Petit rond.svg";
import Ovale from "./assets/Ovale.svg";
import Triangle from "./assets/Triangle.svg";
import "./Result.css";

const Result = () => {
	const data = useContext(QuizContext);
	const [lang, setLang] = useState("fr");
	const [results, SetResults] = useState([]);

	useEffect(() => {
		if (data.lang === "en") {
			history.pushState(null, null, "?lang=en");
			setLang("en");
		} else {
			history.pushState(null, null, "?lang=fr");
			setLang("fr");
		}
	}, [data.lang, setLang]);

	useEffect(() => {
		SetResults(data.results);
	}
	, [results,data.results]);

	return (
		<QuizContext.Provider value={data}>
			<div className="container">
				<Navbar lang={lang} flag={false} />
				<div className="result-mobile"></div>
				<section className="result">
					{lang === "fr" ? (
						<Message
							title="Merci d'avoir participé!"
							subtitle="Allez voir les résultats envoyés par courriel."
							body="(Si invisibles, consultez vos indésirables.)"
							secondsubttitle="Vous ne voyez pas les résultats dans vos courriels?"
							body2="Jetez un coup d'œil ci-dessous!"
							url="https://baralunettes.com/collections/optic"
							btn="Magasiner"
						/>
					) : (
						<Message
							title="Thank you for participating!"
							subtitle="Go check the results sent by email."
							body="(If invisible, check your spam.)"
							secondsubttitle="Don't see the results in your email?"
							body2="Take a look below!"
							url="https://baralunettes.com/collections/optic"
							btn="Shop Eyewear"
						/>
					)}
				</section>
				<div className="container-results">
					<section className="results-grid">
						<h2>{lang === "fr" ? "Vos résultats" : "Your results"}</h2>
						<p>
							{lang === "fr"
								? "Selon les traits de caractères que vous désirez projeter, voici les formes que le quiz du Bar à lunettes vous propose:"
								: "According to the character traits you wish to project, here are the shapes that the Bar à lunettes quiz suggests for you:"}
						</p>
						<article>
							{lang === "fr"
								? results.map((result, index) => (
										<div key={index} className="result-card">
											<div className="result-image">
												<img
													src={
														(result === "Aviateur" && Aviateur) ||
														(result === "Grand rond" && Grandrond) ||
														(result === "Oeil de chat" && OeilDeChat) ||
														(result === "Papillon" && Papillon) ||
														(result === "Ovale" && Ovale) ||
														(result === "Petit rond" && PetitRond) ||
														(result === "Hexagone" && Hexagone) ||
														(result === "Pantos" && Pantos) ||
														(result === "Rectangle" && Rectangle) ||
														(result === "Triangle" && Triangle)
													}
													alt={result.image}
												/>
											</div>
											<h3>{result}</h3>
										</div>
									))
								: results.map((result, index) => (
										<div key={index} className="result-card">
											<div className="result-image">
												<img
													src={
														(result === "Aviateur" && Aviateur) ||
														(result === "Grand rond" && Grandrond) ||
														(result === "Oeil de chat" && OeilDeChat) ||
														(result === "Papillon" && Papillon) ||
														(result === "Ovale" && Ovale) ||
														(result === "Petit rond" && PetitRond) ||
														(result === "Hexagone" && Hexagone) ||
														(result === "Pantos" && Pantos) ||
														(result === "Rectangle" && Rectangle) ||
														(result === "Triangle" && Triangle)
													}
													alt={result.image}
												/>
											</div>
											<h3>
												{(result === "Aviateur" && "Aviator") ||
													(result === "Grand rond" && "Big round") ||
													(result === "Oeil de chat" && "Cat's Eye") ||
													(result === "Papillon" && "Butterfly") ||
													(result === "Ovale" && "Oval") ||
													(result === "Petit rond" && "Small round") ||
													(result === "Hexagone" && "Hexagon") ||
													(result === "Pantos" && "Pantos") ||
													(result === "Rectangle" && "Rectangle") ||
													(result === "Triangle" && "Triangle")}
											</h3>
										</div>
									))}
						</article>
					</section>
				</div>
				{lang === "fr" ? (
					<div className="booking-section">
						<div className="booking-column">
							<p>
								Nos opticiens et stylistes expérimentés ont hâte de vous
								conseiller dans le choix des montures idéales pour vous dans l’une
								des 6 boutiques ou en appel vidéo.
							</p>
							<a
								href="https://baralunettes.com/pages/boutiques-bar-a-lunettes"
								target="_blank"
							>
								Je prends rendez-vous en boutique
							</a>
						</div>
						<div className="booking-column">
							<p>
								Vous pouvez également rencontrer un opticien en ligne via Facetime
								ou ZOOM :
							</p>
							<a
								href="https://baralunettes.as.me/schedule/68ef6492/appointment/40317996/calendar/10722194?appointmentTypeIds[]=40317996"
								target="_blank"
							>
								Je consulte un opticien en ligne
							</a>
						</div>
					</div>
				) : (
					<div className="booking-section">
						<div className="booking-column">
							<p>
								Our experienced opticians and stylists are looking forward to
								advising you on the choice of the ideal frames for you in one of
								the 6 stores or by video call.
							</p>
							<a
								href="https://baralunettes.com/en/pages/boutiques-bar-a-lunettes"
								target="_blank"
							>
								I book an appointment in store
							</a>
						</div>
						<div className="booking-column">
							<p>You can also meet an optician online via Facetime or ZOOM:</p>
							<a
								href="https://baralunettes.as.me/schedule/68ef6492/appointment/40317996/calendar/10722194?appointmentTypeIds[]=40317996"
								target="_blank"
							>
								I consult an optician online
							</a>
						</div>
					</div>
				)}
				{lang === "fr" ? (
					<p className="footer-message">
						Les équipes Bar à lunettes sont là pour vous, que ce soit pour une
						séance de stylisme lunetterie, un examen de la vue ou tout autre
						service.
					</p>
				) : (
					<p className="footer-message">
						The Bar à lunettes teams are here for you, whether it&apos;s for a
						eyewear styling session, an eye exam or any other service.
					</p>
				)}
				<Footer copy="© 2025, BAR À LUNETTES MARIE-SOPHIE DION" />
			</div>
		</QuizContext.Provider>
	);
};

export default Result;
