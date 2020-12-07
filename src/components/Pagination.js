import { PaginationWrapper, Button, PageInfo } from "../style/pagination";
import React from "react";
import { useDispatch } from "react-redux";
import { prevPage, nextPage } from "../redux/actionCreators";

const Pagination = ({ page, totalPage }) => {
  const dispatch = useDispatch();
  return (
    <PaginationWrapper>
      <Button
        disabled={`${page === 1 ? "disabled" : ""}`}
        onClick={() => dispatch(prevPage(page - 1))}
      >
        pre
      </Button>
      <PageInfo>
        current page {page} / {totalPage}
      </PageInfo>
      <Button
        disabled={`${page === totalPage ? "disabled" : ""}`}
        onClick={() => dispatch(nextPage(page + 1))}
      >
        next
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
