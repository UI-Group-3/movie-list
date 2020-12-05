
export const selectCategories = (store) => store.categoryState.genres;
export const selectSidebar = (store) => store.sidebarState.bIsSidebarShow;
export const selectCurrentPage = (store) => store.listState.page;
export const selectTotalPage = (store) => store.listState.totalPage;
export const selectMovieLists = (store) => store.listState.movieLists;
export const selectBlockLists = (store) => store.listState.blockLists;
export const selectLikeLists = (store) => store.listState.likeLists;
export const selectIsClickedBlockList = (store) => store.listState.isClickedBlockList;
export const selectIsClickedLikeList = (store) => store.listState.isClickedLikeList;
