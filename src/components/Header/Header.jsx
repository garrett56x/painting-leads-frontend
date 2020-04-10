import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/logo';
// import './Header.css';

export const Header = () => (
  <div className="header">
      <Link to="/" className="logo-wrapper" style={{ textDecoration: 'none' }}>
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <span className="logo-title">Painting Leads</span>
      </Link>
  </div>
);
