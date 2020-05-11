import {
    LEADS_FETCH_REQUEST,
    LEADS_FETCH_SUCCESS,
    LEADS_FETCH_FAILURE
} from '../actions/leads';
    
const initialState = {
    loading: false,
    leads: [],
    error: null,
};
    
export function leads(state = initialState, action) {
    switch (action.type) {
        case LEADS_FETCH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LEADS_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                leads: action.leads,
            };
        case LEADS_FETCH_FAILURE:
            return { 
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state
    }
}
  
export const getLeads = state => state.leads;
export const getLeadsLoading = state => state.loading;
export const getLeadsError = state => state.error;
    