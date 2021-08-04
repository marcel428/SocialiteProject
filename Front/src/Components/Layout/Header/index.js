import React, {Fragment, Component} from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Popover, Transition} from '@headlessui/react';
import {ChevronDownIcon} from '@heroicons/react/solid';
import { Icon } from '@iconify/react';
import twitchIcon from '@iconify-icons/fa-brands/twitch';
import youtubeSquare from '@iconify-icons/fa-brands/youtube-square';
import facebookSquare from '@iconify-icons/fa-brands/facebook-square';
import { HashLink } from 'react-router-hash-link';

import * as queryString from 'query-string';

import {saveAuthInfo} from '../../../Store/actions/actions';
import LoginRegister from "../../Auth/LoginRegister";

import "./Header.scss";


import ChoosePlan from "../../ChoosePlan";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRedirect: false,
            navbarOpen: false,
            showAuthModal: false,
        }
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

    setNavbarOpen = (navbarOpen) => {
        this.setState({
            navbarOpen: navbarOpen,
        })
    }

    openAuthModal = () => {
        this.setState({
            showAuthModal: true,
        });
    }

    closeAuthModal = () => {
        this.setState({
            showAuthModal: false,
        });
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
            <>
                <nav className="w-full absolute top-0 flex flex-wrap items-center justify-between bg-transparent z-20 nav">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                            <Link to="/" className="font-manrope-medium text-xl inline-block whitespace-nowrap uppercase text-white logo">
                                Socialite
                            </Link>
                            <button
                                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => this.setNavbarOpen(!this.state.navbarOpen)}
                            >
                                <FontAwesomeIcon icon={faBars}/>
                            </button>
                        </div>
                        <div
                            className={
                                "nav__right md:flex flex-grow items-center absolute md:relative md:px-0" +
                                (this.state.navbarOpen ? " flex" : " hidden")
                            }
                            id="example-navbar-danger"
                        >
                            <ul className="flex flex-col md:items-center md:flex-row list-none md:ml-auto">
                                <li>
                                    <Link
                                        to="/"
                                        className="font-manrope-medium text-base leading-5 flex items-center text-white md:mx-7 my-4"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about-us"
                                        className="font-manrope-medium text-base leading-5 flex items-center text-white md:mx-7 my-4"
                                    >
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <HashLink
                                        smooth
                                        to={'/#how-it-works'}
                                        className="font-manrope-medium text-base leading-5 flex items-center text-white md:mx-7 my-4"
                                    >
                                        How it works
                                    </HashLink>
                                </li>
                                <li>
                                    <Popover className="relative">
                                        {({open}) => (
                                            <>
                                                <Popover.Button
                                                    className={`
                                                        ${open ? '' : 'text-opacity-100'}
                                                        font-manrope-medium inline-flex items-center text-white bg-transparent border border-solid border-white md:ml-1 px-8 py-3 rounded-full outline-none`}
                                                >
                                                    {
                                                        this.props.auth.token && true ?
                                                            <span>Profile</span>
                                                            :
                                                            <span>Log in</span>
                                                    }
                                                    <ChevronDownIcon
                                                        className={`${open ? '' : 'text-opacity-100'}
                                                            ml-3 h-6 w-6`}
                                                        aria-hidden="true"
                                                    />
                                                </Popover.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0 translate-y-1"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-1"
                                                >
                                                    <Popover.Panel className="absolute z-10 w-72 mt-6 transform left-0 md:-left-36">
                                                        <div className="overflow-hidden rounded-lg shadow-lg">
                                                            <div className="relative flex flex-col bg-white p-6 px-5">
                                                                {
                                                                    this.props.auth.token && true ?
                                                                        <>
                                                                            <Link to="/profile" className="flex items-center justify-center py-4 border border-solid rounded-full font-manrope-medium text-base text-grey-700 nav__right_loginEmail">
                                                                                View profile
                                                                            </Link>
                                                                            <Link to="/membership" className="flex items-center justify-center mt-4 py-4 border border-solid rounded-full font-manrope-medium text-base text-grey-700 nav__right_loginEmail">
                                                                                Membership
                                                                            </Link>
                                                                            <Link to="#" className="flex items-center justify-around mt-4 py-4 border border-solid rounded-full font-manrope-medium text-base text-grey-700 nav__right_loginEmail">
                                                                                <div>
                                                                                    <span className="mr-1">0.00</span>
                                                                                    <span>usd</span>
                                                                                </div>
                                                                                Balance
                                                                            </Link>
                                                                            <Link to="/deposit" className="flex items-center justify-center mt-4 py-4 border border-solid rounded-full font-manrope-medium text-base text-grey-700 nav__right_loginEmail">
                                                                                Make a deposit
                                                                            </Link>
                                                                            <Link to="#" className="flex items-center justify-center mt-4 py-4 border border-solid rounded-full font-manrope-medium text-base text-grey-700 nav__right_loginEmail">
                                                                                Support
                                                                            </Link>
                                                                            <Link to="#" className="flex items-center justify-center mt-4 py-4 border border-solid rounded-full font-manrope-medium text-base text-grey-700 nav__right_loginEmail">
                                                                                Invite friends
                                                                            </Link>
                                                                            <Link
                                                                                to="#"
                                                                                className="flex items-center justify-center mt-4 py-4 border border-solid rounded-full font-manrope-medium text-base text-grey-700 nav__right_loginEmail"
                                                                                onClick={() => this.logout()}
                                                                            >
                                                                                Logout
                                                                            </Link>
                                                                        </>
                                                                        :
                                                                        <>
                                                                            <button
                                                                                className="flex items-center justify-center py-4 border border-solid rounded-full font-manrope-medium text-base text-grey-700 nav__right_loginEmail"
                                                                                onClick={this.openAuthModal}
                                                                            >
                                                                                Log in with email
                                                                            </button>
                                                                            <div className="relative">
                                                                                <hr className="mt-8 mb-8 nav__right_line"/>
                                                                                <span>Or log in with</span>
                                                                            </div>
                                                                            <a
                                                                                href={`https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_TWITCH_REDIRECT_URL}&scope=user:read:email`}
                                                                                className="flex items-center justify-center py-4 border border-solid rounded-full bg-purple font-manrope-medium text-base text-white"
                                                                            >
                                                                                <Icon icon={twitchIcon} className="mr-4 w-6 h-6" />
                                                                                Twitch
                                                                            </a>
                                                                            <Link to="#" className="flex mt-4 items-center justify-center py-4 border border-solid rounded-full bg-red-500 font-manrope-medium text-base text-white">
                                                                                <Icon icon={youtubeSquare} className="mr-4 w-6 h-6" />
                                                                                Youtube
                                                                            </Link>
                                                                            <a
                                                                                href={facebookLoginUrl}
                                                                                className="flex mt-4 items-center justify-center py-4 border border-solid rounded-full bg-blue font-manrope-medium text-base text-white"
                                                                            >
                                                                                <Icon icon={facebookSquare} className="mr-4 w-6 h-6" />
                                                                                Facebook
                                                                            </a>
                                                                        </>
                                                                }
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {
                    this.state.showAuthModal &&
                    <LoginRegister isOpen={this.state.showAuthModal} closeAuthModal={this.closeAuthModal} />
                }
            </>
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
