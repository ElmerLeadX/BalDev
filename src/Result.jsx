import { useEffect, useState, useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import { QuizContext } from "./lib/quizContext";
import "./Result.css";
import Glasses from "./components/Glasses/Glasses";
import Arrow from "./components/Arrow/Arrow";
import femaleglasses from "./assets/femaleglasses.webp";
import lensracks from "./assets/lensracks.webp";
import Quote from "./components/Quote/Quote";
import josee from "./assets/josee.webp";
import andrew from "./assets/andrew.webp";
import jeanclaude from "./assets/jean-claude.webp";
import collage1 from "./assets/collage1.webp";
import collage2 from "./assets/collage2.webp";
import collage3 from "./assets/collage3.webp";
import collage4 from "./assets/collage4.webp";
import collage5 from "./assets/collage5.webp";
import collage6 from "./assets/collage6.webp";
import collage7 from "./assets/collage7.webp";
import collage8 from "./assets/collage8.webp";

const Result = () => {
	const data = useContext(QuizContext);
	const [lang, setLang] = useState("fr");

	useEffect(() => {
		if (data.lang === "en") {
			history.pushState(null, null, "?lang=en");
			setLang("en");
		} else {
			history.pushState(null, null, "?lang=fr");
			setLang("fr");
		}
	}, [data.lang, setLang]);

	return (
		<QuizContext.Provider value={data}>
			<div className="container result-page">
				<Navbar lang={lang} flag={false} result={true} />
				<section className="hero-result">
					{lang === "fr" ? (
						<h1>
							{`Découvrez comment nous avons élevé le look de plus de 60,000
							québécois grâce à des lunettes parfaitement adaptées à leurs
							traits, leur style et leur personnalité… et comment nous pouvons
							faire de même pour vous!`}
						</h1>
					) : (
						<h1>{`Discover how we elevated the looks of more than 60,000 Quebecois with perfectly adapted glasses to their traits, style and personality... and how we can do the same for you!`}</h1>
					)}
					<div className="results-video">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/6CDLgTb3Hec?si=g4Z4ENIsGJDF9NAM"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section className="section-gray">
					{lang === "fr" ? (
						<h2>
							{`Profitez de votre séance privée en stylisme haute-lunetterie et
							trouvez la monture parfaite`}
						</h2>
					) : (
						<h2>{`Enjoy your private styling session and find the perfect frame`}</h2>
					)}
					<ul className="store-list">
						<li>Laval</li>
						<li>Montreal</li>
						<li>Saint-Lambert</li>
						<li>{lang === "fr" ? "Québec" : "Quebec"}</li>
						<li>Bromont</li>
					</ul>
					<div className="columns-2">
						<div className="column-1">
							{lang === "fr" ? (
								<h3>
									{`Votre rencontre de 50 minutes avec une opticienne au Bar à lunettes Marie-Sophie Dion inclut:`}
								</h3>
							) : (
								<h3>{`Your 50-minute meeting with an optician at the Marie-Sophie Dion Eyewear Bar includes:`}</h3>
							)}
							<div className="blurb-container">
								<div className="blurb">
									<Glasses color="#000000" Width="29px" Height="29px" />
									{lang === "fr" ? (
										<span>
											{`Une analyse complète des différentes personnalités que vous souhaitez projeter, selon votre style et vos activités.`}
										</span>
									) : (
										<span>
											{`A complete analysis of the different personalities you want to project, according to your style and activities.`}
										</span>
									)}
								</div>
								<div className="blurb">
									<Glasses color="#000000" Width="29px" Height="29px" />
									{lang === "fr" ? (
										<span>
											{`La prise de mesures précises selon la méthode MSD pour garantir une monture et une vision parfaites`}
										</span>
									) : (
										<span>
											{`Precise measurements according to the MSD method to guarantee a perfect frame and vision`}
										</span>
									)}
								</div>
								<div className="blurb">
									<Glasses color="#000000" Width="29px" Height="29px" />
									{lang === "fr" ? (
										<span>
											{`Un tableau de couleurs, de matériaux et de formes de montures, établi selon votre teint, vos cheveux et les traits de votre visage.`}
										</span>
									) : (
										<span>
											{`A color, material and frame shape chart, established according to your complexion, hair and facial features.`}
										</span>
									)}
								</div>
								<div className="blurb">
									<Glasses color="#000000" Width="29px" Height="29px" />
									{lang === "fr" ? (
										<span>
											{`Une garantie de satisfaction sans compromis en matière de style, d’adaptation et de durabilité.`}
										</span>
									) : (
										<span>
											{`A no-compromise satisfaction guarantee in terms of style, fit and durability.`}
										</span>
									)}
								</div>
							</div>
							{lang === "fr" ? (
								<h4>
									{`Ne perdez pas cette CONSULTATION GRATUITE de 50 minutes en tête-à-tête avec un expert du Bar à Lunettes.`}
								</h4>
							) : (
								<h4>{`Don't miss this FREE 50-minute consultation with an expert at the Eyewear Bar.`}</h4>
							)}
							<a
								href="https://baralunettes.com/pages/boutiques-bar-a-lunettes"
								className="btn-primary"
							>
								{lang === "fr"
									? `Réserver ma séance de stylisme`
									: `Book my styling session`}
								<Arrow color="#ffffff" />
							</a>
							<a
								href="https://baralunettes.as.me/schedule/68ef6492/appointment/40317996/calendar/10722194?appointmentTypeIds[]=40317996"
								className="btn-secondary"
							>
								{lang === "fr"
									? `Oui, mais en consultation vidéo`
									: `Yes, but in video consultation`}
							</a>
						</div>
						<div className="column-2">
							<img src={femaleglasses} alt="A women wearing glasses" />
							<img src={lensracks} alt="lens racks" />
						</div>
					</div>
				</section>
				<section className="comments">
					{lang === "fr" ? (
						<h2>{`Comment nous apportons de la valeur à nos clients`}</h2>
					) : (
						<h2>{`How we bring value to our clients`}</h2>
					)}
					<div className="comments-container">
						<div className="comment">
							<h3>ADNREW MCNALLY</h3>
							<Quote color="#000000" Width="69px" Height="68px" />
							{lang === "fr" ? (
								<span>
									{`« Les lunettes sont l’un des seuls accessoires que vous porterez quotidiennement, le confort est donc primordial. Pourquoi ne pas avoir en plus le plaisir de porter sur le bout de son nez une création unique? »`}
								</span>
							) : (
								<span>
									{`"Glasses are one of the only accessories you wear daily, comfort is therefore paramount. Why not have the pleasure of wearing on the tip of your nose a unique creation?"`}
								</span>
							)}
						</div>
						<div className="comment">
							<h3>JOSÉE DARCHE</h3>
							<Quote color="#000000" Width="69px" Height="68px" />
							{lang === "fr" ? (
								<span>
									{`« Un grand merci pour cette monture conçue avec passion. Au Bar à Lunettes, chaque détail, chaque geste, est top niveau. »`}
								</span>
							) : (
								<span>
									{`"Thank you for this frame designed with passion. At the Eyewear Bar, every detail, every gesture, is top notch."`}
								</span>
							)}
						</div>
						<div className="comment">
							<h3>JEAN-CLAUDE POITRAS</h3>
							<Quote color="#000000" Width="69px" Height="68px" />
							{lang === "fr" ? (
								<span>
									{`« Le succès toujours grandissant de cette griffe, tant auprès du grand public que de l’élite du monde des affaires et du milieu artistique, est remarquable. Cette créatrice inspirée, doublée d’une femme d’affaires avisée, n’a pas fini de surprendre. »`}
								</span>
							) : (
								<span>
									{`"The ever-growing success of this brand, both among the general public and the elite of the business and artistic world, is remarkable. This inspired creator, coupled with a savvy businesswoman, is sure to surprise."`}
								</span>
							)}
						</div>
					</div>
					<div className="img-comments-container">
						<div>
							<img src={andrew} alt="Andrew McNally" />
						</div>
						<div>
							<img src={josee} alt="Josee Darche" />
						</div>
						<div>
							<img src={jeanclaude} alt="Jean-Claude Poitras" />
						</div>
					</div>
					<a href="" className="btn-primary">
						BARALUNETTES.COM
						<Arrow color="#ffffff" />
					</a>
				</section>
				<section className="collage">
					{lang === "fr" ? (
						<h2>
							{`Les montures québécoises`}
							<br />
							{`Bar à Lunettes par Marie-Sophie Dion, fièrement portées`}
						</h2>
					) : (
						<h2>
							{`The Quebec Frames`}
							<br />
							{`Bar à Lunettes by Marie-Sophie Dion, proudly worn`}
						</h2>
					)}
					<div className="collage-container">
						<img src={collage8} alt="Collage" />
						<img src={collage7} alt="Collage" />
						<img src={collage6} alt="Collage" />
						<img src={collage5} alt="Collage" />
						<img src={collage4} alt="Collage" />
						<img src={collage3} alt="Collage" />
						<img src={collage2} alt="Collage" />
						<img src={collage1} alt="Collage" />
					</div>
					<a href="" className="btn-primary">
						{lang === "fr"
							? `Je veux ma session de stylisme gratuite`
							: `I want a free styling session`}
						<Arrow color="#ffffff" />
					</a>
					<a href="" className="btn-secondary">
						{lang === "fr"
							? `Oui, mais en consultation vidéo`
							: `Yes, but in video consultation`}
					</a>
				</section>
			</div>
		</QuizContext.Provider>
	);
};

export default Result;
