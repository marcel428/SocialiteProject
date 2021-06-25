import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "react-string-format";
import { Link } from "react-router-dom";
import "./Header.css";
import { connect } from 'react-redux';
import { saveAuthInfo } from '../../../Store/actions/actions';
import { Dropdown, DropdownButton } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";
import * as queryString from 'query-string';

const stringifiedParams = queryString.stringify({
    client_id: process.env.REACT_APP_FB_APP_ID,
    redirect_uri: process.env.REACT_APP_MAIN_URL,
    scope: ['email', 'user_friends'].join(','), // comma seperated string
    response_type: 'code',
    auth_type: 'rerequest',
    display: 'popup',
});
const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;

class Header extends Component {
    constructor(props) {
        super(props);
    }
    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.props.saveAuthInfo(null, null);
    }
    loginWithFb = () => {

    }
    loginWithTwitch = () => {
        axios.
            get(`${process.env.REACT_APP_API_URL}/auth/twitch`)
            .then((response) => {
                console.log('response')
                console.log(response)
            }).catch((error) => {
                console.log(error)
            });
    }
    render() {
        console.log('process.env.REACT_APP_FB_APP_ID')
        console.log(process.env.REACT_APP_MAIN_URL)
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
                                    <Dropdown.Item href={facebookLoginUrl}>
                                        Login with facebook
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={this.loginWithTwitch}>
                                        Login with twitch
                                    </Dropdown.Item>
                                </DropdownButton>

                        }

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
