import React, { Suspense } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, Router } from "react-router-dom";
import { connect } from 'react-redux';
import { createBrowserHistory } from "history";

const Header = React.lazy(() => import('./Components/Layout/Header'));


export const history = createBrowserHistory();


const MainRoute = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest}
            render={(props) => (
                <>
                    <Header {...props} />
                    <Component {...props} />
                </>

            )} />


    );
}


export default MainRoute
