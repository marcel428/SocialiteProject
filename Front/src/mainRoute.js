import React from 'react';
import { Route } from "react-router-dom";
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
            )}
        />
    );
}


export default MainRoute;
