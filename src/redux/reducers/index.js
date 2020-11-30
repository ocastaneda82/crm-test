import { combineReducers } from "redux";
import prospectState from "./prospectsReducer";
import extdataState from "./extDataReducer";

export default combineReducers({ prospectState, extdataState });
