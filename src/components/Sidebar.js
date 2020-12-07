import React from "react";
import Searchbar from "./Searchbar";
import Icon from "./Icon";
import { selectHeader, selectSidebar } from "../redux/selectors";
import { setSidebarStatus } from "../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { Side, SideList, SideItem, SideButton } from "../style/header";

function Sidebar() {
  const sidebar_status = useSelector(selectSidebar);
  const platform_style = useSelector(selectHeader);
  const dispatch = useDispatch();
  return (
    <div>
      <Side className={sidebar_status ? "show" : "hide"}>
        <Icon className="side" />
        <Searchbar />
        <SideList>
          <SideItem>Movie List</SideItem>
          <SideItem>Liked List</SideItem>
          <SideItem>Blocked List</SideItem>
        </SideList>
      </Side>
      <SideButton
        onClick={() =>
          dispatch(setSidebarStatus(sidebar_status, platform_style))
        }
      >
        ☰
      </SideButton>
    </div>
  );
}

export default Sidebar;
