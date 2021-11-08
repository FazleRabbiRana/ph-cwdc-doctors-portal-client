import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const authContexts = useFirebase();

	return (
		<AuthContext.Provider value={authContexts}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;