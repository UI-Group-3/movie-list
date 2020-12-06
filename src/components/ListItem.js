import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ItemWrapper,
  MovieImg,
  MovieTitle,
  MovieYear,
} from "../style/ListStyle";
import ListItemBottom from "./ListItemBottom";
import {
  selectIsClickedBlockList,
  selectMovieLists,
  selectCurrentPage,
  selectIsClickedLikeList,
  selectBlockLists,
  selectLikeLists,
  selectListByGenre,
} from "../redux/selectors";
import { mouseEnter, mouseLeave } from "../redux/actionCreators";

const ListItem = (props) => {
  // const { movieLists, page, handleMouseEnter, handleClickLiked, handleMouseLeave } = props;
  const isClickBlockList = useSelector(selectIsClickedBlockList);
  const isClickLikeList = useSelector(selectIsClickedLikeList);
  const dispatch = useDispatch();
  const movieLists = useSelector(selectListByGenre);
  const movieLikeLists = useSelector(selectLikeLists);
  const movieBlockLists = useSelector(selectBlockLists);

  let showMovieList = isClickBlockList
    ? movieBlockLists
    : isClickLikeList
    ? movieLikeLists
    : movieLists;
  if (window.location.pathname === "/likelist") {
    console.log("movies: ", showMovieList);
  }
  const page = useSelector(selectCurrentPage);

  let currentMovieList =
    window.location.pathname === "/likelist"
      ? showMovieList
      : showMovieList.slice((page - 1) * 20, page * 20);
  const originalImg = "https://image.tmdb.org/t/p/original";
  return (
    <>
      {currentMovieList.map((movieItem) => (
        <ItemWrapper
          key={movieItem.id}
          onMouseEnter={() => dispatch(mouseEnter(movieItem.id))}
          onMouseLeave={() => dispatch(mouseLeave(movieItem.id))}
        >
          <MovieImg src={originalImg + movieItem.poster_path} />
          {movieItem.mouseIn ? (
            <ListItemBottom
              isLiked={movieItem.isLiked}
              movie={movieItem}
            ></ListItemBottom>
          ) : (
            <></>
          )}
          <MovieTitle>{movieItem.title}</MovieTitle>
          <MovieYear>{movieItem.release_date}</MovieYear>
        </ItemWrapper>
      ))}
    </>
  );
};

export default ListItem;
