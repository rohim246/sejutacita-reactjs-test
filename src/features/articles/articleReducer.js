import * as types from "./articleTypes"

const INITIAL_STATE = {
    categoryList: [],
    categories: [],
    articleFetchStatus: "idle",
    articleFetchErorr: false,
}

const articleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.fetchArticleData.pending: {
            return {
                ...state,
                categoryList: [],
                categories: [],
                articleFetchStatus: "pending",
                articleFetchErorr: false,
            }
        }
        case types.fetchArticleData.fulfilled: {
            const { categoriesList, categories } = action.payload
            return {
                ...state,
                categoryList: categoriesList,
                categories: categories,
                articleFetchStatus: "fulfilled",
            }
        }
        case types.fetchArticleData.rejected: {
            return {
                ...state,
                articleFetchStatus: "rejected",
                articleFetchErorr: true,
            }
        }
        default:
            return state;
    }
}

export default articleReducer;