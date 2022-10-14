import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase/firebase.in';

const auth = getAuth(app);

const ThirdTest = () => {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.error('error: ', error);
            })
    }
    return (
        <div>
            <h4>Trying Google authentication 3</h4>
            <button onClick={handleGoogleSignIn}>Google Sign In 3</button>
            <div>
                <img src={user.photoURL} alt="" />
                <h3>User Name: {user.displayName}</h3>
                <p>Email: {user.email} </p>
            </div>
        </div>
    );
};

export default ThirdTest;