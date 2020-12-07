import React from "react";
import { useMediaQuery } from "react-responsive";
import { Search, SearchText, SearchInfo } from "../style/header";

function Searchbar() {
  const bIsDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <Search className={bIsDesktop ? "top" : "side"}>
      <SearchText />
      <i className="iconfont zoom">&#xe717;</i>
      <SearchInfo >

      </SearchInfo>
    </Search>
  );
}

export default Searchbar;
