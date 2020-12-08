import React, { memo, useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { CategoryDiv } from "../style/categoryStyle";
import { setClickValue } from "../redux/actionCreators";
import { useDispatch } from "react-redux";

const Category = memo(({ genres_lists }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClickValue(1));
  }, [dispatch]);

  return (
    <CategoryDiv className="min">
      <h1>Select Movie</h1>
      {genres_lists.map((genres_list) => (
        <CategoryItem key={genres_list.id} genres_list={genres_list} />
      ))}
    </CategoryDiv>
  );
});

export default Category;
