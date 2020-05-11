import React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers/history';
import { alertActions } from '../actions/alert';
import { PrivateRoute } from '../components/PrivateRoute';
import { CustomHeader } from '../components/CustomHeader/CustomHeader';
import { Modal } from '../components/Modal/Modal';
import { Home } from '../containers/Home/Home';
import { Login } from '../containers/Login/Login';
import { Register } from '../containers/Register/Register';
import { Leads } from '../containers/Leads/Leads';
import './App.scss';


class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <CustomHeader />
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/leads" component={Leads} />
                        <Redirect from="*" to="/" />
                    </Switch>
                    <Modal />
                </Router>
            </div>
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

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };
