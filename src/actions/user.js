import { userConstants } from '../constants/user';
import { userService } from '../services/user';
import { alertActions } from './alert';
import { history } from '../helpers/history';


export const FETCH_USER_LEADS_REQUEST = 'FETCH_USER_LEADS_REQUEST';
export const FETCH_USER_LEADS_SUCCESS = 'FETCH_USER_LEADS_SUCCESS';
export const FETCH_USER_LEADS_FAILURE = 'FETCH_USER_LEADS_FAILURE';

export function fetchUserLeadsRequest() {
    return {
        type: FETCH_USER_LEADS_REQUEST
    }
}

export function fethcUserLeadsSuccess(leads) {
    return {
        type: FETCH_USER_LEADS_SUCCESS,
        leads: leads
    }
}

export function fetchUserLeadsFailure(error) {
    return {
        type: FETCH_USER_LEADS_FAILURE,
        error: error
    }
}

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete,
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

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

// function getLeads() {
//     return dispatch => {
//         dispatch(request());

//         userService.getLeads()
//             .then(
//                 leads => dispatch(success(leads)),
//                 error => dispatch(failure(error.toString()))
//             );
//     };

//     function request() { return { type: userConstants.GET_LEADS_REQUEST } }
//     function success(leads) { return { type: userConstants.GET_LEADS_SUCCESS, leads } }
//     function failure(error) { return { type: userConstants.GET_LEADS_FAILURE, error } }
// }
