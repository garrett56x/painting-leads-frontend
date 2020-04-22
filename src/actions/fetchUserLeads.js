import {
    userFetchLeadsRequest,
    userFetchLeadsSuccess,
    userFetchLeadsFailure
} from './user';

function fetchUserLeads() {
    return dispatch => {
        dispatch(userFetchLeadsRequest());
        fetch('/api/users/1/leads')
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

export default fetchUserLeads;
