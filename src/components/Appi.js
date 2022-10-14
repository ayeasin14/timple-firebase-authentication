import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../firebase/firebase.in';

const auth = getAuth(app);

const Appi = () => {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log('from APPI', user);
            })
            .catch(error => {
                console.log('from APPI', error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(() => {
                setUser({})
            })
    }
    return (
        <div>
            <h4>Trying Google authentication 2</h4>
            {
                user.email ? <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <button onClick={handleGoogleSignIn}>Google Sign In </button>
            }
            {
                user.email &&
                <div>
                    <img src={user.photoURL} alt="" />
                    <h3>User Name: {user.displayName}</h3>
                    <p>Email: {user.email} </p>
                </div>
            }
        </div>
    );
};

export default Appi;