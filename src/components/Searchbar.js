import React from 'react'
import styled from 'styled-components'
import {useMediaQuery} from 'react-responsive'
import {Search, SearchText, SearchButton} from '../style/header'

function Searchbar() {
    const bIsDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    })

    return (
        <Search className={bIsDesktop ? "top" : "side"}>
            <SearchText placeholder="Please input a movie name!"/>
            <SearchButton type="submit" value="Search"/>
        </Search>
    )
}

export default Searchbar
