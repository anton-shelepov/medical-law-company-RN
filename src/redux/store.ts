import { configureStore } from '@reduxjs/toolkit'
import chatsReducer from "./reducers/chatsReducer";
import homeReducer from "./reducers/homeReducer";
import recommendationsReducer from "./reducers/recomendationsReducer";
import themeReducer from "./reducers/themeReducer";
import authReducer from "./reducers/authReducer";

const store = configureStore({
    reducer: {
        home: homeReducer,
        theme: themeReducer,
        auth: authReducer,
        recommendations: recommendationsReducer,
        chats: chatsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;