export const MODAL_TOGGLE = 'MODAL_TOGGLE';

export const modalActions = {
    toggle,
};

function toggle(open) {
    return { type: MODAL_TOGGLE, open };
}
