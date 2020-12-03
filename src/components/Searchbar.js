import React from 'react'
import styled from 'styled-components'

function Searchbar() {
    return (
        <Search>
            <SearchText placeholder="Please input a movie name!" />
            <SearchButton type="submit" value="Search" />
        </Search>
    )
}

const Search = styled.div`
    height: 64px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const SearchText = styled.input`
    height: 32px;
    width: 200px;
    background: #fff;
    margin: 8px 8px;
`

const SearchButton = styled.input`
    height: 32px;
    width: 64px;
    margin: 8px 8px;
`

export default Searchbar
