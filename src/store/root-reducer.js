import { combineReducers } from "redux";

import { positinReducer } from "./positions/position-reducer";

export const rootReducer = combineReducers({
    positions: positinReducer,
});