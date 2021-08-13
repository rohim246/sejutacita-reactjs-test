import reducer from "./articleReducer";
import * as articleAction from "./articleAction";
import * as articleAPI from "./articleAPI";
import * as articleTypes from "./articleTypes";
import * as articleThunk from "./articleThunk";
import * as articleSelector from "./articleSelector"

export {
    articleAction, articleAPI, articleTypes, articleThunk, articleSelector
}

export default reducer;