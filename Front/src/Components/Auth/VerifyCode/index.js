import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveAuthInfo } from '../../../Store/actions/actions'
import { Link, Redirect } from "react-router-dom";
import axios from "axios";


class VerifyCode extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        verificationCode:'',
        shouldRedirect:false
    }
    handleInput = (e) => {
        this.setState({
            verificationCode:e.target.value
        })

    }
    verify = () => {
        axios
            .post(
                `${process.env.REACT_APP_API_URL}/auth/verify-code`,
                {
                    code: this.state.verificationCode,
                }
            )
            .then((res) => {
                if (res.data.status > 300) {
                    this.setState({
                        serverError: true,
                        error: res.data.error
                    })
                } else {
                    alert('verified successfully!')
                    this.setState({
                        shouldRedirect:true
                    })
                }

            });
    }
    render() {
        if (this.state.shouldRedirect) {
            return <Redirect
                to="/reset-password" />
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
                        Enter  your verification code:
                    </div>
                    <input onChange={(e) => this.handleInput(e)} type="text" />


                </div>

                <div style={{ marginTop: "20px" }}>
                    <button onClick={() => { this.verify() }}>
                        Virify your code
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

export default connect(mapStateToProps, mapDispatchToProps)(VerifyCode)
