import ThemeReducer from "./redux/reducers/themeReducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ ThemeReducer });

export default rootReducer;