/* eslint-disable react/prop-types */
import Arrow from "../../assets/Arrow 3.svg";
import Cup from "../Cup/Cup";
import "./Message.css";

const Message = ({
	title,
	subtitle,
	body,
	url,
	btn,
	secondsubttitle,
	body2,
}) => {
	return (
		<article className="message">
			<div className="message-card">
				<Cup color="#ffffff" />
				<h1>{title}</h1>
				<span>
					<p>{subtitle}</p>
					{body}
				</span>
				<a href={url} rel="noopener noreferrer" target="_blank" className="btn">
					{btn}
				</a>
				<span className="secondtitle">
					<p>{secondsubttitle}</p>
					{body2}
				</span>
			</div>
			<a href="#results" rel="noopener noreferrer">
				<img className="arrow" src={Arrow} alt="arrow" />
			</a>
		</article>
	);
};

export default Message;
