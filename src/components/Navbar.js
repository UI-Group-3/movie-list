import React from 'react';
import Icon from '../components/Icon';
import { Nav, NavList, Up, Down, NavItem } from '../style/header';
import Searchbar from '../components/Searchbar';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Nav>
            <Up>
                <Icon></Icon>
                <Searchbar></Searchbar>
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
    )
}

export default Navbar;
