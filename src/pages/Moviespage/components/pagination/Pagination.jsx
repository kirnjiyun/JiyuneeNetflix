import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const paginationProps = {
        breakLabel: "...",
        nextLabel: " >",
        onPageChange,
        pageRangeDisplayed: 5,
        pageCount: totalPages,
        previousLabel: "< ",
        previousClassName: "page-item",
        nextClassName: "page-item",
        breakClassName: "break",
        containerClassName: "pagination",
        pageClassName: "page-item",
        activeClassName: "active",
        disabledClassName: "disabled",
        forcePage: currentPage - 1,
    };
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {" "}
            <ReactPaginate {...paginationProps} />{" "}
        </div>
    );
};
export default Pagination;
