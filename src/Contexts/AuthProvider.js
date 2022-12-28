import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.confiq"
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const createUserEmailPass = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	}
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	});

	const signinPopup = (provider) => {
		return signInWithPopup(auth, provider);
	}
	const authInfo = { user, createUserEmailPass, signinPopup }
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
