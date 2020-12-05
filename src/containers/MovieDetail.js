import React from 'react';
import { DetailWrapper, Upper, Close } from '../style/moiveDetail';
import DetailLeft from '../components/DetaiLleft'
import DetailRight from '../components/DetailRight';
import { Link } from 'react-router-dom';

const MovieDetail = () => {
    return (
        <DetailWrapper >
            <Link to="/">
                <Close>Close</Close>
            </Link>
            <Upper>
                <DetailLeft></DetailLeft>
                <DetailRight></DetailRight>
            </Upper>
        </DetailWrapper>
    )
}

export default MovieDetail;