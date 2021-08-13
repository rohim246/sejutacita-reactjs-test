import { combineReducers } from "redux";
import articleReducer from "../features/articles/articleReducer";

export const rootReducer = combineReducers({
    article: articleReducer
})
