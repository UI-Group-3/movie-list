import React from 'react';
import { DetailWrapper, Upper, Close, LeftImg } from '../style/moiveDetail';
import DetailRight from '../components/DetailRight';
import { selectItemDetail } from '../redux/selectors'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const originalImg = "https://image.tmdb.org/t/p/original";

const MovieDetail = () => {
    const itemDetail = useSelector(selectItemDetail);

    return (
        <DetailWrapper imgUrl={`${originalImg}${itemDetail[0].backdrop_path}`} >
            <Link to="/">
                <Close>Close</Close>
            </Link>
            <Upper>
                <LeftImg src={`${originalImg}${itemDetail[0].poster_path}`} ></LeftImg>
                <DetailRight itemDetail={itemDetail}></DetailRight>
            </Upper>
        </DetailWrapper >
    )
}

export default MovieDetail;
