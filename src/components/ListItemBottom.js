import React from "react";
import {
  ItemBottomWrapper,
  Liked,
  Blocked,
  Details,
} from "../containers/ListStyle";
import { Link } from "react-router-dom";
import { setBlockValue } from "../redux/actionCreators";
import { useDispatch } from "react-redux";

const ListItemBottom = ({ isLiked, handleClickLiked, id }) => {
  const dispatch = useDispatch();
  return (
    <ItemBottomWrapper>
      <Liked onClick={handleClickLiked}>
        {isLiked ? (
          <i className="iconfont liked">&#xe8ab;</i>
        ) : (
          <i className="iconfont">&#xe623;</i>
        )}
      </Liked>
      <Blocked onClick={() => dispatch(setBlockValue(id))}>
        <i className="iconfont ">&#xe630;</i>
      </Blocked>
      <Link to="/detail">
        <Details>
          <i className="iconfont">&#xe708;</i>
        </Details>
      </Link>
    </ItemBottomWrapper>
  );
};

export default ListItemBottom;
