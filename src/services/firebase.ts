import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_NAME_API_KEY,
  authDomain: import.meta.env.VITE_NAME_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_NAME_DATABASE_URL,
  projectId: import.meta.env.VITE_NAME_PROJECT_ID,
  storageBucket: import.meta.env.VITE_NAME_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_NAME_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_NAME_APP_ID,
  measurementId: import.meta.env.VITE_NAME_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
