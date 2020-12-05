import Sort from "../../components/Sort";
import * as actionTypes from "../actionConstants";
const initialState = {
    isLiked: false,
    movieLists: [],
    page: 1,
    totalPage: 500,
    isSort: true,
    sortBy: [{ id: 1, name: "Sort By Name", isSort: true }, { id: 2, name: "Sort By Time", isSort: true }, { id: 3, name: "Sort By Rating", isSort: true }],
    itemDetail: []
};

const listsState = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOUSE_ENTER:
      return {
        ...state,
        movieLists: state.movieLists.map((each) => {
          if (each.id === action.payload.id) {
            return {
              ...each,
              mouseIn: true,
            };
          }
          return each;
        }),
      };

    case actionTypes.MOUSE_LEAVE:
      return {
        ...state,
        movieLists: state.movieLists.map((each) => {
          if (each.id === action.payload.id) {
            return {
              ...each,
              mouseIn: false,
            };
          }
          return each;
        }),
      };
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

      console.log(sortedMovieList);

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
      return {
        ...state,
        movieLists: state.movieLists
          .map((each) => {
            if (each.id === action.payload.id) {
              return {
                ...each,
                isBlocked: true,
              };
            }
            return each;
          })
          .filter((movie) => {
            return movie.isBlocked === false;
          }),
      };
        case actionTypes.SET_ITEM_DETAIL_VALUE:
            return {
                ...state,
                itemDetail: state.movieLists.filter(each => {
                    if (each.id === action.payload.id) {
                        return {
                            each
                        }
                    }
                })

            }


    default:
      return state;
  }
};

const sortMovies = (method, list, descend) => {
  console.log(list, method, descend);
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
