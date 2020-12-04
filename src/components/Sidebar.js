import React from 'react'
import styled, { keyframes } from 'styled-components'
import Searchbar from './Searchbar'
import Icon from './Icon'
import { selectSidebar } from '../redux/selectors'
import { getSidebarStatus } from '../redux/actionCreators'
import { useDispatch, useSelector } from 'react-redux';


function Sidebar() {
    // const opened = useSelector(selectSidebar);
    // const dispatch = useDispatch();
    const opened = useSelector(selectSidebar);
    const dispatch = useDispatch();
    return (
        <div>
            <Side className={opened ? "show" : "hide"}>
                <Icon />
                <Searchbar />
                <List>
                    <Item>Movie List</Item>
                    <Item>Liked List</Item>
                    <Item>Blocked List</Item>
                </List>
            </Side>
            <Button onClick={()=>dispatch(getSidebarStatus(opened))}>☰</Button>
        </div>
    )
}

const showAnim = keyframes`
    0% {transform: translate(-256px, 0)}
    100% {
        transform: translate(0, 0);
        left: 0;
    }
`

const hideAnim = keyframes`
    0% {transform: translate(0, 0)}
    100% {transform: translate(-256px, 0)}
`

const Side = styled.div`
    margin: 0;
    padding: 0;
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
    animation-duration: 1s;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;
    &.show{
        animation-name: ${showAnim};
    }
    &.hide{
        animation-name: ${hideAnim};
    }
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
