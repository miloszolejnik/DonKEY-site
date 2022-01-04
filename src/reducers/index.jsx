import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import getBlogsReducer from './getBlogsReducer';
import getPostsReducer from "./getPostsReducer";


const rootReducer = combineReducers({
    loginReducer, getBlogsReducer, getPostsReducer,
});

export default rootReducer;