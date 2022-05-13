import { configureStore } from '@reduxjs/toolkit'
import chatReducer from "./reducers/chatReducer";
import chatsReducer from "./reducers/chatsReducer";
import homeReducer from "./reducers/homeReducer";
import recommendationsReducer from "./reducers/recomendationsReducer";
import recommendationDetailsReducer from "./reducers/recommendationDetailsReducer";
import themeReducer from "./reducers/themeReducer";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";


const store = configureStore({
    reducer: {
        home: homeReducer,
        theme: themeReducer,
        auth: authReducer,
        recommendations: recommendationsReducer,
        chats: chatsReducer,
        chat: chatReducer,
        recommendationDetails: recommendationDetailsReducer,
        profile: profileReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;