import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import country from "./country";

export default combineReducers({ country, visibilityFilter });
