import * as actionTypes from "../actionConstants";
const initialState = {
    likeLists: [],
    blockLists: [],
    movieLists: [],
    searchList: [],
    page: 1,
    totalPage: 500,
    isSort: true,
    sortBy: [
        { id: 1, name: "Sort By Name", isSort: true },
        { id: 2, name: "Sort By Time", isSort: true },
        { id: 3, name: "Sort By Rating", isSort: true },
    ],
    itemDetail: [],
    searchInput: "",
    focused: false,
    mouseIn: false

};

const listsState = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLICK_LIKED:

            return {
                ...state,
                movieLists: state.movieLists.map((each) => {
                    if (each.id === action.payload.id) {
                        if (each.isLiked === false) {
                            return {
                                ...each,
                                isLiked: true,
                            };
                        } else {
                            return {
                                ...each,
                                isLiked: false,
                            };
                        }
                    }
                    return each;
                }),
            };

        case actionTypes.GET_MOVIE_LISTS: {
            return {
                ...state,
                movieLists: [...action.payload.data].map((each) => {
                    return {
                        ...each,
                        isLiked: false,
                        mouseIn: false,
                        isBlocked: false,
                    };
                }),
            };
        }
        case actionTypes.CLICK_SORT:
            const newSortList = state.sortBy.map((each) => {
                if (each.id === action.id) each.isSort = !each.isSort;
                return each;
            });

            const currentSort = state.sortBy[action.id - 1];
            const sortedMovieList = sortMovies(
                currentSort.name,
                [...state.movieLists],
                currentSort.isSort
            );

            return {
                ...state,
                sortBy: newSortList,
                movieLists: sortedMovieList,
            };

        case actionTypes.PREV_PAGE:
            return {
                ...state,
                page: action.payload.page,
            };

        case actionTypes.NEXT_PAGE:
            return {
                ...state,
                page: action.payload.page,
            };

        case actionTypes.SET_BLOCK_VALUE:
            const newList = state.movieLists
                .map((each) => {
                    if (each.id === action.payload.id) {
                        if (each.isBlocked === false) {
                            return {
                                ...each,
                                isBlocked: true,
                            };
                        } else {
                            return {
                                ...each,
                                isBlocked: false,
                            };
                        }
                    }
                    return each;
                })

            return {
                ...state,
                movieLists: newList
            };
        case actionTypes.SET_ITEM_DETAIL_VALUE:
            return {
                ...state,
                itemDetail: state.movieLists.filter((each) => {
                    return each.id === action.payload.id
                }),
            };

        case actionTypes.ADD_LIKE_LIST:
            return {
                ...state,
                likeLists: state.movieLists.filter(each => {
                    return each.isLiked === true
                })
            }

        case actionTypes.REMOVE_LIKE_LIST:
            return {
                ...state,
                likeLists: state.likeLists.filter(each => {
                    return each.id !== action.payload.id
                })
            }

        case actionTypes.REMOVE_BLOCK_LIST:
            return {
                ...state,
                blockLists: state.blockLists.filter(each => {
                    return each.id !== action.payload.id
                })
            }
        case actionTypes.ADD_BLOCK_LIST:
            return {
                ...state,
                blockLists: state.movieLists.filter(each => {
                    return each.isBlocked === true
                })
            }
        case actionTypes.HANDEL_SEARCH_VALUE:
            const searchValue = action.payload.newSearchValue.split(" ").join("").trim().toUpperCase();

            if (searchValue.length === 0) {
                return {
                    ...state,
                    searchInput: "",
                    searchList: []
                }
            }
            return {
                ...state,
                searchInput: action.payload.newSearchValue,
                searchList: state.movieLists.filter(each => {
                    return (each.title.split(" ").join("").toUpperCase()).match((action.payload.newSearchValue.split(" ").join("").trim().toUpperCase()))
                }).slice(0, 5)
            }

        case actionTypes.SET_SEARCH_INPUT_NULL:
            return {
                ...state,
                searchInput: "",
                searchList: []
            }

        case actionTypes.SET_TOTAL_PAGE:
            return {
                ...state,
                totalPage: action.payload.totalPage
            }
        case actionTypes.HANDEL_ON_FOCUS:
            return {
                ...state,
                focused: true
            }
        case actionTypes.HANDEL_ON_BLUR:
            return {
                ...state,
                focused: false,
            }
        case actionTypes.MOUSE_ENTER:
            return {
                ...state,
                mouseIn: true,
            }
        case actionTypes.MOUSE_LEAVE:
            return {
                ...state,
                mouseIn: false,
            }


        default:
            return state;
    }
};

const sortMovies = (method, list, descend) => {
    switch (method) {
        case "Sort By Name":
            return list.sort((a, b) => {
                let v = a.title.localeCompare(b.title);
                return descend ? v : -v;
            });

        case "Sort By Time":
            return list.sort((a, b) => {
                let v = Date.parse(b.release_date) - Date.parse(a.release_date);
                return descend ? v : -v;
            });

        case "Sort By Rating":
            return list.sort((a, b) => {
                let v = +b.vote_average - +a.vote_average;
                return descend ? v : -v;
            });

        default:
            return;
    }
};

export default listsState;
