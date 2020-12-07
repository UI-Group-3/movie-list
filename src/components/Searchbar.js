import React from "react";
import { useMediaQuery } from "react-responsive";
import { Search, SearchText, SearchButton, SearchInfo } from "../style/header";
import { useSelector } from "react-redux";
import { selectHeader } from "../redux/selectors";

function Searchbar() {
  const bIsDesktop = useSelector(selectHeader);

  return (
    <Search className={bIsDesktop ? "top" : "side"}>
      <SearchText />
      <i className="iconfont zoom">&#xe717;</i>
      <SearchInfo></SearchInfo>
    </Search>
  );
}

export default Searchbar;
