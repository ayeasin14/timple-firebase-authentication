import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase/firebase.in';
import Appi from './components/Appi';
import ThirdTest from './components/ThirdTest';
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error: ', error);
      })
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(() => {
        setUser({})
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
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
    <div className="App">
      <div>
        {/* condition ? true : false */}

        <h4>Trying Google authentication 1</h4>
        {
          user.uid ?
            <button onClick={handleSignOut}>Sign Out</button>
            :
            <>
              <button onClick={handleGoogleSignIn}>Google Sign In</button>
              <button onClick={handleGithubSignIn}>GitHub Sign In</button>
            </>
        }

      </div>
      {
        // condition (if true) &&... thna show the div
        user.uid &&
        <div>
          <img src={user.photoURL} alt="" />
          <h3>User Name: {user.displayName}</h3>
          <p>Email: {user.email} </p>
        </div>
      }

    </div>
  );
}

export default App;
