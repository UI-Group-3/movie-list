import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemWrapper, MovieImg, MovieTitle, MovieYear } from '../containers/ListStyle';
import ListItemBottom from './ListItemBottom';
import { selectIsClickedBlockList, selectMovieLists, selectCurrentPage, selectIsClickedLikeList, selectBlockLists, selectLikeLists } from '../redux/selectors';
import { mouseEnter, mouseLeave, clickLiked } from '../redux/actionCreators';

const ListItem = (props) => {
    // const { movieLists, page, handleMouseEnter, handleClickLiked, handleMouseLeave } = props;
    const isClickBlockList = useSelector(selectIsClickedBlockList);
    const isClickLikeList = useSelector(selectIsClickedLikeList);
    const dispatch = useDispatch();
    const movieLists = useSelector(selectMovieLists);
    const movieLikeLists = useSelector(selectLikeLists);
    const movieBlockLists = useSelector(selectBlockLists);
    console.log("1" + movieLikeLists.length);
    console.log("2" + movieBlockLists.length);
    let currentMovieList = [];
    if (isClickLikeList === true) {
        console.log("123");
        currentMovieList = movieLikeLists;
    } else if (isClickBlockList === true) {
        console.log("456");
        currentMovieList = movieBlockLists;
    } else {
        console.log("123456");
        currentMovieList = movieLists;
    }
    // let currentMovieList = (isClickBlockList ? (movieBlockLists) : (isClickLikeList ? (movieLikeLists) : (movieLists)));
    console.log("3" + currentMovieList.length);
    const page = useSelector(selectCurrentPage);
    // const currentMovieList = movieLists.slice((page - 1) * 20, page * 20);
    const originalImg = "https://image.tmdb.org/t/p/original";
    return (
        <>
            {currentMovieList.map(movieItem => (
                <ItemWrapper key={movieItem.id} onMouseEnter={() => dispatch(mouseEnter(movieItem.id))} onMouseLeave={() => dispatch(mouseLeave(movieItem.id))}>

                    <MovieImg
                        src={originalImg + movieItem.poster_path} />
                    {movieItem.mouseIn ? (
                        <ListItemBottom handleClickLiked={() => dispatch(clickLiked(movieItem))} isLiked={movieItem.isLiked} movie={movieItem}></ListItemBottom>
                    ) : (<></>)}

                    <MovieTitle>{movieItem.title}</MovieTitle>
                    <MovieYear>{movieItem.release_date}</MovieYear>
                </ItemWrapper>
            ))
            }

        </>
    )

}

export default ListItem