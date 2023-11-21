import {useEffect, useState} from 'react'
import {getCurrentUser} from 'aws-amplify/auth';
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {Navigate, useNavigate} from "react-router-dom";


import {signOut} from 'aws-amplify/auth';

export default function TestAuthenticator() {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        checkCurrentUser();
    })


    async function checkCurrentUser() {
        try {
            const currentUser = await getCurrentUser()
            setUser(currentUser)
            navigate('/console', {replace: true})
        } catch (error) {
            console.log('Not signed in', error)
            setUser(null)
        }
    }

    function handleAuthStateChange(state) {
        if (state === 'signedIn') {
            navigate('/console');
        } else {
            navigate('/')
        }
    }

    if (user) {
        return <Navigate to="/console"
            replace={true}/>
    }

    return (
        <Authenticator onStateChange={handleAuthStateChange}>
            <Navigate to="/console"
                replace={true}/></Authenticator>
    );
}
