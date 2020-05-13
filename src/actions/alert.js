export const ALERT_INFO = 'ALERT_INFO';
export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_WARNING = 'ALERT_WARNING';
export const ALERT_ERROR = 'ALERT_ERROR';
export const ALERT_CLEAR = 'ALERT_CLEAR';

export const alertActions = {
    info,
    success,
    warning,
    error,
    clear
};

function info(message) {
    return { type: ALERT_INFO, message };
}

function success(message) {
    return { type: ALERT_SUCCESS, message };
}

function warning(message) {
    return { type: ALERT_WARNING, message };
}

function error(message) {
    return { type: ALERT_ERROR, message };
}

function clear() {
    return { type: ALERT_CLEAR };
}
