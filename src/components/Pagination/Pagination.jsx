/* eslint-disable react/prop-types */
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages }) => {
  return (
    <section className="pagination">
      <span>{currentPage} / {totalPages}</span>
    </section>
  );
};

export default Pagination;