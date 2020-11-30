import { createStore, applyMiddleware } from "redux";
import prospectsReducer from "./reducers";
import thunk from "redux-thunk";

export default createStore(prospectsReducer, applyMiddleware(thunk));
