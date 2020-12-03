import React from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Searchbar from '../components/Searchbar';

function Navbar() {
    return (
        <Nav>
            <Up>
                <UpLeft>
                    <Icon></Icon>
                </UpLeft>
                <UpRight>
                    <Searchbar></Searchbar>
                </UpRight>
            </Up>
            <Down>
                <List>
                    <Item>Movie List</Item>
                    <Item>Liked List</Item>
                    <Item>Blocked List</Item>
                </List>
            </Down>
        </Nav>
    )
}

const Nav = styled.div`
    width: 100%;
    height: 144px;
    background-color: #f0f3f5;
`
const Up = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96px;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #e5ebe4;
`
const UpLeft = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const UpRight = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const Down = styled.div`
    height: 48px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
`
const Item = styled.li`
    float: left;
    padding: 0 48px;
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: #2278b5;
`

export default Navbar
