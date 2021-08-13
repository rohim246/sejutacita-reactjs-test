
const selectCategories = (state) => state.article.categories
const selectCategoryList = (state) => state.article.categoryList
const selectArticleFetchStatus = (state) => state.article.articleFetchStatus

export {
    selectCategories, selectArticleFetchStatus, selectCategoryList
}