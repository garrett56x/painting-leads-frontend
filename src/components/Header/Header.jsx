import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user';
import SVG from 'react-inlinesvg';
import './Header.scss';
// @ts-ignore
import logo from '../../assets/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
          <Link to="/" className="logo-wrapper" style={{ textDecoration: 'none' }}>
            <SVG src={logo} className="logo" alt="logo" />
            <span className="logo-title">Painting Leads</span>
          </Link>
          <div className="auth-wrapper">
            { this.props.loggedIn ? 
              <Link to="/" onClick={() => this.props.logout()}>Logout</Link>
              : <Link to="/login">Login</Link> 
            }
          </div>
      </div>
    );
  }
};

function mapState(state) {
  const { loggedIn } = state.user;
  return { loggedIn };
}

const actionCreators = {
  logout: userActions.userLogout
}

const connectedHeader = connect(mapState, actionCreators)(Header);
export { connectedHeader as Header };
