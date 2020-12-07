export const selectCategories = (store) => store.categoryState.genres;
export const selectSidebar = (store) => store.sidebarState.bIsSidebarShow;
export const selectHeader = (store) => store.headerState.bIsDesktop;
export const selectCurrentPage = (store) => store.listState.page;
export const selectTotalPage = (store) => store.listState.totalPage;
export const selectMovieLists = (store) => store.listState.movieLists;
export const selectBlockLists = (store) => store.listState.blockLists;
export const selectLikeLists = (store) => store.listState.likeLists;
export const selectIsClickedBlockList = (store) =>
  store.listState.isClickedBlockList;
export const selectIsClickedLikeList = (store) =>
  store.listState.isClickedLikeList;
export const selectItemDetail = (store) => store.listState.itemDetail;
export const selectListByGenre = (store) => {
  const movies = store.listState.movieLists;
  const current = store.categoryState.current;

  if (current === 1) {
    return movies;
  }

  return movies.filter(
    (item) => item.genre_ids.findIndex((i) => i === current) > -1
  );
};

export const selectSearchList = (store) => store.listState.searchList;
export const selectSearchInput = (store) => store.listState.searchInput;
