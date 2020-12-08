import React, { memo } from 'react';
import { ItemBottomWrapper, Liked, Blocked, Details } from '../style/ListStyle';
import { Link } from 'react-router-dom';
import { setBlockValue, clickLiked, addLikeList, setItemDetailValue, removeLikeList, addBlockList, removeBlockList } from '../redux/actionCreators';
import { useDispatch } from 'react-redux';

const ListItemBottom = memo(({ isLiked, movie, isBlocked }) => {
    const dispatch = useDispatch();
    function handleClickLikeAndAddLikeMovie(movie) {
        if (window.location.pathname === "/") {
            return Promise.resolve(dispatch(clickLiked(movie.id))).then(
                () => dispatch(addLikeList()));

        } else {
            return Promise.resolve(dispatch(removeLikeList(movie.id))).then(
                () => dispatch(clickLiked(movie.id)));
        }


    }

    function handleClickLike(movie) {
        return Promise.resolve(dispatch(removeLikeList(movie.id))).then(
            () => dispatch(clickLiked(movie.id)));
    }

    function handleClickBlockAndAddBlockMovie(movie) {
        if (window.location.pathname === "/") {
            return Promise.resolve(dispatch(setBlockValue(movie.id))).then(
                () => dispatch(addBlockList()));

        } else {
            return Promise.resolve(dispatch(removeBlockList(movie.id))).then(
                () => dispatch(setBlockValue(movie.id)));
        }


    }


    function handleClickBlock(movie) {
        return Promise.resolve(dispatch(removeBlockList(movie.id))).then(
            () => dispatch(setBlockValue(movie.id)));
    }

    return (
        <ItemBottomWrapper className="ItemBottom">
            <Liked onClick={() => { isLiked ? handleClickLike(movie) : handleClickLikeAndAddLikeMovie(movie) }}
                disabled={`${isBlocked ? "disabled" : ""}`}>
                {isLiked ? (<i className="iconfont liked">&#xe8ab;</i>) : (<i className="iconfont">&#xe623;</i>)}
            </Liked>

            <Blocked onClick={() => { isBlocked ? handleClickBlock(movie) : handleClickBlockAndAddBlockMovie(movie) }}
                disabled={`${isLiked ? "disabled" : ""}`}>
                <i className="iconfont ">&#xe630;</i>
            </Blocked>

            <Link to="/detail">
                <Details onClick={() => dispatch(setItemDetailValue(movie.id))}>
                    <i className="iconfont">&#xe708;</i>
                </Details>
            </Link>

        </ItemBottomWrapper >

    )
})


export default ListItemBottom;
