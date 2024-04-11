import React from "react";
import ReactPaginate from "react-paginate";
import * as S from "./pagination.styled";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const handlePageChange = (selectedItem) => {
        onPageChange(selectedItem.selected + 1);
    };

    const paginationProps = {
        breakLabel: "...",
        nextLabel: " next >",
        onPageChange: handlePageChange,
        pageRangeDisplayed: 3,
        pageCount: totalPages,
        previousLabel: "< previous ",
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
        <div style={{}}>
            <ReactPaginate {...paginationProps} />
        </div>
    );
};

export default Pagination;
