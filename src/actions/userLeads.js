export const USER_FETCH_LEADS_REQUEST = 'USER_FETCH_LEADS_REQUEST';
export const USER_FETCH_LEADS_SUCCESS = 'USER_FETCH_LEADS_SUCCESS';
export const USER_FETCH_LEADS_FAILURE = 'USER_FETCH_LEADS_FAILURE';

export function userFetchLeadsRequest() {
    return {
        type: USER_FETCH_LEADS_REQUEST,
    };
}

export function userFetchLeadsSuccess(leads) {
    return {
        type: USER_FETCH_LEADS_SUCCESS,
        leads,
    };
}

export function userFetchLeadsFailure(error) {
    return {
        type: USER_FETCH_LEADS_FAILURE,
        error,
    };
}
