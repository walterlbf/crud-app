import { combineReducers } from "redux";
import {itemReducer} from "./itemReducer";

const rootReducer = combineReducers({
    itemsList: itemReducer,
});

export default rootReducer;
