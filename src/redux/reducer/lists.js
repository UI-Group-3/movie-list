import * as actionTypes from '../actionConstants';
const initialState = {
    mouseIn: false,
    isLiked: false,
    isSort: true,
    sortBy:[{id:1,name:"Sort By Name",isSort: true},{id:2,name:"Sort By Time",isSort: true},{id:3,name:"Sort By Rating",isSort: true}]
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
        case actionTypes.CLICK_SORT:     
            const newSortList = state.sortBy.map((each)=>{
                if(each.id===action.id)each.isSort=!each.isSort;
                console.log(each);
                return each;})
            return {
                ...state,
                sortBy: newSortList
            }
    }
    return state;
};

export default listsState;