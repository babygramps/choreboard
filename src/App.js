import React from 'react';
import LandingPage from './LandingPage';
import './ChoreLeaderboard.css';

import {Amplify} from 'aws-amplify';
import config from './amplifyconfiguration.json';

Amplify.configure(config);


const App = () => {

    return (
        <div className="app-container">

            <LandingPage/>

        </div>
    );
};

export default App;
