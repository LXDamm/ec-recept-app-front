import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
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
    console.log(`Login token: \n${token}`);
    const result = await api.loginAccount(user.user.uid, token);
    return {token, userId: user.user.uid, ...result.data}
};

export const registerAccount = async (username, email, pass) => {
    const user = await createUserWithEmailAndPassword(auth, email, pass);
    const token = await user.user.getIdToken(true);
    const result = await api.registerAccount(username, email, user.user.uid);
    return {token, userId: user.user.uid, ...result.data};
};