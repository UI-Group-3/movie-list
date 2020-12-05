import React from 'react'
import icon from '../assets/images/TMDB-icon.svg'
import styled from 'styled-components'
import { TMDBIcon } from '../style/header'
import {useMediaQuery} from 'react-responsive'

function Icon() {
    const bIsDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    })

    return (
        <TMDBIcon src={icon} alt='TMDB Icon' className={bIsDesktop ? "top" : "side"}/>
    )
}

export default Icon
