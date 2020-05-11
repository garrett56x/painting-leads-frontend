import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { modalActions } from '../../actions/modal';
import { userActions } from '../../actions/user';
import SVG from 'react-inlinesvg';
import './CustomHeader.scss';
// @ts-ignore
import logo from '../../assets/logo.svg';

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header
        color="dark"
        brand="Painting Leads"
        // leftLinks={
        //   <Link to="/" className="logo-wrapper" style={{ textDecoration: 'none' }}>
        //     <SVG src={logo} className="logo" alt="logo" />
        //     <span className="logo-title">Painting Leads</span>
        //   </Link>
        // }
        rightLinks={
          <div className="auth-wrapper">
            { this.props.loggedIn ? 
            <Link to="/" onClick={() => this.props.logout()}>Logout</Link>
            : <a onClick={() => this.props.toggleModal(true)}>Login</a> 
            }
          </div>
        }
      >
      </Header>
    );
  }
};

function mapStateToProps(state) {
  const { loggedIn } = state.user;
  return { loggedIn };
}

const mapDispatchToProps = {
  logout: userActions.userLogout,
  toggleModal: modalActions.toggle,
}

const connectedHeader = connect(mapStateToProps, mapDispatchToProps)(CustomHeader);
export { connectedHeader as CustomHeader };
