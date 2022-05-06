import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./reducers/homeReducer";
import themeReducer from "./reducers/themeReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
    reducer: {
        home: homeReducer,
        theme: themeReducer,
        auth: authReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;