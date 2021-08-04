import React, {Component, Fragment} from "react";
import { connect } from 'react-redux';
import { Link,Redirect } from "react-router-dom";
import axios from "axios";
import {Dialog, Transition} from "@headlessui/react";
import {Icon} from "@iconify/react";
import twitchIcon from "@iconify-icons/fa-brands/twitch";
import youtubeSquare from "@iconify-icons/fa-brands/youtube-square";
import facebookSquare from "@iconify-icons/fa-brands/facebook-square";
import * as queryString from 'query-string';

import {saveAuthInfo} from '../../../Store/actions/actions';
import closeIcon from "../../../Assets/images/close.svg";
import './LoginRegister.scss';


class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'',

            emailKey: false,
            passwordKey: false,

            emailRequired: false,
            passwordRequired: false,

            isOpen: false,
            registerForm: false,
        }
    }

    handleInput = (e, key) => {
        this.setState({
            [key]: e.target.value
        })

        if (key === 'email') {
            const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
            const result = pattern.test(e.target.value);
            if (result === true) {
                this.setState({
                    emailKey: false,
                })
            } else {
                this.setState({
                    emailKey: true
                })
            }
            if (e.target.value === '') {
                this.setState({
                    emailRequired: true
                })
            } else {
                this.setState({
                    emailRequired: false
                })
            }

        }
        if (key === 'password') {
            if (e.target.value.length < 4) {
                this.setState({
                    passwordKey: true
                })
            } else {
                this.setState({
                    passwordKey: false
                })
            }
            if (e.target.value === '') {
                this.setState({
                    passwordRequired: true
                })
            } else {
                this.setState({
                    passwordRequired: false
                })
            }
        }
    }

    login = () => {
        if (this.state.email === '') {
            this.setState({
                emailRequired: true
            })
            return;
        }
        if (this.state.password === '') {
            this.setState({
                passwordRequired: true
            })
            return;
        }
        if (!this.state.emailKey && !this.state.passwordKey) {
            axios
                .post(
                    `${process.env.REACT_APP_API_URL}/auth/login`,
                    {
                        email: this.state.email,
                        password: this.state.password,
                    }

                )
                .then((res) => {
                    if (res.data.status > 300) {
                        this.setState({
                            serverError: true,
                            error: res.data.error
                        })
                    }else{

                        localStorage.setItem('user',JSON.stringify(res.data.user));
                        localStorage.setItem('token',res.data.token)
                        this.props.saveAuthInfo(res.data.user, res.data.token);
                        this.setState({shouldRedirect:true});
                        this.closeAuthModal();
                    }

                });
        }
    }

    componentDidMount() {
        this.setState({
            isOpen: this.props.isOpen
        })
    }

    closeAuthModal = () => {
        this.props.closeAuthModal();
    }

    showRegister = () => {
        this.setState({
            registerForm: true,
        })
    }

    render() {
        if( this.state.shouldRedirect){
            // return <Redirect to="/" />;
            return <Redirect to={{pathname: '/', state: {chooseplan: true}}} />;
        }

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
                <Transition appear show={this.state.isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={this.closeAuthModal}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >
                              &#8203;
                        </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="relative inline-block w-full max-w-md my-8 px-10 py-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-custom authmodal">
                                    <Dialog.Title
                                        as="h3"
                                        className="font-manrope-medium text-3xl text-gray-700 authmodal__title"
                                    >
                                        {
                                            this.state.registerForm ? <>Create account</> : <>Sign in</>
                                        }
                                    </Dialog.Title>
                                    <div
                                        className="absolute cursor-pointer authmodal__close"
                                        onClick={this.closeAuthModal}
                                    >
                                        <img src={closeIcon} alt="Close Icon"/>
                                    </div>
                                    <div className="mt-6">
                                        {this.state.serverError &&
                                        <div className="font-manrope-semibold text-red mb-4">
                                            {this.state.error}
                                        </div>
                                        }
                                        <a
                                            href={`https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_TWITCH_REDIRECT_URL}&scope=user:read:email`}
                                            className="flex items-center justify-center py-4 border border-solid rounded-full bg-purple font-manrope-medium text-base text-white"
                                        >
                                            <Icon icon={twitchIcon} className="mr-4 w-6 h-6" />
                                            Twitch
                                        </a>
                                        <Link to="/login" className="flex mt-4 items-center justify-center py-4 border border-solid rounded-full bg-red-500 font-manrope-medium text-base text-white">
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
                                    </div>
                                    <div className="relative mt-9 mb-9 authmodal__line">
                                        <hr />
                                        <span>Or</span>
                                    </div>
                                    {
                                        this.state.registerForm ?
                                            <>
                                                <div className="mb-5">
                                                    <p className="font-manrope-semibold text-grey-700 mb-3.5">Email</p>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter email address"
                                                        className="font-manrope px-6 py-4 placeholder-grey-700 placeholder-opacity-40 bg-grey-100 rounded-full text-grey-700 text-base border-0 outline-none w-full"
                                                    />
                                                </div>
                                                <div className="mb-5">
                                                    <p className="font-manrope-semibold text-grey-700 mb-3.5">Name</p>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your name"
                                                        className="font-manrope px-6 py-4 placeholder-grey-700 placeholder-opacity-40 bg-grey-100 rounded-full text-grey-700 text-base border-0 outline-none w-full"
                                                    />
                                                </div>
                                                <button
                                                    className="w-full mt-8 py-4 text-base text-white bg-grey-700 rounded-full"
                                                >
                                                    Next
                                                </button>
                                            </>
                                            :
                                            <>
                                                <div className="mb-5">
                                                    <p className="font-manrope-semibold text-grey-700 mb-3.5">Email</p>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter email address"
                                                        className="font-manrope px-6 py-4 placeholder-grey-700 placeholder-opacity-40 bg-grey-100 rounded-full text-grey-700 text-base border-0 outline-none w-full"
                                                        onChange={(e) => this.handleInput(e, 'email')}
                                                    />
                                                    {this.state.emailKey &&
                                                    <div className="font-manrope-semibold text-red text-center mt-1">
                                                        email is invalid.
                                                    </div>
                                                    }
                                                    {this.state.emailRequired &&
                                                    <div className="font-manrope-semibold text-red text-center mt-1">
                                                        email is required.
                                                    </div>
                                                    }
                                                </div>
                                                <div className="mb-5">
                                                    <p className="font-manrope-semibold text-grey-700 mb-3.5">Password</p>
                                                    <input
                                                        type="password"
                                                        placeholder="Enter your password"
                                                        className="font-manrope px-6 py-4 placeholder-grey-700 placeholder-opacity-40 bg-grey-100 rounded-full text-grey-700 text-base border-0 outline-none w-full"
                                                        onChange={(e) => this.handleInput(e, 'password')}
                                                    />
                                                    {this.state.passwordKey &&
                                                    <div className="font-manrope-semibold text-red text-center mt-1">
                                                        password should be greater than 4 characters.
                                                    </div>
                                                    }
                                                    {this.state.passwordRequired &&
                                                    <div className="font-manrope-semibold text-red text-center mt-1">
                                                        password is required.
                                                    </div>
                                                    }
                                                </div>
                                                <Link to="/forgot-password" className="font-manrope-medium text-grey-300 float-right">
                                                    Forgot password?
                                                </Link>
                                                <button
                                                    className="w-full mt-8 py-4 text-base text-white bg-grey-700 rounded-full"
                                                    onClick={this.login}
                                                >
                                                    Log in
                                                </button>
                                                <div className="flex flex-row justify-center mt-6 font-manrope text-base">
                                                    <span>Don't have an account?</span>
                                                    <Link
                                                        to="#"
                                                        className="text-blue underline"
                                                        onClick={this.showRegister}
                                                    >
                                                        Sign up today
                                                    </Link>
                                                </div>
                                            </>
                                    }
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => {
    return {
        saveAuthInfo: (user,token) => dispatch(saveAuthInfo(user,token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister)
