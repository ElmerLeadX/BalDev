/* eslint-disable react/prop-types */
import './Graysection.css';

const Graysection = ({ children }) => {
  return (
    <section className="section-gray">
      {children}
    </section>
  );
};
export default Graysection;