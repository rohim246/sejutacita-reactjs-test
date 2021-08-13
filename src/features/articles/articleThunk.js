import * as API from "./articleAPI";
import * as action from "./articleAction";

const fetchArticleData = () => async (dispatch) => {
    dispatch(action.fetchArticleData.pending())

    try {
        const { result } = await API.fetchArticleData()
        dispatch(action.fetchArticleData.fulfilled(result))
    }
    catch (err) {
        dispatch(action.fetchArticleData.rejected())
    }
}

export {
    fetchArticleData
}