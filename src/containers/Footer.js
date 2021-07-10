import React from 'react';

import '../styles/Footer.css';
import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import gmail from '../images/gmail.png'

const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-container container">
                <div className="organisation-div left-aligned">
                    <p>Title of the Organisation</p>
                </div>
                <div className="references-collection">
                    <p>
                        This is a project developed for learning purposes using some
                        open source data. This project is developed using 
                        <a className="references-link" target="_blank" href="https://reactjs.org/" rel="noreferrer"> React.js</a>,
                        <a className="references-link" target="_blank" href="https://redux.js.org/" rel="noreferrer"> Redux</a>, 
                        <a className="references-link" target="_blank" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" rel="noreferrer"> Bootstrap 5 </a>
                        and the icons used in this project were used from
                        <a className="references-link" target="_blank" href="https://icons8.com" rel="noreferrer"> Icons8.</a>
                    </p>
                </div>
                <div className="links-container">
                    <p>
                        Follow us on: 
                        <a target="_blank" href="https://www.facebook.com/" rel="noreferrer">
                            <img src={facebook} className="social-media" alt="" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/shubham-pasari" rel="noreferrer">
                            <img src={linkedin} className="social-media" alt="" />
                        </a>
                        <a target="_blank" href="https://www.github.com/Shubh0501" rel="noreferrer">
                            <img src={github} className="social-media" alt="" />
                        </a>
                        <a target="_blank" href="mailto:shubham050197@gmail.com" rel="noreferrer">
                            <img src={gmail} className="social-media" alt="" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;