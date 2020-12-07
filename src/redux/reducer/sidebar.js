import { SET_SIDEBAR_STATUS } from "../actionConstants";

const initialState = {
  bIsSidebarShow: true,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDEBAR_STATUS:
      return {
        ...state,
        bIsSidebarShow: action.payload.platform_style
          ? true
          : !action.payload.sidebar_status,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
