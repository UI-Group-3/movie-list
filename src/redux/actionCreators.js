import { GET_MOVIE_GENRES, SET_CLICK_VALUE, MOUSE_ENTER, MOUSE_LEAVE, CLICK_LIKED, GET_SIDEBAR_VALUE} from './actionConstants';


export const mouseEnter = () => ({
    type: MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: MOUSE_LEAVE
})

export const clickLiked = () => ({
    type: CLICK_LIKED
})

export const getSidebarStatus = (val)=>({
    type: GET_SIDEBAR_VALUE,
    payload: {
        val
    }
})



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

