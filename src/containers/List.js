import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { ListWrapper } from './ListStyle';
import Sort from '../components/Sort';
import * as actionCreators from '../redux/actionCreators';
import { MOVIE_LIST_API } from '../redux/actionConstants';
import Pagination from '../components/Pagination';
import ListItem from '../components/ListItem'


class List extends Component {

    fetchData = () => {
        const { handleFecthMovieList, totalPage } = this.props;
        axios
            .all(
                [...new Array(totalPage)].map((i, j) =>
                    axios.get(`${MOVIE_LIST_API}${j + 1}`)
                )
            )
            .then(
                axios.spread((...responses) => {
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

        return (
            <ListWrapper >
                <Sort sortBy={sortBy} handleClickSort={handleClickSort} ></Sort>
                <Pagination page={page} totalPage={totalPage}></Pagination>
                <ListItem page={page} movieLists={movieLists} handleMouseEnter={handleMouseEnter} handleClickLiked={handleClickLiked} handleMouseLeave={handleMouseLeave}></ListItem>
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
