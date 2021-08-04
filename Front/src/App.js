import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import "./Assets/css/app.css";
import configureStore from './Store/store/configureStore';

const store = configureStore();

const Header = React.lazy(() => import('./Components/Layout/Header'));
const Footer = React.lazy(() => import('./Components/Layout/Footer'));

function App() {
    return (
        <Suspense fallback={<div>Loading... </div>}>
            <Provider store={store}>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    pauseOnHover={false}
                    hideProgressBar={true}
                    closeOnClick={true}
                    closeButton={true}
                />
                <Routes/>
            </Provider>
        </Suspense>
    );
}

export default App;
