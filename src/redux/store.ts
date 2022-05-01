import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./reducers/home-reducer";
import themeReducer from "./reducers/theme-reducer";
import authReducer from "./reducers/auth-reducer";

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