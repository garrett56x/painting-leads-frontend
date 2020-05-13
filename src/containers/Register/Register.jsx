import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user';
import Button from '../../components/CustomButtons/Button';
import CustomInput from "../../components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import FormatPaint from "@material-ui/icons/FormatPaint";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import Person from "@material-ui/icons/Person";
import Phone from "@material-ui/icons/Phone";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                company: '',
                email: '',
                password: '',
                phone: '',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { id, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [id]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.name && user.company && user.email && user.phone && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div style={{ width: "400px", margin: "0 auto" }}>
                <h1>Register</h1>
                <form name="form" onSubmit={this.handleSubmit}>
                    <CustomInput
                        labelText={submitted && !user.name ? "Name is required" : "Name"}
                        id="name"
                        error={submitted && !user.name}
                        onChange={this.handleChange}
                        value={user.name}
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            endAdornment: (<InputAdornment position="end"><Person/></InputAdornment>)
                        }}
                    />
                    <CustomInput
                        labelText={submitted && !user.company ? "Company name is required" : "Company Name"}
                        id="company"
                        error={submitted && !user.company}
                        onChange={this.handleChange}
                        value={user.company}
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            endAdornment: (<InputAdornment position="end"><FormatPaint/></InputAdornment>)
                        }}
                    />
                    <CustomInput
                        labelText={submitted && !user.email ? "Email address is required" : "Email Address"}
                        id="email"
                        error={submitted && !user.email}
                        onChange={this.handleChange}
                        value={user.email}
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            endAdornment: (<InputAdornment position="end"><Email/></InputAdornment>)
                        }}
                    />
                    <CustomInput
                        labelText={submitted && !user.phone ? "Phone number is required" : "Phone Number"}
                        id="phone"
                        error={submitted && !user.phone}
                        onChange={this.handleChange}
                        value={user.phone}
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            endAdornment: (<InputAdornment position="end"><Phone/></InputAdornment>)
                        }}
                    />
                    <CustomInput
                        labelText={submitted && !user.password ? "Password is required" : "Password"}
                        id="password"
                        error={submitted && !user.password}
                        onChange={this.handleChange}
                        value={user.password}
                        formControlProps={{
                            fullWidth: true,
                        }}
                        inputProps={{
                            endAdornment: (<InputAdornment position="end"><Lock/></InputAdornment>)
                        }}
                    />
                    <div>
                        <Button color="primary" type="submit">Register</Button>
                        {registering && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Button color="transparent" component={Link} to="/">Cancel</Button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { registering } = state.user;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegister = connect(mapState, actionCreators)(Register);
export { connectedRegister as Register };
