import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.confiq"
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const createUserEmailPass = (email, password) => {
		setLoading(false)
		return createUserWithEmailAndPassword(auth, email, password);
	}
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false)
		});
		return () => {
			unsubscribe();
		};
	});

	const signinPopup = (provider) => {
		setLoading(true)
		return signInWithPopup(auth, provider);
	}
	const logOut = () => {
		return signOut(auth)
	}
	const authInfo = { loading, user, createUserEmailPass, signinPopup, logOut }
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
