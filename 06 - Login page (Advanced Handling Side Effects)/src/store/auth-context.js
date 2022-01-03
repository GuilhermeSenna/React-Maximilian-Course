import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = props => {
    const [isLoggedin, setIsLoggedIn] = useState(false);

    // useEffect
    // First Argument: Function
    // Second Argument: Dependencies
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        // Keep logged in after refreshing the page
        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }

    }, [])


    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true);
    }

    // Return
    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedin,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}
    >{props.children}</AuthContext.Provider>
}

export default AuthContext;