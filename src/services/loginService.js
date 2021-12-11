import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../firebase/config';
import api from '../api/api';

const fb = firebase;
const auth = getAuth();

export const loginAccount = async (email, pass) => {
    const user = await signInWithEmailAndPassword(auth, email, pass);
    const token = await user.user.getIdToken();
    console.log(token);
    const result = await api.loginAccount(user.user.uid, token);
};