import React, { memo } from "react";
import CategoryItem from "../components/CategoryItem";
import { CategoryDiv } from "../style/jiayingZhou";

const Category = memo(({ genres_lists }) => {
  return (
    <CategoryDiv>
      <h1>Select Movie</h1>
      {genres_lists.map((genres_list) => (
        <CategoryItem key={genres_list.id} genres_list={genres_list} />
      ))}
    </CategoryDiv>
  );
});

export default Category;
