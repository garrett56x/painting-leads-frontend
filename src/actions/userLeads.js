export const USER_FETCH_LEADS_REQUEST = 'USER_FETCH_LEADS_REQUEST';
export const USER_FETCH_LEADS_SUCCESS = 'USER_FETCH_LEADS_SUCCESS';
export const USER_FETCH_LEADS_FAILURE = 'USER_FETCH_LEADS_FAILURE';
export const PURCHASE_LEADS_REQUEST = 'PURCHASE_LEADS_REQUEST';
export const PURCHASE_LEADS_SUCCESS = 'PURCHASE_LEADS_SUCCESS';
export const PURCHASE_LEADS_FAILURE = 'PURCHASE_LEADS_FAILURE';

function userFetchLeadsRequest() {
    return {
        type: USER_FETCH_LEADS_REQUEST,
    };
}

function userFetchLeadsSuccess(leads) {
    return {
        type: USER_FETCH_LEADS_SUCCESS,
        leads,
    };
}

function userFetchLeadsFailure(error) {
    return {
        type: USER_FETCH_LEADS_FAILURE,
        error,
    };
}

function purchaseLeadsRequest() {
    return {
        type: PURCHASE_LEADS_REQUEST,
    };
}

function purchaseLeadsSuccess() {
    return {
        type: PURCHASE_LEADS_SUCCESS,
    };
}

function purchaseLeadsFailure(error) {
    return {
        type: PURCHASE_LEADS_FAILURE,
        error,
    };
}

function fetchUserLeads() {
    return (dispatch, getState) => {
        dispatch(purchaseLeadsRequest());
        fetch(`/api/users/${getState().user.userId}/leads`)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw(res.error);
            }
            dispatch(userFetchLeadsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(userFetchLeadsFailure(error));
        })
    }
}

function purchaseUserLeads(leadIds) {
    return (dispatch, getState) => {
        const body = {
            userId: getState().user.userId,
            leadIds,
        };
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        };

        dispatch(userFetchLeadsRequest());
        fetch(`/api/leads/purchase`, requestOptions)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw(res.error);
            }
            dispatch(purchaseLeadsSuccess());
            return res;
        })
        .catch(error => {
            dispatch(purchaseLeadsFailure(error));
        })
    }
}

export const userLeadsActions = {
    fetchUserLeads,
    purchaseUserLeads,
};
