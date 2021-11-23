import { combineReducers } from "redux";
import {addItemList} from "./itemReducer";

const rootReducer = combineReducers({
    itemListReducer: addItemList,
});

export default rootReducer;
