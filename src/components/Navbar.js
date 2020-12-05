import React from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Searchbar from '../components/Searchbar';
import { Nav, Up, Down, NavList, NavItem } from '../style/header'

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
            </Down>
        </Nav>
    )
}

export default Navbar
