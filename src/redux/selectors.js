
export const selectCategories = (store) => store.categoryState.genres;
export const selectSidebar = (store) => store.sidebarState.bIsSidebarShow;
export const selectCurrentPage = (store) => store.listState.page;
export const selectTotalPage = (store) => store.listState.totalPage;
export const selectMovieLists = (store) => store.listState.movieLists;
export const selectItemDetail = (store) => store.listState.itemDetail;