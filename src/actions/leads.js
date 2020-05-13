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
    return (dispatch, getState) => {
        dispatch(leadsFetchRequest());
        fetch("/api/leads")
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw(res.error);
            }
            const userLeadIds = [];
            const { userId } = getState().user;
            if (userId) {
                getState().userLeads.leads.forEach((userLead) => userLeadIds.push(userLead.id));
            }

            const filteredLeads = [];
            res.forEach((lead) => {
                if (userLeadIds.indexOf(lead.id) < 0) {
                    filteredLeads.push(lead);
                }
            });

            dispatch(leadsFetchSuccess(filteredLeads));
            return filteredLeads;
        })
        .catch(error => {
            dispatch(leadsFetchFailure(error));
        })
    }
}

export const leadsActions = {
    fetchLeads,
}
