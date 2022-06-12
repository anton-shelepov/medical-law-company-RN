import { AxiosResponse } from 'axios';
import { call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import usersAPI from '../../../api/users.api';
import { PINNED_USERS_FETCH_REQUEST } from '../../../constants/actionTypes';
import { IPinnedUsersFetchRequest, UsersListItem } from '../../reducers/usersListReducer/types';
import { pinnedUsersFetchFailure, pinnedUsersFetchSuccess } from '../../reducers/usersListReducer/usersListActions';

function* pinnedUsersFetchSaga({ }: IPinnedUsersFetchRequest) {
    try {
        const response: AxiosResponse<UsersListItem[]> = yield call(usersAPI.fetchPinnedUsers);
        yield put(pinnedUsersFetchSuccess(response.data))

    } catch (error) {
        yield put(pinnedUsersFetchFailure({ type: '', message: error.message }))
        return error
    }
}

function* usersListSaga(): Generator<StrictEffect> {
    yield takeLatest(PINNED_USERS_FETCH_REQUEST, pinnedUsersFetchSaga);
}

export default usersListSaga;