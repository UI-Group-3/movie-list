import { SET_PLATFORM_STYLE } from "../actionConstants";

const initialState = {
  bIsDesktop: true,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLATFORM_STYLE:
      return {
        ...state,
        bIsDesktop: action.payload.bIsDesktop,
      };

    default:
      return state;
  }
};

export default headerReducer;
