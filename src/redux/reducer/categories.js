import * as actionTypes from "../actionConstants";

const initialState = {
  genres: [{ id: 1, name: "All" }],
  current: 1,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_GENRES: {
      return {
        ...state,
        genres: [...state.genres, ...action.payload.data],
      };
    }

    case actionTypes.SET_CLICK_VALUE: {
      return {
        ...state,
        genres: state.genres.map((genre) => {
          if (genre.id === action.payload.id) {
            return {
              ...genre,
              isClicked: true,
            };
          } else {
            return {
              ...genre,
              isClicked: false,
            };
          }
        }),
        current: action.payload.id,
      };
    }

    default:
      return state;
  }
};

export default categoriesReducer;
