import styled, { keyframes } from 'styled-components'

export const Nav = styled.div`
    width: 100%;
    height: 144px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #f0f3f5;
`

export const Up = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 96px;
    width: 1100px;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #e5ebe4;
`

export const Down = styled.div`
    height: 48px;
    width: 1100px;
    font-size: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const NavList = styled.ul`
    list-style: none;
    padding: 0;
`
export const NavItem = styled.li`
    float: left;
    padding: 8px;
    margin-right: 64px;
    font-size: 24px;
    font-weight: bold;
    color: #2278b5;

    &:hover{
        background-color: #2278b5;
        color: white;
    }
`

export const TMDBIcon = styled.img`
    &.top{
        height: 32px;
    }

    &.side{
        height: 16px;
    }
`

export const Search = styled.div`
    height: 64px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    &.top{
        width: 512px;
    }
    &.side{
        width: 256px;
    }
`

export const SearchText = styled.input`
    height: 32px;
    width: 256px;
    background: #fff;
    margin: 8px 8px;
    padding: 4px;
`

export const SearchButton = styled.input`
    height: 32px;
    width: 64px;
    margin: 8px 8px;
`

export const showAnim = keyframes`
    0% {transform: translate(-256px, 0)}
    100% {
        transform: translate(0, 0);
        left: 0;
    }
`

export const hideAnim = keyframes`
    0% {transform: translate(0, 0)}
    100% {transform: translate(-256px, 0)}
`

export const Side = styled.div`
    z-index: 99;
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

export const SideList = styled.ul`
    list-style: none;
    padding: 0;
`
export const SideItem = styled.li`
    padding: 8px;
    margin: 32px 0;
    font-size: 24px;
    font-weight: bold;
    color: #2278b5;
    text-align: center;

    &:hover{
        background-color: #2278b5;
        color: white;
    }
`
export const SideButton = styled.button`
    z-index: 100;
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