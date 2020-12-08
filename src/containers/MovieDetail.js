import React, { memo } from 'react';
import { DetailWrapper, Upper, LeftImg } from '../style/moiveDetail';
import DetailRight from '../components/DetailRight';
import { selectItemDetail } from '../redux/selectors'
import { useSelector } from 'react-redux';



const MovieDetail = memo(() => {
    const itemDetail = useSelector(selectItemDetail);
    const originalImg = "https://image.tmdb.org/t/p/original";

    return (
        <DetailWrapper imgUrl={`${originalImg}${itemDetail[0].backdrop_path}`} >
            <Upper>
                <LeftImg src={`${originalImg}${itemDetail[0].poster_path}`} ></LeftImg>
                <DetailRight itemDetail={itemDetail}></DetailRight>
            </Upper>
        </DetailWrapper >
    )
})

export default MovieDetail;
