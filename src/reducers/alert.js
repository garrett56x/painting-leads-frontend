import {
  ALERT_INFO,
  ALERT_SUCCESS,
  ALERT_WARNING,
  ALERT_ERROR,
  ALERT_CLEAR,
} from '../actions/alert';

export function alert(state = {}, action) {
  switch (action.type) {
    case ALERT_INFO:
      return {
        title: 'INFO',
        type: 'info',
        message: action.message
      };
    case ALERT_SUCCESS:
      return {
        title: 'SUCCESS',
        type: 'success',
        message: action.message
      };
    case ALERT_WARNING:
      return {
        title: 'WARNING',
        type: 'warning',
        message: action.message
      };
    case ALERT_ERROR:
      return {
        title: 'ERROR',
        type: 'danger',
        message: action.message
      };
    case ALERT_CLEAR:
      return {};
    default:
      return state
  }
}
