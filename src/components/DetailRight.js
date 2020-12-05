import React from 'react';
import { RightWrapper, MoiveOverView, MoiveName } from '../style/moiveDetail';
import DetailGenres from './RightGenres';

const DetailRight = ({ itemDetail }) => {

    return (
        <RightWrapper>
            <MoiveName>{itemDetail[0].title}  ({itemDetail[0].release_date})</MoiveName>
            <DetailGenres geners={itemDetail[0].genre_ids}></DetailGenres>
            <MoiveOverView>OverView:  {itemDetail[0].overview}</MoiveOverView>
        </RightWrapper>
    )
}

export default DetailRight;