/* eslint-disable react/prop-types */
import "./HeadingQuiz.css";

const HeadingQuiz = ({ title, subtitle, subtitlebold, body }) => {
  return (
    <section className="section-Heading">
      <article className="article-heading">
        <h1>{title}</h1>
        <h2><span>{subtitlebold} </span>{subtitle}</h2>
        <span className="heading-body">{body}</span>
      </article>
    </section>
  );
};

export default HeadingQuiz;