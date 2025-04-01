/* eslint-disable react/prop-types */
import Cup from "../Cup/Cup";
import Arrow from "../Arrow/Arrow";
import "./Hero.css";

const Hero = ({
	title,
	subtitle,
	signed,
	body,
	button,
	phrase,
	gopage,
	children,
}) => {
	return (
		<section className="section-hero">
			<Cup color="#000000" className="hide-desk" />
			<p className="subtitle hide-desk">{subtitle}</p>
			{title ? <h1 className="hide-desk">{title}</h1> : null}
			{children ? children : null}
			<div className="column-2">
				<article className="article-hero">
					<Cup color="#000000" className="hide-mob" />
					<p className="subtitle hide-mob">{subtitle}</p>
					{title ? <h1 className="hide-mob">{title}</h1> : null}
					<span>
						{signed ? <p>{signed}</p> : null}
						{body ? (
							<span dangerouslySetInnerHTML={{ __html: body }}></span>
						) : null}
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
