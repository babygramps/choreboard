// import React, {useEffect} from 'react';

// import {useHistory} from 'react-router-dom';
// import {Auth} from 'aws-amplify';

// const SignUpModal = () => {
//     const history = useHistory();

//     useEffect(() => {
//         Auth.federatedSignIn({provider: 'Google'}).then(() => { // Redirect the user to the desired route after sign-up
//             history.push('/dashboard'); // Change '/dashboard' to your desired route
//         }).catch((error) => {
//             console.log('Error signing up:', error);
//         });
//     }, [history]);

//     return <div>Signing up...</div>; // You can customize this component as needed
// };

// export default SignUpModal;
