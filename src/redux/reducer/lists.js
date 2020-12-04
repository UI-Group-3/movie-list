import * as actionTypes from '../actionConstants';
const initialState = {
    mouseIn: false,
    isLiked: false,
    sortList:["Sort By Name","Sort By Time","Sort By Rating"],
    movieLists: []
};

const listsState = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MOUSE_ENTER:
            return {
                ...state,
                mouseIn: true,
            };
        case actionTypes.MOUSE_LEAVE:
            return {
                ...state,
                mouseIn: false,
            };
        case actionTypes.CLICK_LIKED:
            return {
                ...state,
                isLiked: !state.isLiked,
            };
        case actionTypes.GET_MOVIE_LISTS: {
            return {
                ...state,
                movieLists: [...state.movieLists,
                    ...action.payload.data]
            }
        }

        default: 
            return state;
    }
};

export default listsState;