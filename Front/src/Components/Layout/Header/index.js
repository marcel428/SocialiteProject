import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "react-string-format";
import { Link, Redirect } from "react-router-dom";
import "./Header.css";
import { connect } from 'react-redux';
import { saveAuthInfo } from '../../../Store/actions/actions';
import { Dropdown, DropdownButton } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";
import * as queryString from 'query-string';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        shouldRedirect: false
    }

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.props.saveAuthInfo(null, null);
        return <Redirect
            to={{
                pathname: '/',
            }}
        />
    }


    render() {
        const stringifiedParams = queryString.stringify({
            client_id: process.env.REACT_APP_FB_APP_ID,
            redirect_uri: process.env.REACT_APP_FB_REDIRECT_URL,
            scope: ['email', 'user_friends'].join(','), // comma seperated string
            response_type: 'code',
            auth_type: 'rerequest',
            display: 'popup',
        });
        const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;


        return (
            <div className="w-nav navigation-bar">
                <div className="w-container">
                    <Link to="/" className="brand-link w-nav-brand">
                        <h1 className="brand-text">
                            SOCIALITE
                        </h1>
                    </Link>
                    <nav className="w-nav-menu">
                        <Link to="/" className="w-nav-link">
                            Home
                        </Link>
                        <Link to="/" className="w-nav-link">
                            How It Works (clicking scrolls down to video section)
                        </Link>
                        {
                            this.props.auth.token && this.props.auth.token != null
                                ?
                                <DropdownButton id="dropdown-basic-button" title="Profile">
                                    <Dropdown.Item as={Link} to="/profile">
                                        View profile
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/membership">
                                        Membership
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <span style={{ marginRight: "10px" }}>Balance</span>
                                        <span>0.00</span>
                                        <span>usd</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/deposit">
                                        Make a deposit
                                    </Dropdown.Item>
                                    <Dropdown.Item>Support</Dropdown.Item>
                                    <Dropdown.Item>Invite friends</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.logout()} >
                                        Logout
                                    </Dropdown.Item>
                                </DropdownButton>
                                :
                                <DropdownButton id="dropdown-basic-button" title="Login">
                                    <Dropdown.Item as={Link} to="/login">
                                        Login
                                    </Dropdown.Item>
                                    <div>
                                        <a href={`https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_TWITCH_REDIRECT_URL}&scope=user:read:email`}>
                                            Login with twitch
                                        </a>
                                    </div>
                                    <div>
                                        <a href={facebookLoginUrl}>
                                            Login with Facebook
                                        </a>
                                    </div>


                                </DropdownButton>

                        }

                        {/* <div className="dropdown">
                                    <span className="dropbtn">Dropdown</span>
                                    <div className="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div> */}
                    </nav>
                </div>
                <div>

                </div>


            </div>

        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => {
    return {
        saveAuthInfo: (user, token) => dispatch(saveAuthInfo(user, token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header)
