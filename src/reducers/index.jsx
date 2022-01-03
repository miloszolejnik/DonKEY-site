import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import getBlogsReducer from './getBlogsReducer';


const rootReducer = combineReducers({
    loginReducer, getBlogsReducer,
});

export default rootReducer;