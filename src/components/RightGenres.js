import React from 'react';
import { GenresWrapper, GenresItem } from '../style/moiveDetail';
import { selectCategories } from '../redux/selectors'
import { useSelector } from 'react-redux';


const DetailGenres = ({ geners }) => {
    const allCategories = useSelector(selectCategories);
    let list = []
    for (let i = 0; i < allCategories.length; i++) {
        for (let j = 0; j < geners.length; j++) {
            if (allCategories[i].id === geners[j]) list.push(allCategories[i].name)
        }
    }

    return (
        <GenresWrapper>
            {list.map((item) => (
                <GenresItem style={{ background: `#${Math.floor(Math.random() * (2 << 23)).toString(16)}` }} >{item}</GenresItem>
            )
            )}
        </GenresWrapper>
    )
}

export default DetailGenres;
