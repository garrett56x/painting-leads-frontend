import React from 'react';
import { Link, Redirect, Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import SVG from 'react-inlinesvg';
import { history } from '../helpers/history';
import { alertActions } from '../actions/alert';
import { userActions } from '../actions/user';
import { PrivateRoute } from '../components/PrivateRoute';
import Header from '../components/Header/Header';
import { Home } from '../containers/Home/Home';
import { Login } from '../containers/Login/Login';
import { Register } from '../containers/Register/Register';
import { Leads } from '../containers/Leads/Leads';
import logo from '../assets/logo.svg';
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
                    <Header
                        color="dark"
                        brand={
                            <Link to="/" className="logo-wrapper" style={{ textDecoration: 'none' }}>
                                <SVG src={logo} className="logo" alt="logo" />
                                <span className="logo-title">Painting Leads</span>
                            </Link>
                        }
                        rightLinks={[
                            <div className="auth-wrapper">
                                { this.props.loggedIn ? 
                                <Link to="/" onClick={() => this.props.logout()}>Logout</Link>
                                : <Link to="/login">Login</Link> 
                                }
                            </div>
                        ]}
                    >
                    </Header>
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

function mapStateToProps(state) {
    const { alert } = state;
    const { loggedIn } = state.user;
    return { alert, loggedIn };
}

const mapDispatchToProps = {
    clearAlerts: alertActions.clear,
    logout: userActions.userLogout
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };
