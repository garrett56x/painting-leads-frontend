import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user';
import { modalActions } from '../../actions/modal';
import Button from '../../components/CustomButtons/Button';
import CustomInput from "../../components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";

class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { id, value } = e.target;
        this.setState({ [id]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }

    render() {
        const { loggingIn, loggedIn } = this.props;
        const { email, password, submitted } = this.state;
        
        if (loggedIn) {
            return (
                <div style={{ width: "250px" }}>
                    Successfully logged in!
                </div>
            );
        }

        return (
            <div style={{ width: "250px" }}>
                <form name="form" onSubmit={this.handleSubmit}>
                    <CustomInput
                        labelText={submitted && !email ? "Email is required" : "Email"}
                        id="email"
                        error={submitted && !email}
                        onChange={this.handleChange}
                        value={email}
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            endAdornment: (<InputAdornment position="end"><Email/></InputAdornment>)
                        }}
                    />
                    <CustomInput
                        labelText={submitted && !password ? "Password is required" : "Password"}
                        id="password"
                        type="password"
                        error={submitted && !password}
                        onChange={this.handleChange}
                        value={password}
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            endAdornment: (<InputAdornment position="end"><Lock/></InputAdornment>)
                        }}
                    />
                    <div>
                        <Button color="primary" type="submit">Login</Button>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Button color="transparent" component={Link} to="/register" onClick={() => this.props.toggleModal(false)}>Register</Button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn, loggedIn } = state.user;
    return { loggingIn, loggedIn };
}

const mapDispatchToProps = {
    login: userActions.userLogin,
    logout: userActions.userLogout,
    toggleModal: modalActions.toggle,
};

const connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
export { connectedLogin as Login };
