import React from 'react';
import Icon from '../components/Icon';
import { Nav, NavList, Up, Down, NavItem } from '../style/header';
import Searchbar from '../components/Searchbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setClickBlockListValue, setClickLikeListValue, setClickMovieListValue } from '../redux/actionCreators';

function Navbar() {
    const dispatch = useDispatch();
    return (
        <Nav>
            <Up>
                <Icon></Icon>
                <Searchbar></Searchbar>
            </Up>
            <Down>
                <NavList>
                    <Link to="/">
                        <NavItem onClick={() => dispatch(setClickMovieListValue())}>Movie List</NavItem>
                    </Link>
                    <Link to="/likelist">
                        <NavItem onClick={() => dispatch(setClickLikeListValue())}>Liked List</NavItem>
                    </Link>
                    <Link to="/blocklist">
                        <NavItem onClick={() => dispatch(setClickBlockListValue())}>Blocked List</NavItem>
                    </Link>

                </NavList>
            </Down>
        </Nav>
    )
}

export default Navbar;
