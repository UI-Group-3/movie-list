import React from "react";
import styled from "styled-components";
import Icon from "../components/Icon";
import Searchbar from "../components/Searchbar";
import { Nav, Up, Down, NavList, NavItem } from "../style/header";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav>
      <Up>
        <Icon />
        <Searchbar />
      </Up>
      <Down>
        <NavList>
          <Link to="/">
            <NavItem>Movie List</NavItem>
          </Link>
          <Link to="/likelist">
            <NavItem>Liked List</NavItem>
          </Link>
          <Link to="/blocklist">
            <NavItem>Blocked List</NavItem>
          </Link>
        </NavList>
      </Down>
    </Nav>
  );
}

export default Navbar;
