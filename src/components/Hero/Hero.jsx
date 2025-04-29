/* eslint-disable react/prop-types */
import Cup from "../Cup/Cup";
import Arrow from "../Arrow/Arrow";
import "./Hero.css";
import Star from "../Star/Star";

const Hero = ({
	title,
	subtitle,
	signed,
	body,
	button,
	review,
	author,
	phrase,
	gopage,
	children,
}) => {
	return (
		<section className="section-hero">
			<Cup color="#000000" className="hide-desk" Width="67.17" Height="71.53" />
			<p className="subtitle hide-desk">
				<span>{subtitle}</span> {signed}
			</p>
			{children ? children : null}
			<div className="column-2">
				<article className="article-hero">
					<Cup color="#000000" className="hide-mob" Width="96" Height="102" />
					<span className="hide-mob">
						<p className="subtitle hide-mob">{subtitle}</p>
						<p className="subtitle hide-mob">{signed}</p>
					</span>
					{title ? <h1>{title}</h1> : null}
					{body ? (
						<span dangerouslySetInnerHTML={{ __html: body }}></span>
					) : null}
					{phrase ? <h3>{phrase}</h3> : null}
					{button ? (
						<button className="btn-quiz" type="button" onClick={gopage}>
							{button} <Arrow color="#ffffff" flip="false" />
						</button>
					) : null}
				</article>
				{review && author ? (
					<article className="article-review">
						<div className="stars">
							<Star color="#000000" Width="24" Height="24" />
							<Star color="#000000" Width="24" Height="24" />
							<Star color="#000000" Width="24" Height="24" />
							<Star color="#000000" Width="24" Height="24" />
							<Star color="#000000" Width="24" Height="24" />
						</div>
						<div className="review-quote">
							<p>{review}</p>
							<p>{author}</p>
						</div>
					</article>
				) : null}
			</div>
		</section>
	);
};
export default Hero;
