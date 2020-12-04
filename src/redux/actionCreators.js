import * as actionTypes from './actionConstants';


export const mouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})

export const clickLiked = () => ({
    type: actionTypes.CLICK_LIKED
})

export const getMovieList = (data) => ({
    type:actionTypes.GET_MOVIE_LISTS,
    payload: {
        data
    }
})





export const getMovieGenres = (data) => {
    return {
        type: actionTypes.GET_MOVIE_GENRES,
        payload: {
            data
        }
    };   
};

export const setClickValue = (id) => {
    return {
        type: actionTypes.SET_CLICK_VALUE,
        payload: {
            id
        }
    };   
};

