import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import api from '../api/api';
import firebase from '../firebase/config';

// eslint-disable-next-line
const fb = firebase;
/**
 * Service to login user to their account
 * Logs in to Firebase Auth API and then sends a request to our backend to get account details
 */

const auth = getAuth();

export const loginAccount = async (email, pass) => {
	const user = await signInWithEmailAndPassword(auth, email, pass);
	const token = await user.user.getIdToken(true);
	console.log(`Login: token: \n${token}`);
	const userId = user.user.uid;
	const result = await api.post('/account/login', {
		userId,
		token,
	});
	if (result.status === 200) return { token, userId, ...result.data };
	else return false;
};

export const registerAccount = async (username, email, pass) => {
	const user = await createUserWithEmailAndPassword(auth, email, pass);
	const token = await user.user.getIdToken(true);
	console.log(`Register: token: \n${token}`);
	const userId = user.user.uid;
	const result = await api.post('/account/create', {
		username,
		email,
		userId,
        token
	});
	console.log(result.status);
	if (result.status === 201) return { token, userId, ...result.data };
	else return false;
};
