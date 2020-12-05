import * as actionTypes from './actionConstants';

export const mouseEnter = (id) => (
    {
        type: actionTypes.MOUSE_ENTER,
        payload: { id }
    });

export const mouseLeave = (id) => ({
    type: actionTypes.MOUSE_LEAVE,
    payload: { id }
})

export const clickLiked = (id) => ({
    type: actionTypes.CLICK_LIKED,
    payload: { id }
})

export const getMovieList = (data) => ({
    type: actionTypes.GET_MOVIE_LISTS,
    payload: {
        data
    }
})

export const getSidebarStatus = (val) => ({
    type: actionTypes.GET_SIDEBAR_VALUE,
    payload: {
        val
    }
})
export const clickSort = (id) => ({
    type: actionTypes.CLICK_SORT,
    id

})


export const prevPage = (page) => ({
    type: actionTypes.PREV_PAGE,
    payload: {
        page
    }
})
export const nextPage = (page) => ({
    type: actionTypes.NEXT_PAGE,
    payload: {
        page
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

