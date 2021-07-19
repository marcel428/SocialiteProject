import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveAuthInfo } from '../../../Store/actions/actions'
import { Link, Redirect } from "react-router-dom";
import axios from "axios";


class ForgotPassword extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        email: '',
        emailKey: false,
        emailRequired: false,
        shouldRedirect:false

    }
    handleInput = (e) => {

        this.setState({
            email: e.target.value
        });

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

        if (e.target.value == '') {
            this.setState({
                emailRequired: true
            })
        } else {
            this.setState({
                emailRequired: false
            })
        }

    }
    confirm = () => {
        axios
            .post(
                `${process.env.REACT_APP_API_URL}/auth/resend-code`,
                {
                    email: this.state.email,
                }
            )
            .then((res) => {
                if (res.data.status > 300) {
                    this.setState({
                        serverError: true,
                        error: res.data.error
                    })
                } else {
                    alert('Sent verification code successfully!');
                    localStorage.setItem('emailForForgot',this.state.email);
                    this.setState({
                        shouldRedirect:true
                    })
                }

            });
    }


    render() {
        if (this.state.shouldRedirect) {
            return <Redirect
                to="/verify-code" />
        }

        return (
            <div style={{ marginTop: '100px', textAlign: "center" }}>
                {
                    this.state.serverError
                        ?
                        <div style={{ color: "red" }}>
                            {this.state.error}
                        </div>
                        :
                        null
                }
                <div style={{ marginTop: "20px" }}>
                    <div>
                        email:
                    </div>
                    <input onChange={(e) => this.handleInput(e)} type="email" />
                    {
                        this.state.emailKey
                            ?
                            <div style={{ color: 'red' }}>
                                email is invalid.
                            </div>
                            :
                            null
                    }
                    {
                        this.state.emailRequired
                            ?
                            <div style={{ color: 'red' }}>
                                email is required.
                            </div>
                            :
                            null
                    }

                </div>

                <div style={{ marginTop: "20px" }}>
                    <button onClick={() => { this.confirm() }}>
                        Send OTP
                    </button>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <Link to="/">
                        Go To Home
                    </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword )
