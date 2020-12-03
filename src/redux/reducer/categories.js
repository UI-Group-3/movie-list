import { GET_MOVIE_GENRES, SET_CLICK_VALUE } from '../actionConstants';

const initialState = {
    genres: []
};

const categoriesReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_MOVIE_GENRES: {
            return {
                ...state,
                genres: action.payload.data
            }
        }

        case SET_CLICK_VALUE: {
            return {
                ...state,
                genres: state.genres.map(genre => {
                    if (genre.id === action.payload.id) {
                        return {
                            ...genre,
                            isClicked: true
                        }
                    }
                    else {
                        return {
                            ...genre,
                            isClicked: false
                        }
                    }
                })
            }
        }

        default :
        return state;
    }
    

    
};

export default categoriesReducer;