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
import axios from 'axios';


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

// FIXME: Remove axios common headers logic initialization from here

// Listening for updating authorization token
store.subscribe(onStoreChangeUpdateToken);

// Choosing access token from storage
function selectToken(state: RootState) {
    return state.user.accessToken
}

// Listener for store change (src/redux/store.ts)
export function onStoreChangeUpdateToken() {
    let accessToken = selectToken(store.getState())
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}


sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;