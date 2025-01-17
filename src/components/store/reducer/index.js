import { combineReducers } from "redux";
import reserveReducer from "../reducer/reserveReducer";

const rootReducer = combineReducers({ data: reserveReducer });

export default rootReducer;
