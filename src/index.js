import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import {AuthProvider} from './helperFunctions/Auth';
import {RequireAuth} from './helperFunctions/Auth';

import './index.css';
import App from './App';
import TestAuthenticator from './TestAuthenticator';
import Choreboard from './Choreboard';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>}, {
        path: "/console",
        element: <RequireAuth><Choreboard/></RequireAuth>

    }, {
        path: "/signin",
        element: <TestAuthenticator/>}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    </React.StrictMode>
);

reportWebVitals();
