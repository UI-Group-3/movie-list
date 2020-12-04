import React from 'react'
import icon from '../pictures/TMDB-icon.jpeg'
import styled from 'styled-components'

function Icon() {
    return (
        <TMDBIcon src={icon} alt='TMDB Icon'/>
    )
}

const TMDBIcon = styled.img`
    height: 64px;
    padding: 0;
    margin: 0 128px;
`

export default Icon
