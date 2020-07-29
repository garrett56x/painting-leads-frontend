import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Link to="/">Home</Link> | <Link to="/test">Test</Link>
      </div>
    );
    }
}
// const Footer = () => (
//   <div className="footer">
//     <Link to="/">Home</Link> | <Link to="/test">Test</Link>
//   </div>
// );

export default Footer;