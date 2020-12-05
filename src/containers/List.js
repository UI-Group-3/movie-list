import React, { Component } from 'react';
import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
import { connect } from "react-redux";
import { ListWrapper, ListItem } from './ListStyle';
import Sort from '../components/Sort';
import ListItemBottom from '../components/ListItemBottom';
import * as actionCreators from '../redux/actionCreators';
import { MOVIE_LIST_API } from '../redux/actionConstants';
import Pagination from '../components/Pagination';
import MovieItem from '../components/MovieItem';
import MovieTitle from '../components/MovieTitle';
import MovieYear from '../components/MovieYear';

class List extends Component {

    fetchData = () => {
        const { handleFecthMovieList, totalPage } = this.props;
        // for (let i = 1; i <= totalPage; i++) {
        //     const response = axios.get(`${MOVIE_LIST_API}${i}`);
        //     handleFecthMovieList(response.data.results);
        // }

        axios
            .all(
                [...new Array(totalPage)].map((i, j) =>
                    axios.get(`${MOVIE_LIST_API}${j + 1}`)
                )
            )
            .then(
                axios.spread((...responses) => {
                    //   console.log(responses.map((res) => res.data.results))
                    let movies = [];
                    responses.forEach((res) => movies = movies.concat(res.data.results))
                    handleFecthMovieList(movies);
                })
            )
            .catch((errors) => {
                console.log(errors)
            });


    };



    componentDidMount() {
        this.fetchData();
    }

    render() {
        const { sortBy, handleClickSort, movieLists, page, totalPage, handleMouseEnter, handleClickLiked, handleMouseLeave } = this.props;
        const currentMovieList = movieLists.slice((page - 1) * 20, page * 20);
        const originalImg = "https://image.tmdb.org/t/p/original";
        return (
            <ListWrapper >
                <Sort sortBy={sortBy} handleClickSort={handleClickSort} ></Sort>
                <Pagination page={page} totalPage={totalPage}></Pagination>
                {currentMovieList.map(movieItem => (
                    <ListItem key={movieItem.id} onMouseEnter={() => handleMouseEnter(movieItem.id)} onMouseLeave={() => handleMouseLeave(movieItem.id)}>

                        <MovieItem
                            imgUrl={originalImg + movieItem.poster_path} />
                        {movieItem.mouseIn ? (
                            <ListItemBottom handleClickLiked={() => handleClickLiked(movieItem.id)} isLiked={movieItem.isLiked} ></ListItemBottom>
                        ) : (<></>)}


                        <MovieTitle title={movieItem.title} />
                        <MovieYear year={movieItem.release_date} />
                    </ListItem>
                ))
                }

            </ListWrapper>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        movieLists: state.listState.movieLists,
        sortBy: state.listState.sortBy,
        isSort: state.listState.isSort,
        page: state.listState.page,
        totalPage: state.listState.totalPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMouseEnter(id) {
            dispatch(actionCreators.mouseEnter(id));
        },
        handleMouseLeave(id) {
            dispatch(actionCreators.mouseLeave(id));
        },
        handleClickLiked(id) {
            dispatch(actionCreators.clickLiked(id));
        },
        handleFecthMovieList(data) {
            dispatch(actionCreators.getMovieList(data));
        },
        handleClickSort(id) {
            dispatch(actionCreators.clickSort(id));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
