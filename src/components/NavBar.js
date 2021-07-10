import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/NavBar.css'

const checkLogin = () => {
    const login = false;
    if(login) {
        return <p className="link-text-auth">Welcome Shubham!</p>
    }
    else{
        return (
            <div>
                <Link className="link-text-auth" to="/login">Login</Link>
                <Link className="link-text-auth" to="/signup">Sign Up</Link>
            </div>
        )
    }
};

const NavBar = (props) => {
    return (
        <div className="navbar-div navbar navbar-light navbar-expand-lg bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse" id="navbarNavDropdown">
                <ul className="nav-item-container navbar-nav">
                    <li className="nav-item active">
                        <Link className="link-text" to="/">Menu 1</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="link-text" to={`/candidate/${props.emailId}`}>Profile</Link>
                    </li>
                    <li className="nav-item active">
                    <Link className="link-text" to="/logout">Logout</Link>
                    </li>
                </ul>
            </div>
            <div className="login-container">
                {checkLogin()}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps)(NavBar);    