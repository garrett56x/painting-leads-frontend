import {
    userFetchLeadsRequest,
    userFetchLeadsSuccess,
    userFetchLeadsFailure
} from './user';

function fetchUserLeads() {
    return (dispatch, getState) => {
        dispatch(userFetchLeadsRequest());
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

export default fetchUserLeads;
