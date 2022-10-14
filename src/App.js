import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.in';
import Appi from './components/Appi';
import ThirdTest from './components/ThirdTest';

const auth = getAuth(app);
function App() {
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
    <div className="App">
      <h1>Trying Google authentication 1</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <Appi></Appi>
      <ThirdTest></ThirdTest>
    </div>
  );
}

export default App;
