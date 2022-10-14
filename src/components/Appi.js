import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import app from '../firebase/firebase.in';

const auth = getAuth(app);

const Appi = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log('from APPI', user);
            })
            .catch(error => {
                console.log('from APPI', error);
            })
    }
    return (
        <div>
            <h1>Trying Google authentication 2</h1>
            <button onClick={handleGoogleSignIn}>Google Sign In </button>
        </div>
    );
};

export default Appi;