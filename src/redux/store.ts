import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import chatReducer from "./reducers/chatReducer";
import chatsReducer from "./reducers/chatsReducer";
import homeReducer from "./reducers/homeReducer";
import profileReducer from "./reducers/profileReducer";
import recommendationDetailsReducer from "./reducers/recommendationDetailsReducer";
import recommendationsReducer from './reducers/recommendationsReducer';
import themeReducer from "./reducers/themeReducer";
import userReducer from './reducers/userReducer';
import usersListReducer from './reducers/usersListReducer';
import rootSaga from './reduxSaga/rootSaga';


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
        usersList: usersListReducer,
    },
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;