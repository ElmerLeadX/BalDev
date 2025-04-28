/* eslint-disable react/prop-types */
import Star from "../Star/Star"
import "./Review.css"
const Review = ({ review, author }) => {
  return (
		<article className="article-review">
			<div className="stars">
				<Star color="#000000" Width="24" Height="24" />
				<Star color="#000000" Width="24" Height="24" />
				<Star color="#000000" Width="24" Height="24" />
				<Star color="#000000" Width="24" Height="24" />
				<Star color="#000000" Width="24" Height="24" />
			</div>
			<div className="review-quote">
				<p>{author}</p>
				<p>{review}</p>
			</div>
		</article>
	);
}

export default Review