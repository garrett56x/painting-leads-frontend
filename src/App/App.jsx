import React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers/history';
import { Alert } from '../components/Alert/Alert';
import { PrivateRoute } from '../components/PrivateRoute';
import { CustomHeader } from '../components/CustomHeader/CustomHeader';
import { Dashboard } from '../containers/Dashboard/Dashboard';
import { Home } from '../containers/Home/Home';
import { Leads } from '../containers/Leads/Leads';
import { Login } from '../containers/Login/Login';
import { Modal } from '../components/Modal/Modal';
import { Register } from '../containers/Register/Register';
import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <CustomHeader />
                    <Alert />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />
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
    return {};
};

const mapDispatchToProps = {};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };
