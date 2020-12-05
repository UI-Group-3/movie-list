import React from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Searchbar from '../components/Searchbar';
import { Nav, Up, Down, NavList, NavItem } from '../style/header'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Nav>
            <Up>
                <Icon/>
                <Searchbar/>
            </Up>
            <Down>
                <NavList>
                    <NavItem>Movie List</NavItem>
                    <NavItem>Liked List</NavItem>
                    <NavItem>Blocked List</NavItem>
                </NavList>
                <List>
                    <Link to="/">
                        <Item>Movie List</Item>
                    </Link>
                    <Link to="/likelist">
                        <Item>Liked List</Item>
                    </Link>
                    <Link to="/blocklist">
                        <Item>Blocked List</Item>
                    </Link>

                </List>
            </Down>
        </Nav>
    )
}

export default Navbar
