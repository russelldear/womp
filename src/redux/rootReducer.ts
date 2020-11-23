import { combineReducers } from "redux";
import imagesReducer from "./imagesSlice";

const rootReducer = combineReducers({
    images: imagesReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
