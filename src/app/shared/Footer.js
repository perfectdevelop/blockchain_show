import React, { Component } from 'react';
// import { Trans } from 'react-i18next';
class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between w-100">
            <img className="footer-logo" src={require('../../assets/images/logo-mini.svg')} alt="footer-logo" />
            <ul className="footer-list"> 
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Documentation</li>
              <li>Audits</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;