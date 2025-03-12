import { combineReducers } from "redux";

import { positinReducer } from "./positions/position-reducer";
import {filterReducer} from './filters/filter-reducer'

export const rootReducer = combineReducers({
    positions: positinReducer,
    filters: filterReducer,
});