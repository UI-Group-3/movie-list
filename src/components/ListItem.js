import React from 'react';
import { ItemWrapper, MovieImg, MovieTitle, MovieYear } from '../style/ListStyle';
import ListItemBottom from './ListItemBottom';

const ListItem = (props) => {
    const { movieLists, page, handleMouseEnter, handleClickLiked, handleMouseLeave } = props;
    const currentMovieList = movieLists.slice((page - 1) * 20, page * 20);
    const originalImg = "https://image.tmdb.org/t/p/original";
    return (
        <>
            {currentMovieList.map(movieItem => (
                <ItemWrapper key={movieItem.id} onMouseEnter={() => handleMouseEnter(movieItem.id)} onMouseLeave={() => handleMouseLeave(movieItem.id)}>

                    <MovieImg
                        src={originalImg + movieItem.poster_path} />
                    {movieItem.mouseIn ? (
                        <ListItemBottom handleClickLiked={() => handleClickLiked(movieItem.id)} isLiked={movieItem.isLiked} id={movieItem.id}></ListItemBottom>
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