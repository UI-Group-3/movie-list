import React, { useEffect, memo } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { GENRES_API } from '../redux/actionConstants'
import { getMovieGenres } from '../redux/actionCreators';
import { selectCategories } from '../redux/selectors';
import CategoryItem from '../components/CategoryItem';
import { CategoryDiv } from '../style/jiayingZhou';



const Category = memo(() => {
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(GENRES_API)
            .then(res => {
                dispatch(getMovieGenres(res.data.genres))

            })
            .catch(err => {

            })
    }, [dispatch])

    const genres_lists = useSelector(selectCategories);

    return (

        <CategoryDiv>
            <h1>Select Movie</h1>
            {
                genres_lists.map(genres_list => (
                    <CategoryItem key={genres_list.id} genres_list={genres_list} />
                ))
            }


        </CategoryDiv>
    )
});

export default Category;