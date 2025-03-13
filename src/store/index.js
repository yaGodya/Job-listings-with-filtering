import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
    key: "root",
    storage,
    // whiteList: ['filters', 'positions'],
    // blackList: [],
};

const persistedReducer =  persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
);

export { store };
  export const persistor = persistStore(store)
