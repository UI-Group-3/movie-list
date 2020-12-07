import * as actionTypes from "./actionConstants";

export const clickLiked = (id) => ({
  type: actionTypes.CLICK_LIKED,
  payload: {
    id,
  },
});

export const getMovieList = (data) => ({
  type: actionTypes.GET_MOVIE_LISTS,
  payload: {
    data,
  },
});

export const setSidebarStatus = (sidebar_status, platform_style) => ({
  type: actionTypes.SET_SIDEBAR_STATUS,
  payload: {
    sidebar_status,
    platform_style,
  },
});

export const setPlatformStyle = (bIsDesktop) => ({
  type: actionTypes.SET_PLATFORM_STYLE,
  payload: {
    bIsDesktop,
  },
});

export const clickSort = (id) => ({
  type: actionTypes.CLICK_SORT,
  id,
});

export const prevPage = (page) => ({
  type: actionTypes.PREV_PAGE,
  payload: {
    page,
  },
});
export const nextPage = (page) => ({
  type: actionTypes.NEXT_PAGE,
  payload: {
    page,
  },
});

export const getMovieGenres = (data) => {
  return {
    type: actionTypes.GET_MOVIE_GENRES,
    payload: {
      data,
    },
  };
};

export const setClickValue = (id) => {
  return {
    type: actionTypes.SET_CLICK_VALUE,
    payload: {
      id,
    },
  };
};

export const setBlockValue = (id) => {
  return {
    type: actionTypes.SET_BLOCK_VALUE,
    payload: { id },
  };
};

export const setItemDetailValue = (id) => {
  return {
    type: actionTypes.SET_ITEM_DETAIL_VALUE,
    payload: {
      id,
    },
  };
};

export const addLikeList = () => {
  return {
    type: actionTypes.ADD_LIKE_LIST,
  };
};

export const removeLikeList = (id) => {
  return {
    type: actionTypes.REMOVE_LIKE_LIST,
    payload: { id },
  };
};

export const removeBlockList = (id) => {
  return {
    type: actionTypes.REMOVE_BLOCK_LIST,
    payload: { id },
  };
};

export const addBlockList = () => {
  return {
    type: actionTypes.ADD_BLOCK_LIST,
  };
};

export const clickDisliked = (id) => ({
  type: actionTypes.CLICK_DISLIKED,
  payload: {
    id
  }
})

export const setTotalPage = (totalPage) => ({
  type: actionTypes.SET_TOTAL_PAGE,
  payload: {
    totalPage
  }
})

export const handelSeachValue = (newSearchValue) => {
  return {
    type: actionTypes.HANDEL_SEARCH_VALUE,
    payload: { newSearchValue },
  };
};

export const setSearchNull = () => ({
  type: actionTypes.SET_SEARCH_INPUT_NULL,
});
