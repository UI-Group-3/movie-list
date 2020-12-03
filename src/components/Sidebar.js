import React from 'react'
import styled from 'styled-components'
import Searchbar from './Searchbar'
import Icon from './Icon'
import SiderbarButton from './SidebarButton'

function Sidebar() {
    return (
        <Side>
            <Icon/>
            <Searchbar/>
            <List>
                    <Item>Movie List</Item>
                    <Item>Liked List</Item>
                    <Item>Blocked List</Item>
            </List>
            <SiderbarButton/>
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
    width: 800px;
`
const Item = styled.li`
    padding: 32px 0;
    margin: 0;
    font-size: 24px;
    font-weight: bold;
    color: #2278b5;
    text-align: center;
`



export default Sidebar
