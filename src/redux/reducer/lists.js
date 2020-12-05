import * as actionTypes from '../actionConstants';
const initialState = {
    isLiked: false,
    movieLists: [],
    page: 1,
    totalPage: 500,
    isSort: true,
    sortBy: [{ id: 1, name: "Sort By Name", isSort: true }, { id: 2, name: "Sort By Time", isSort: true }, { id: 3, name: "Sort By Rating", isSort: true }]
};

const listsState = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MOUSE_ENTER:
            return {
                ...state,
                movieLists: state.movieLists.map(each => {
                    if (each.id === action.payload.id) {
                        return {
                            ...each,
                            mouseIn: true
                        };
                    }
                    return each;
                })
            }

        case actionTypes.MOUSE_LEAVE:
            return {
                ...state,
                movieLists: state.movieLists.map(each => {
                    if (each.id === action.payload.id) {
                        return {
                            ...each,
                            mouseIn: false
                        };
                    }
                    return each;
                })
            }
        case actionTypes.CLICK_LIKED:
            return {
                ...state,
                movieLists: state.movieLists.map(each => {
                    if (each.id === action.payload.id) {
                        if (each.isLiked === false) {
                            return {
                                ...each,
                                isLiked: true
                            };
                        } else {
                            return {
                                ...each,
                                isLiked: false
                            };
                        }

                    }
                    return each;
                }),
            }
        case actionTypes.GET_MOVIE_LISTS: {
            return {
                ...state,
                movieLists: [...action.payload.data].map(each => {
                    return {
                        ...each,
                        isLiked: false,
                        mouseIn: false,
                        isBlocked: false
                    }
                })
            }
        }
        case actionTypes.CLICK_SORT:
            const newSortList = state.sortBy.map((each) => {
                if (each.id === action.id) each.isSort = !each.isSort;
                else each.isSort = true;
                return each;
            })
            return {
                ...state,
                sortBy: newSortList
            }

        case actionTypes.PREV_PAGE:
            return {
                ...state,
                page: action.payload.page
            }

        case actionTypes.NEXT_PAGE:
            return {
                ...state,
                page: action.payload.page
            }

        default:
            return state;

    }
};

export default listsState;