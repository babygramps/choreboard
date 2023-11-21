import React, {createContext, useState, useEffect, useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {getCurrentUser, fetchUserAttributes} from 'aws-amplify/auth';

// Create AuthContext
export const AuthContext = createContext(null);

// AuthProvider Component
export const AuthProvider = ({children}) => {
    const [userAttributes, setUserAttributes] = useState(null);

    useEffect(() => {
        async function fetchAttributes() {
            try {
                const currentUser = await getCurrentUser();
                const attributes = await fetchUserAttributes(currentUser);
                setUserAttributes(attributes);
            } catch (error) {
                console.error('Error fetching user attributes:', error);
            }
        }

        fetchAttributes();
    }, []);

    return (
        <AuthContext.Provider value={
            {userAttributes}
        }>
            {children} </AuthContext.Provider>
    );
};

// RequireAuth Component
export const RequireAuth = ({children}) => {
    const {userAttributes} = useContext(AuthContext);
    return userAttributes ? children : <Navigate to="/signin" replace/>;
};
