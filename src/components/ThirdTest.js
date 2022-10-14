import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import app from '../firebase/firebase.in';

const auth = getAuth(app);

const ThirdTest = () => {
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('error: ', error);
            })
    }
    return (
        <div>
            <h1>Trying Google authentication 3</h1>
            <button onClick={handleGoogleSignIn}>Google Sign In 3</button>
        </div>
    );
};

export default ThirdTest;