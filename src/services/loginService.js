import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../firebase/config';
import api from '../api/api';

/**
 * Service to login user to their account
 * Logs in to Firebase Auth API and then sends a request to our backend to get account details
 */

// Init Firebase
const fb = firebase;
const auth = getAuth();

export const loginAccount = async (email, pass) => {
    const user = await signInWithEmailAndPassword(auth, email, pass);
    const token = await user.user.getIdToken(true);
    console.log(token);
    const result = await api.loginAccount(user.user.uid, token);
    return {token, ...result.data}
};