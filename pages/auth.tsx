import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(token, user);
    })
    .catch((error) => {
      // Handle Errors here.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    });
};

const SignInScreen: React.FC = () => {
  return (
    <button className="login__btn login__google" onClick={signInWithGoogle}>
      Login with Google
    </button>
  );
};

export default SignInScreen;
