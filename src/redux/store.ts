import { configureStore } from '@reduxjs/toolkit'
import homeReducer from "./reducers/home-reducer";
import themeReducer from "./reducers/theme-reducer";

const store = configureStore({
    reducer: {
        home: homeReducer,
        theme: themeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;