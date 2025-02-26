/* eslint-disable react/prop-types */
import "./Progressbar.css";

const Progressbar = ({ progress }) => {
  return (
    <section className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </section>
  );
};

export default Progressbar;