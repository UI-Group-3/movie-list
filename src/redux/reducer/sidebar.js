import {GET_SIDEBAR_VALUE} from '../actionConstants'

const initialState = {
    bIsSidebarShow: false
}

const sideBar = (state = initialState, action) => {
    switch (action.type) {
        case GET_SIDEBAR_VALUE:
            return {
                ...state,
                bIsSidebarShow: !action.payload.val            
            }
        default:
            return state;
    }
}

export default sideBar;