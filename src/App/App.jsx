import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers/history';
import { alertActions } from '../actions/alert';
import { PrivateRoute } from '../components/PrivateRoute';
import { Header } from '../components/Header/Header';
import { Home } from '../containers/Home/Home';
import { Login } from '../containers/Login/Login';
import { Register } from '../containers/Register/Register';
import { Leads } from '../containers/Leads/Leads';
// import './App.css';

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
                    <Header />
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/leads" component={Leads} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
