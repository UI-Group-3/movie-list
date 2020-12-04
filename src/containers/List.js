import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListWrapper, ListItem } from './ListStyle';
import Sort from '../components/Sort';
import ListItemBottom from '../components/ListItemBottom'
import * as actionCreators from '../redux/actionCreators'
import Pagination from '../components/Pagination'

class List extends Component {
    getItemBottom(mouseIn) {
        const { isLiked, handleClickLiked } = this.props
        if (mouseIn) {
            return (
                <ListItemBottom handleClickLiked={handleClickLiked} isLiked={isLiked} ></ListItemBottom>
            )
        }
        else {
            return null;
        }
    }

    render() {
        const { mouseIn, handleMouseEnter, handleMouseLeave, sortBy, handleClickSort } = this.props;
        return (
            <ListWrapper>
                <Sort sortBy={sortBy} handleClickSort={handleClickSort} ></Sort>
                <Pagination ></Pagination>

                <ListItem onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    {this.getItemBottom(mouseIn)}
                </ListItem>

            </ListWrapper>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        mouseIn: state.listState.mouseIn,
        isLiked: state.listState.isLiked,
        sortBy: state.listState.sortBy,
        isSort: state.listState.isSort
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleClickLiked() {
            dispatch(actionCreators.clickLiked());
        },
        handleClickSort(id) {
            dispatch(actionCreators.clickSort(id));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);