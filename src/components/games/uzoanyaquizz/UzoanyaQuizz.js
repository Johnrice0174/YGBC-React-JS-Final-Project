import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '@mdi/font/css/materialdesignicons.css';

const UzoanyaQuizz = () => (
    <Fragment>
      <Helmet><title>YGBC-UQ-Home</title></Helmet>
      <div className='uzoanyaQuizz'>
        <section>
          <div style={{textAlign: 'center', marginBottom: '5vh'}}>
            <span className="mdi mdi-cube-outline cube"></span>
          </div>
          <h1>UzoanyaQuizz</h1>
          <div className="uq-play-button-container">
            <ul>
              <li><Link className="uq-play-button" to="uq/play/instructions">Play</Link></li>
            </ul>
          </div>
          <div className="uq-auth-container">
            <Link to="/uq-login" className="uq-auth-buttons" id="uq-login-button">Login</Link>
            <Link to="/uq-register" className="uq-auth-buttons" id="uq-signup-button">Register</Link>
          </div>
        </section>
      </div>
    </Fragment>
);

export default UzoanyaQuizz;
