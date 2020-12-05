import * as actionTypes from '../actionConstants';
const initialState = {
    // isLiked: false,
    isClickedBlockList: false,
    isClickedLikeList: false,
    blockLists: [],
    likeLists: [],
    movieLists: [],
    page: 1,
    totalPage: 3,
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
                likeLists: [...state.likeLists, action.payload.data],
                movieLists: state.movieLists.map(each => {
                    if (each.id === action.payload.data.id) {
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
                })
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

        case actionTypes.SET_BLOCK_VALUE:

            const newList = state.movieLists.map(each => {
                if (each.id === action.payload.data.id) {
                    return {
                        ...each,
                        isBlocked: true
                    };
                }
                return each;
            }).filter(each => {
                return each.isBlocked === false
            });

            return {
                ...state,
                blockLists: [...state.blockLists, action.payload.data],
                movieLists: newList
            }
        case actionTypes.SET_CLICK_BLOCKLIST_VALUE:
            return {
                ...state,
                isClickedLikeList: false,
                isClickedBlockList: true
            }

        case actionTypes.SET_CLICK_LIKELIST_VALUE:
            return {
                ...state,
                isClickedBlockList: false,
                isClickedLikeList: true
            }

        case actionTypes.SET_CLICK_MOVIELIST_VALUE:
            return {
                ...state,
                isClickedBlockList: false,
                isClickedLikeList: false
            }

        default:
            return state;

    }
};

export default listsState;