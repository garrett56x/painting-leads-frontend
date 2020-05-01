import { userConstants } from '../constants/user';
import { alertActions } from './alert';
import { history } from '../helpers/history';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_FETCH_DATA_REQUEST = 'USER_FETCH_DATA_REQUEST';
export const USER_FETCH_DATA_SUCCESS = 'USER_FETCH_DATA_SUCCESS';
export const USER_FETCH_DATA_FAILURE = 'USER_FETCH_DATA_FAILURE';

export function userLoginRequest() {
    return {
        type: USER_LOGIN_REQUEST,
    };
}

export function userLoginSuccess(userId) {
    return {
        type: USER_LOGIN_SUCCESS,
        userId,
    };
}

export function userLoginFailure() {
    return {
        type: USER_LOGIN_FAILURE,
    };
}

export function userLogout() {
    localStorage.removeItem('userId');
    return {
        type: USER_LOGOUT,
    };
}

function userFetchDataRequest() {
    return {
        type: USER_FETCH_DATA_REQUEST,
    };
}

function userFetchDataSuccess(data) {
    return {
        type: USER_FETCH_DATA_SUCCESS,
        data,
    };
}

function userFetchDataFailure(error) {
    return {
        type: USER_FETCH_DATA_FAILURE,
        error,
    };
}

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    
    return dispatch => {
        dispatch(request());

        fetch('/api/authenticate', requestOptions)
        .then(handleResponse)
        .then(
            user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('userId', JSON.stringify(user.id));
                dispatch(success(user.id));
                history.push('/');
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };

    function request() { return { type: USER_LOGIN_REQUEST } }
    function success(userId) { return { type: USER_LOGIN_SUCCESS, userId } }
    function failure(error) { return { type: USER_LOGIN_FAILURE, error } }
}

function fetchUserData() {
    return (dispatch, getState) => {
        dispatch(userFetchDataRequest());
        fetch(`/api/users/${getState().user.userId}`)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw(res.error);
            }
            dispatch(userFetchDataSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(userFetchDataFailure(error));
        })
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                userLogout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export const userActions = {
    fetchUserData,
    userLogout,
    login,
    // logout,
    register,
    getAll,
    delete: _delete,
};

// function logout() {
//     userService.logout();
//     return { type: userConstants.LOGOUT };
// }

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}
