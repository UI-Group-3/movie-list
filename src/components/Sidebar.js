import React from 'react'
import styled from 'styled-components'
import Searchbar from './Searchbar'
import Icon from './Icon'

function Sidebar() {
    return (
        <Side>
            <Icon />
            <Searchbar />
            <List>
                <Item>Movie List</Item>
                <Item>Liked List</Item>
                <Item>Blocked List</Item>
            </List>
            <Button>☰</Button>
        </Side>
    )
}

const Side = styled.div`
    margin: 0;
    padding: 0 8px;
    width: 256px;
    background-color: #f0f3f5;
    position: fixed;
    top: 0;
    height: 100%;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
`
const Item = styled.li`
    padding: 32px 0;
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: #2278b5;
    text-align: center;
`
const Button = styled.button`
    font-size: 32px;
    cursor: pointer;
    background-color: #f0f3f5;
    color: black;
    padding: 4px 10px;
    border: none;
    border-radius: 16px;
    position: fixed;
    bottom: 32px;
    left: 32px;

    &:hover{
        color: #2278b5;
    }
`

export default Sidebar
