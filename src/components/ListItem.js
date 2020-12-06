import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemWrapper, MovieInfo, MovieImgs } from '../style/ListStyle';
import ListItemBottom from './ListItemBottom';
import { selectIsClickedBlockList, selectMovieLists, selectCurrentPage, selectIsClickedLikeList, selectBlockLists, selectLikeLists } from '../redux/selectors';

const ListItem = (props) => {
    // const { movieLists, page, handleMouseEnter, handleClickLiked, handleMouseLeave } = props;
    const isClickBlockList = useSelector(selectIsClickedBlockList);
    const isClickLikeList = useSelector(selectIsClickedLikeList);
    const dispatch = useDispatch();
    const movieLists = useSelector(selectMovieLists);
    const movieLikeLists = useSelector(selectLikeLists);
    const movieBlockLists = useSelector(selectBlockLists);
    let showMovieList = (isClickBlockList ? (movieBlockLists) : (isClickLikeList ? (movieLikeLists) : (movieLists)));
    const page = useSelector(selectCurrentPage);

    let currentMovieList = showMovieList.slice((page - 1) * 20, page * 20);
    const originalImg = "https://image.tmdb.org/t/p/original";
    return (
        <>
            {currentMovieList.map(movieItem => (
                <ItemWrapper key={movieItem.id} >
                    <MovieImgs>
                        <img alt="" src={originalImg + movieItem.poster_path}></img>
                        <ListItemBottom isLiked={movieItem.isLiked} movie={movieItem}></ListItemBottom>
                    </MovieImgs>
                    <MovieInfo>{movieItem.title}</MovieInfo>
                    <MovieInfo>{movieItem.release_date}</MovieInfo>
                </ItemWrapper>))}
        </>
    )
}


export default ListItem;
