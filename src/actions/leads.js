export const LEADS_FETCH_REQUEST = 'LEADS_FETCH_REQUEST';
export const LEADS_FETCH_SUCCESS = 'LEADS_FETCH_SUCCESS';
export const LEADS_FETCH_FAILURE = 'LEADS_FETCH_FAILURE';

export function leadsFetchRequest() {
    return {
        type: LEADS_FETCH_REQUEST,
    };
}

export function leadsFetchSuccess(leads) {
    return {
        type: LEADS_FETCH_SUCCESS,
        leads,
    };
}

export function leadsFetchFailure(error) {
    return {
        type: LEADS_FETCH_FAILURE,
        error,
    };
}

function fetchLeads() {
    console.log("FETCHING LEADS");
    return (dispatch) => {
        dispatch(leadsFetchRequest());
        fetch(`/api/leads`)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw(res.error);
            }
            dispatch(leadsFetchSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(leadsFetchFailure(error));
        })
    }
}

export const leadsActions = {
    fetchLeads,
}
