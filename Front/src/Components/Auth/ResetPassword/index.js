import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveAuthInfo } from '../../../Store/actions/actions'
import { Link, Redirect } from "react-router-dom";
import axios from "axios";


class ResetPassword extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        password:'',
        shouldRedirect:false,
        passwordKey:false,
        passwordLenKey:false

    }
    handleInput = (e) => {
        this.setState({
            password:e.target.value
        })
        if(e.target.value==""){
            this.setState({
                passwordKey:true
            })
            return;
        }else{
            this.setState({
                passwordKey:false
            }) 
        }
        if(e.target.value.length<4){
            this.setState({
                passwordLenKey:true
            })
            return;
        }else{
            this.setState({
                passwordLenKey:false
            })
        }

    }
    Register = () => {
        if(this.state.password==""){
            this.setState({
                passwordKey:true
            })
            return;
        }else{
            this.setState({
                passwordKey:false
            }) 
        }
        if(this.state.password.length<4){
            this.setState({
                passwordLenKey:true
            })
            return;
        }else{
            this.setState({
                passwordLenKey:false
            })
        }
        axios
        .post(
            `${process.env.REACT_APP_API_URL}/auth/reset-password`,
            {
                email: localStorage.getItem('emailForForgot'),
                password: this.state.password,
            }

        )
        .then((res) => {
            if (res.data.status > 300) {
                this.setState({
                    serverError: true,
                    error: res.data.error
                })
            } else {
                console.log('res')
                console.log(res)
                localStorage.removeItem('emailForForgot')
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('token', res.data.token)
                this.props.saveAuthInfo(res.data.user, res.data.token);
                this.setState({ shouldRedirect: true })
            }

        })
        .catch((error) => {
                    console.log(error)
                });
    }
    render() {
        console.log('this.state')
        console.log(this.state)
        if (this.state.shouldRedirect) {
            return <Redirect
                to="/" />
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
                        Enter  your new password:
                    </div>
                    <input onChange={(e) => this.handleInput(e)} type="text" />
                    {
                        this.state.passwordKey
                            ?
                            <div style={{ color: 'red' }}>
                                Password is required.
                            </div>
                            :
                            null
                    }
                     {
                        this.state.passwordLenKey
                            ?
                            <div style={{ color: 'red' }}>
                                Password should be greater than 4 characters.
                            </div>
                            :
                            null
                    }

                </div>

                <div style={{ marginTop: "20px" }}>
                    <button onClick={() => { this.Register() }}>
                        Reset Password
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
