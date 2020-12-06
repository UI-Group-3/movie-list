import { act } from "react-dom/test-utils";
import * as actionTypes from "./actionConstants";

export const mouseEnter = (id) => ({
    type: actionTypes.MOUSE_ENTER,
    payload: { id },
});

export const mouseLeave = (id) => ({
    type: actionTypes.MOUSE_LEAVE,
    payload: { id },
});

export const clickLiked = (data) => ({
    type: actionTypes.CLICK_LIKED,
    payload: { data }
})

export const getMovieList = (data) => ({
    type: actionTypes.GET_MOVIE_LISTS,
    payload: {
        data,
    },
});

export const getSidebarStatus = (val) => ({
    type: actionTypes.GET_SIDEBAR_VALUE,
    payload: {
        val,
    },
});
export const clickSort = (id) => ({
    type: actionTypes.CLICK_SORT,
    id,
});

export const prevPage = (page) => ({
    type: actionTypes.PREV_PAGE,
    payload: {
        page,
    },
});
export const nextPage = (page) => ({
    type: actionTypes.NEXT_PAGE,
    payload: {
        page,
    },
});

export const getMovieGenres = (data) => {
    return {
        type: actionTypes.GET_MOVIE_GENRES,
        payload: {
            data,
        },
    };
};

export const setClickValue = (id) => {
    return {
        type: actionTypes.SET_CLICK_VALUE,
        payload: {
            id,
        },
    };
};

export const setBlockValue = (data) => {
    return {
        type: actionTypes.SET_BLOCK_VALUE,
        payload: {
            data
        }
    };
};

export const setItemDetailValue = (id) => {
    return {
        type: actionTypes.SET_ITEM_DETAIL_VALUE,
        payload: {
            id
        }
    };
};

export const setClickBlockListValue = () => {
    return {
        type: actionTypes.SET_CLICK_BLOCKLIST_VALUE,
    };
};

export const setClickLikeListValue = () => {
    return {
        type: actionTypes.SET_CLICK_LIKELIST_VALUE,
    };
};

export const setClickMovieListValue = () => {
    return {
        type: actionTypes.SET_CLICK_MOVIELIST_VALUE,
    };
};
