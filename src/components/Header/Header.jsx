import React from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import './Header.scss';
// @ts-ignore
import logo from '../../assets/logo.svg';

export const Header = () => (
  <div className="header">
      <Link to="/" className="logo-wrapper" style={{ textDecoration: 'none' }}>
        <SVG src={logo} className="logo" alt="logo" />
        <span className="logo-title">Painting Leads</span>
      </Link>
      <div className="auth-wrapper">
        <Link to="/login">Logout</Link>
      </div>
  </div>
);
