import React, { Component, useRef } from "react";
import { connect } from "react-redux";
import { ListWrapper } from '../style/ListStyle';
import Sort from '../components/Sort';
import * as actionCreators from '../redux/actionCreators';
import Pagination from '../components/Pagination';
import ListItem from '../components/ListItem';
import useDimensions from "react-cool-dimensions";



class List extends Component {

    render() {
        const { sortBy, handleClickSort, movieLists, page, totalPage } = this.props;
        return (
            <ListWrapper className="List container" >
                <Sort sortBy={sortBy} handleClickSort={handleClickSort} ></Sort>
                <Pagination page={page} totalPage={totalPage}></Pagination>
                <ListItem page={page} movieLists={movieLists} ></ListItem>
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
        totalPage: state.listState.totalPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFecthMovieList(data) {
            dispatch(actionCreators.getMovieList(data));
        },
        handleClickSort(id) {
            dispatch(actionCreators.clickSort(id));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
