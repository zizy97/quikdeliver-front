import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

import { persistStore, persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER  } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfigUser = {
    key: "user",
    version: 1,
    storage,
}

const userPersistReducer = persistReducer(persistConfigUser, userSlice);

export const store = configureStore({
    reducer: {
        user: userPersistReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }),
});

export const persistor = persistStore(store);