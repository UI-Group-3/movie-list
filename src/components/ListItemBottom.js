import React from 'react';
import { ItemBottomWrapper, Liked, Blocked, Details } from '../style/ListStyle';
import { Link } from 'react-router-dom';
import { setBlockValue, clickLiked, setItemDetailValue } from '../redux/actionCreators';
import { useDispatch } from 'react-redux';

const ListItemBottom = ({ isLiked, movie }) => {
    const dispatch = useDispatch();
    return (
        <ItemBottomWrapper className="ItemBottom">
            <Liked onClick={() => dispatch(clickLiked(movie))}>
                {isLiked ? (<i className="iconfont liked">&#xe8ab;</i>) : (<i className="iconfont">&#xe623;</i>)}
            </Liked>

            <Blocked onClick={() => dispatch(setBlockValue(movie))}>
                <i className="iconfont ">&#xe630;</i>
            </Blocked>

            <Link to="/detail">
                <Details onClick={() => dispatch(setItemDetailValue(movie.id))}>
                    <i className="iconfont">&#xe708;</i>
                </Details>
            </Link>

        </ItemBottomWrapper>

    )
}


export default ListItemBottom;
