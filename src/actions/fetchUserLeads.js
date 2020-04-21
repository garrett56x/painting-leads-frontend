import {
    fetchUserLeadsRequest,
    fethcUserLeadsSuccess,
    fetchUserLeadsFailure
} from './user';

function fetchUserLeads() {
    return dispatch => {
        dispatch(fetchUserLeadsRequest());
        fetch('/api/users/1/leads')
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                throw(res.error);
            }
            dispatch(fethcUserLeadsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchUserLeadsFailure(error));
        })
    }
}

export default fetchUserLeads;
