import React from 'react';
import { ItemBottomWrapper, Liked, Blocked, Details } from '../containers/ListStyle';
import { Link } from 'react-router-dom';


const ListItemBottom = ({ isLiked, handleClickLiked }) => {

    return (
        <ItemBottomWrapper>
            <Liked onClick={handleClickLiked}>
                {isLiked ? (<i className="iconfont liked">&#xe8ab;</i>) : (<i className="iconfont">&#xe623;</i>)}
            </Liked>
            <Blocked>
                <i className="iconfont ">&#xe630;</i>
            </Blocked>
            <Link to="/detail">
                <Details >
                    <i className="iconfont">&#xe708;</i>
                </Details>
            </Link>
        </ItemBottomWrapper>
    )
}


export default ListItemBottom;

