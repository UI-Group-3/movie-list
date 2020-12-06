import React from "react";
import Searchbar from "./Searchbar";
import Icon from "./Icon";
import { selectSidebar } from "../redux/selectors";
import { getSidebarStatus } from "../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import {
  Side,
  SideList,
  SideItem,
  SideButton,
  showAnim,
  hideAnim,
} from "../style/header";

function Sidebar() {
  // const opened = useSelector(selectSidebar);
  // const dispatch = useDispatch();
  const opened = useSelector(selectSidebar);
  const dispatch = useDispatch();
  return (
    <div>
      <Side className={opened ? "show" : "hide"}>
        <Icon className="side" />
        <Searchbar />
        <SideList>
          <SideItem>Movie List</SideItem>
          <SideItem>Liked List</SideItem>
          <SideItem>Blocked List</SideItem>
        </SideList>
      </Side>
      <SideButton onClick={() => dispatch(getSidebarStatus(opened))}>
        ☰
      </SideButton>
    </div>
  );
}

export default Sidebar;
