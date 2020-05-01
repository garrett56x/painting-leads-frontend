import { alertActions } from './alert';
import { history } from '../helpers/history';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_FETCH_DATA_REQUEST = 'USER_FETCH_DATA_REQUEST';
export const USER_FETCH_DATA_SUCCESS = 'USER_FETCH_DATA_SUCCESS';
export const USER_FETCH_DATA_FAILURE = 'USER_FETCH_DATA_FAILURE';

export const userActions = {
    fetchUserData,
    userLogout,
    userLogin,
    register,
};

function userLoginRequest() {
    return {
        type: USER_LOGIN_REQUEST,
    };
}

function userLoginSuccess(userId) {
    return {
        type: USER_LOGIN_SUCCESS,
        userId,
    };
}

function userLoginFailure(error) {
    return {
        type: USER_LOGIN_FAILURE,
        error,
    };
}

function userLogout() {
    localStorage.removeItem('userId');
    return {
        type: USER_LOGOUT,
    };
}

function userRegisterRequest(user) {
    return {
        type: USER_REGISTER_REQUEST,
        user,
    };
}

function userRegisterSuccess(user) {
    return {
        type: USER_REGISTER_SUCCESS,
        user,
    };
}

function userRegisterFailure(error) {
    return {
        type: USER_REGISTER_FAILURE,
        error,
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

function userLogin(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    
    return dispatch => {
        dispatch(userLoginRequest());

        fetch('/api/authenticate', requestOptions)
        .then(handleResponse)
        .then(
            user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('userId', JSON.stringify(user.id));
                dispatch(userLoginSuccess(user.id));
                history.push('/');
            },
            error => {
                dispatch(userLoginFailure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            }
        );
    };
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

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return dispatch => {
        dispatch(userRegisterRequest(user));

        fetch('/api/users', requestOptions)
            .then(handleResponse)
            .then(
                user => { 
                    dispatch(userRegisterSuccess(user));
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(userRegisterFailure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
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
