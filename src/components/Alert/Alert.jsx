import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../helpers/history';
import { alertActions } from '../../actions/alert';
import Check from "@material-ui/icons/Check";
import ErrorOutline from "@material-ui/icons/ErrorOutline";
import Info from "@material-ui/icons/Info";
import Warning from "@material-ui/icons/Warning";
import SnackbarContent from "../../components/Snackbar/SnackbarContent.js";

class Alert extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        
        if (!alert.message) {
            return null;
        }

        let icon = Check;
        switch (alert.type) {
            case 'info':
                icon = Info;
                break;
            case 'success':
                icon = Check;
                break;
            case 'warning':
                icon = Warning;
                break;
            case 'danger':
                icon = ErrorOutline;
                break;
            default:
                icon = Info;
        }

        return (
            <SnackbarContent
                message={
                <span>
                    <b>{alert.title}:</b> {alert.message}
                </span>
                }
                close
                color={alert.type}
                icon={icon}
            />
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return { alert };
}

const mapDispatchToProps = {
    clearAlerts: alertActions.clear,
};

const connectedAlert = connect(mapStateToProps, mapDispatchToProps)(Alert);
export { connectedAlert as Alert };
