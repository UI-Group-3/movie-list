import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { setPlatformStyle, setSidebarStatus } from "../redux/actionCreators";

const Header = () => {
  const bIsDesktop = useMediaQuery({
    query: "(min-width: 1199px)",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPlatformStyle(bIsDesktop));
    dispatch(setSidebarStatus(bIsDesktop, bIsDesktop));
  }, [bIsDesktop, dispatch]);

  return <div>{bIsDesktop ? <Navbar /> : <Sidebar />}</div>;
};

export default Header;
