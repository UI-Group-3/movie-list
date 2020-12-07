import React from "react";
import { Search, SearchText } from "../style/header";
import { selectHeader } from "../redux/selectors";
import { handelSeachValue } from "../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import SearchInfos from "./SearchInfos";
import { selectSearchInput } from "../redux/selectors";

function Searchbar() {
  const bIsDesktop = useSelector(selectHeader);
  const dispatch = useDispatch();
  const searchInput = useSelector(selectSearchInput);
  return (
    <Search className={bIsDesktop ? "top" : "side"}>
      <SearchText
        value={searchInput}
        onChange={(e) => dispatch(handelSeachValue(e.target.value))}
      />
      <i className="iconfont zoom">&#xe717;</i>
      <SearchInfos></SearchInfos>
    </Search>
  );
}

export default Searchbar;
