import React from 'react'
import styled from 'styled-components'

function SidebarButton() {

    const handleClick = ()=>{
        
    }

    return (
        <Button >☰</Button>
    )
}

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

export default SidebarButton
