import React from "react";
import { SortWrapper, SortItem, SortInput } from "../style/ListStyle";

const Sort = ({ sortBy, handleClickSort }) => {
  return (
    <SortWrapper>
      {sortBy.map((item) => {
        return (
          <SortItem key={item.id}>
            <label id={item.id}>
              <SortInput
                onClick={() => {
                  handleClickSort(item.id);
                }}
                value={item.name}
              ></SortInput>

              {item.isSort ? (
                <i className="iconfont up">&#xe614;</i>
              ) : (
                <i className="iconfont up">&#xe61d;</i>
              )}
            </label>
          </SortItem>
        );
      })}
    </SortWrapper>
  );
};

export default Sort;
