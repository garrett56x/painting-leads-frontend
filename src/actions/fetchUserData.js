import {
    userFetchDataRequest,
    userFetchDataSuccess,
    userFetchDataFailure
} from './user';

function fetchUserLeads() {
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

export default fetchUserLeads;
