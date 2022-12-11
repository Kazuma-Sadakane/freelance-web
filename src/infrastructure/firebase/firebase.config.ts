// import {getAnalytics} from 'firebase/analytics';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {firebaseConfig} from '../../../env/dev.env';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// const analytics = getAnalytics(app);
export {app, auth};
