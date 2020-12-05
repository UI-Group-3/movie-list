import React from 'react';
import { GenresWrapper, GenresItem } from '../style/moiveDetail'
const list = ['123dddd', '234qqqq', '567cc', '123dddd', '234qqqq', '567cc', '123dddd', '234qqqq', '567cc', '123dddd', '234qqqq', '567cc']
const DetailGenres = () => {
    return (
        <GenresWrapper>
            {list.map((item) => {
                return (
                    <GenresItem style={{ background: `#${Math.floor(Math.random() * (2 << 23)).toString(16)}` }} >{item}</GenresItem>
                )
            })}


        </GenresWrapper>
    )
}

export default DetailGenres;
