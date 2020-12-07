import React from "react";
import { useMediaQuery } from "react-responsive";
import { Search, SearchText } from "../style/header";
import { handelSeachValue } from '../redux/actionCreators'
import { useDispatch, useSelector } from "react-redux";
import SearchInfos from './SearchInfos';
import { selectSearchInput } from '../redux/selectors';


const Searchbar = () => {
  const bIsDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const dispatch = useDispatch();
  const searchInput = useSelector(selectSearchInput);
  return (
    <Search className={bIsDesktop ? "top" : "side"}>

      <SearchText value={searchInput} onChange={(e) => dispatch(handelSeachValue(e.target.value))} />
      <i className="iconfont zoom">&#xe717;</i>
      <SearchInfos></SearchInfos>
    </Search>
  );
}

export default Searchbar;
