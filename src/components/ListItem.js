import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { ItemWrapper, MovieInfo, MovieImgs } from '../style/ListStyle';
import ListItemBottom from './ListItemBottom';
import { selectCurrentPage, selectBlockLists, selectLikeLists, selectListByGenre, } from '../redux/selectors';
// import LazyLoad from 'react-lazyload';

const ListItem = memo(() => {
    const page = useSelector(selectCurrentPage);
    const movieLists = useSelector(selectListByGenre);
    const movieLikeLists = useSelector(selectLikeLists);
    const movieBlockLists = useSelector(selectBlockLists);

    let currentMovieList = (window.location.pathname === "/" ? (movieLists.filter(movie => (movie.isBlocked === false)).slice((page - 1) * 20, page * 20))
        : (window.location.pathname === "/likelist") ? (movieLikeLists) : (movieBlockLists));

    const originalImg = "https://image.tmdb.org/t/p/original";
    // let refPlaceholder = React.useRef();
    // const removePlaceholder = () => {
    //     console.log(refPlaceholder);
    //     refPlaceholder.current.remove();
    // }

    return (
        <>
            {currentMovieList.map(movieItem => (
                <ItemWrapper key={movieItem.id} >
                    {/* <LazyLoad> */}
                    <MovieImgs>
                        <img alt="" src={originalImg + movieItem.poster_path}></img>
                        <ListItemBottom isLiked={movieItem.isLiked} movie={movieItem} isBlocked={movieItem.isBlocked}></ListItemBottom>
                    </MovieImgs>
                    {/* </LazyLoad> */}
                    <MovieInfo>{movieItem.title}</MovieInfo>
                    <MovieInfo>{movieItem.release_date}</MovieInfo>
                </ItemWrapper>))}
        </>
    )
})


export default ListItem;
