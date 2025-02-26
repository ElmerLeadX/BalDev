/* eslint-disable react/prop-types */
import Cup from "../Cup/Cup";
import Arrow from "../Arrow/Arrow";
import "./Hero.css";

const Hero = ({ title, subtitle, signed, body, button, phrase, gopage, children}) => {
	return (
		<section className="section-hero">
			<Cup color="#000000" className="hide-desk" />
			<p className="subtitle hide-desk">{subtitle}</p>
			{children ? children : null}
			<div className="column-2">
				<article className="article-hero">
					<Cup color="#000000" className="hide-mob" />
					<p className="subtitle hide-mob">{subtitle}</p>
					<h1>{title}</h1>
					<span>
						<p>{signed}</p>
						<span>{body}</span>
					</span>
					{phrase ? <h3>{phrase}</h3> : null}
					{button ? (
						<button className="btn-quiz" type="button" onClick={gopage}>
							{button} <Arrow color="#ffffff" flip="false" />
						</button>
					) : null}
				</article>
			</div>
		</section>
	);
};
export default Hero;
