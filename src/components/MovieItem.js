import React from 'react';
// import { ListItem } from '../containers/ListStyle';

const MovieItem = ({ imgUrl }) => {

    return (

        <img style={{ width: '100%', height: '100%' }} src={imgUrl} alt="" ></img>
    )
}

export default MovieItem;