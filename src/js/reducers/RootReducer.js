import { combineReducers } from "redux";
import createFetchReducer from "./FetchReducer";
import filter from "./FilterReducer";
import banners from "./BannerReducer";
import ui from "./UIReducer";
//import banners from "./FetchReducer";

export default combineReducers({
   config:createFetchReducer("CONFIG"),
   banners,
   filter,
   ui
});