import {
    MODAL_TOGGLE,
} from '../actions/modal';

const initialState = {
    open: false,
};
  
export function modal(state = initialState, action) {
    switch (action.type) {
        case MODAL_TOGGLE:
            return {
                open: action.open,
            };
        default:
            return state
    }
}

export const getModalOpen = state => state.open;
  