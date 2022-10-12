import React, { useState, useEffect } from "react";
import { usePaginationRange, DOTS } from "./usePaginationRange";
import { PaginationWrapper } from "./Pagination.styles";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({
  data,
  RenderComponent,
  buttonConst,
  contentPerPage,
  siblingCount,
}) => {
  const [totalPageCount, setTotalPageCount] = useState(
    Math.ceil(data.length / contentPerPage)
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: "0px",
    });
  }, [currentPage]);

  useEffect(() => {
    setTotalPageCount(Math.ceil(data.length / contentPerPage));
  }, [data]);

  const paginationRange = usePaginationRange({
    totalPageCount,
    contentPerPage,
    buttonConst,
    siblingCount,
    currentPage,
  });

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function gotToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  const getPaginatedData = () => {
    const startIndex = currentPage * contentPerPage - contentPerPage;
    const endIndex = startIndex + contentPerPage;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      <RenderComponent data={getPaginatedData()} />

      <PaginationWrapper>
        {/* previous button */}
        <button
          onClick={gotToPreviousPage}
          className={` prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          <AiOutlineLeft />
        </button>

        <div className="range">
          {paginationRange.map((item, index) => {
            if (item === DOTS) {
              return (
                <button key={index} className={`paginationItem`}>
                  &#8230;
                </button>
              );
            }
            return (
              <button
                key={index}
                onClick={changePage}
                className={`paginationItem ${
                  currentPage === item ? "active" : null
                }`}
              >
                <span>{item}</span>
              </button>
            );
          })}
        </div>

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === totalPageCount ? "disabled" : ""}`}
        >
          <AiOutlineRight />
        </button>
      </PaginationWrapper>
    </div>
  );
};

export default Pagination;
