import React, { Suspense, useEffect } from 'react';
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route,Router } from "react-router-dom";
import "./Assets/css/app.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from 'react-redux';
import { createBrowserHistory } from "history";
import fb from "./Components/FB";
import MainRoute from "./mainRoute";

const Home = React.lazy(() => import('./Components/Home'));
const Template = React.lazy(() => import('./Components/Template'));
const FaceEdit = React.lazy(() => import('./Components/FaceEdit'));
const MainEdit = React.lazy(() => import('./Components/MainEdit'));
const Preview = React.lazy(() => import('./Components/Preview'));
const Save = React.lazy(() => import('./Components/Save'));
const YoutubeExample = React.lazy(() => import('./Components/YoutubeExample'));
const FB = React.lazy(() => import('./Components/FB'));

const Profile = React.lazy(() => import('./Components/Profile'));
const Deposit = React.lazy(() => import('./Components/Deposit'));
const Membership = React.lazy(() => import('./Components/Membership'));
const Payment = React.lazy(() => import('./Components/Payment'));
const AboutUs = React.lazy(() => import('./Components/AboutUS'));
const Blog = React.lazy(() => import('./Components/Blog'));

const Login = React.lazy(() => import('./Components/Auth/Login'));
const Register = React.lazy(() => import('./Components/Auth/Register'));
const ForgotPassword = React.lazy(() => import('./Components/Auth/ForgotPassword'));
const VerifyCode = React.lazy(() => import('./Components/Auth/VerifyCode/index'));
const ResetPassword = React.lazy(() => import('./Components/Auth/ResetPassword'));

export const history = createBrowserHistory();

toast.configure();

const Routes = (props) => {
    useEffect(() => {
        //delete '_=_' when facebook login
        if (window.location.hash.substring(0, 5) === "#/_=_") {
            window.location.href = window.location.href.slice(0, -3);
        }
    });

    return (
        <>
            {
                <Switch>
                    <MainRoute exact path="/" component={Home}/>
                    <MainRoute path="/template" component={Template}/>
                    <MainRoute exact path="/face-edit" component={FaceEdit}/>
                    <MainRoute exact path="/main-edit" component={MainEdit}/>
                    <MainRoute exact path="/preview" component={Preview}/>
                    <MainRoute exact path="/save" component={Save}/>
                    <MainRoute exact path="/youtube" component={YoutubeExample}/>
                    <MainRoute exact path="/fb" component={FB}/>
                    <MainRoute exact path="/profile" component={Profile}/>
                    <MainRoute exact path="/deposit" component={Deposit}/>
                    <MainRoute exact path="/membership" component={Membership}/>
                    <MainRoute exact path="/payment" component={Payment}/>
                    <MainRoute exact path="/about-us" component={AboutUs}/>
                    <MainRoute exact path="/blog" component={Blog}/>

                    <MainRoute exact path="/login" component={Login}/>
                    <MainRoute exact path="/register" component={Register}/>
                    <MainRoute exact path="/forgot-password" component={ForgotPassword}/>
                    <MainRoute exact path="/verify-code" component={VerifyCode}/>
                    <MainRoute exact path="/reset-password" component={ResetPassword}/>
                </Switch>
            }
        </>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Routes)
