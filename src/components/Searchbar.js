import React, { memo } from "react";
import { Search, SearchText } from "../style/header";
import { selectHeader } from "../redux/selectors";
import { handelSeachValue, handelOnFocus, handelOnBlur } from "../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import SearchInfos from "./SearchInfos";
import { selectSearchInput, selectOnFocused, selectOnMouseIn } from "../redux/selectors";

const Searchbar = memo(() => {
  const bIsDesktop = useSelector(selectHeader);
  const dispatch = useDispatch();
  const searchInput = useSelector(selectSearchInput);

  const focused = useSelector(selectOnFocused);
  const mouseIn = useSelector(selectOnMouseIn);
  return (
    <Search className={bIsDesktop ? "top" : "side"}>
      <SearchText
        aria-label="Input movie name here"
        value={searchInput}
        onChange={(e) => dispatch(handelSeachValue(e.target.value))}
        onFocus={() => dispatch(handelOnFocus())}
        onBlur={() => dispatch(handelOnBlur())}
      />
      <i className="iconfont zoom">&#xe717;</i>

      {(focused || mouseIn) ? (<SearchInfos ></SearchInfos>) : (null)
      }

    </Search>
  );
})

export default Searchbar;
