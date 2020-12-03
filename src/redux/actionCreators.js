import { GET_MOVIE_GENRES, SET_CLICK_VALUE } from './actionConstants';



export const getMovieGenres = (data) => {
    return {
        type: GET_MOVIE_GENRES,
        payload: {
            data
        }
    };   
};

export const setClickValue = (id) => {
    return {
        type: SET_CLICK_VALUE,
        payload: {
            id
        }
    };   
};