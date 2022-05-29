import { configureStore } from '@reduxjs/toolkit'
import chatReducer from "./reducers/chatReducer";
import chatsReducer from "./reducers/chatsReducer";
import homeReducer from "./reducers/homeReducer";
import recommendationDetailsReducer from "./reducers/recommendationDetailsReducer";
import themeReducer from "./reducers/themeReducer";
import profileReducer from "./reducers/profileReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from './reduxSaga/rootSaga';
import userReducer from './reducers/userReducer';
import recommendationsReducer from './reducers/recommendationsReducer';


let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    middleware: [sagaMiddleware],
    reducer: {
        home: homeReducer,
        theme: themeReducer,
        user: userReducer,
        recommendations: recommendationsReducer,
        chats: chatsReducer,
        chat: chatReducer,
        recommendationDetails: recommendationDetailsReducer,
        profile: profileReducer,
    },
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;