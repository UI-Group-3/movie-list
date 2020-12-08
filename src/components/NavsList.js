import React, { useState, memo } from 'react';
import { NavList, NavItem } from '../style/header';
import { Link } from 'react-router-dom';
import { selectSidebar } from "../redux/selectors";
import { useSelector } from "react-redux";


const NavsList = memo(() => {
    const sidebar_status = useSelector(selectSidebar);
    const initState = {
        movieClick: true,
        likeClick: false,
        blockClick: false
    }
    const [state, setState] = useState(initState);

    function handleClick() {
        setState({
            movieClick: true,
            likeClick: false,
            blockClick: false
        });
    }

    function handleLike() {
        setState({
            movieClick: false,
            likeClick: true,
            blockClick: false
        });
    }

    function handleBlock() {
        setState({
            movieClick: false,
            likeClick: false,
            blockClick: true
        });
    }

    return (
        <NavList className={sidebar_status ? "" : "sideItem"}>
            <Link to="/">
                <NavItem onClick={() => handleClick()} className={state.movieClick ? "afterClick" : ""}>Movie List</NavItem>
            </Link>
            <Link to="/likelist">
                <NavItem onClick={() => handleLike()} className={state.likeClick ? "afterClick" : ""}>Liked List</NavItem>
            </Link>
            <Link to="/blocklist">
                <NavItem onClick={() => handleBlock()} className={state.blockClick ? "afterClick" : ""}>Blocked List</NavItem>
            </Link>

        </NavList>
    )
})

export default NavsList;
