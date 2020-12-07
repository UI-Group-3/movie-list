import React from 'react';
import Icon from '../components/Icon';
import { Nav, Up, Down, } from '../style/header';
import Searchbar from '../components/Searchbar';
import NavsList from './NavsList'

const Navbar = () => {
    return (
        <Nav>
            <Up>
                <Icon></Icon>
                <Searchbar></Searchbar>
            </Up>
            <Down>
                <NavsList></NavsList>
            </Down>
        </Nav>
    )
}

export default Navbar;
