import { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile,
	getIdToken,
	signOut,
} from 'firebase/auth';
import axios from 'axios';

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [authError, setAuthError] = useState('');
	const [admin, setAdmin] = useState(false);
	const [token, setToken] = useState('');

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	// register user with email and password
	const registerUser = (email, password, name, history) => {
		setIsLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				console.log(result);
				const newUser = { email, displayName: name };
				// save user to database
				saveUser(email, name, 'post');
				// send name to firebase after creation
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {
						// Profile updated!
					})
					.catch(error => {
						// An error occurred
						// ...
					});
				setUser(newUser);
				history.replace('/');
				setAuthError('');
			})
			.catch(error => {
				console.log(error);
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// login using email and password
	const loginUser = (email, password, location, history) => {
		setIsLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then(result => {
				const destination = location?.state?.from || '/home';
				history.replace(destination);
				setAuthError('');
			})
			.catch(error => {
				console.log(error);
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// sign in with google
	const signInWithGoogle = (location, history) => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then(result => {
				const user = result.user;
				// save user to database
				saveUser(user.email, user.displayName, 'put');
				const destination = location?.state?.from || '/home';
				history.replace(destination);
				setAuthError('');
			})
			.catch(error => {
				console.log(error);
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// observe user auth state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
				getIdToken(user).then(idToken => {
					// console.log(idToken);
					setToken(idToken);
				});
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribe;
	}, [auth]);

	// check is admin
	useEffect(() => {
		fetch(`https://whispering-forest-63163.herokuapp.com/users/${user.email}`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setAdmin(data.admin);
			})
			.catch(error => {
				console.log(error);
			});
	}, [user.email]);

	// log out function
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setAuthError('');
			})
			.catch(error => {
				console.log(error);
				setAuthError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	// save user to database
	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		const url = 'https://whispering-forest-63163.herokuapp.com/users';

		axios({
			method: method,
			url: url,
			data: user,
		})
			.then(res => {
				console.log(res.data);
			})
			.catch(error => console.log(error));

		// axios
		// 	.post('https://whispering-forest-63163.herokuapp.com/users', user)
		// 	.then(res => {
		// 		console.log(res.data);
		// 	})
	};

	return {
		user,
		admin,
		token,
		isLoading,
		authError,
		registerUser,
		loginUser,
		signInWithGoogle,
		logOut,
	};
};

export default useFirebase;
