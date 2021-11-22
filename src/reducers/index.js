import { combineReducers } from "redux";
import {addItemList} from "./itemReducer";

const rootReducer = combineReducers({
    addItemReducer: addItemList,
});

export default rootReducer;
