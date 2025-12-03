import { createContext, useContext, useState } from "react";

const userContext = createContext();
const useAuth = () => useContext(userContext);

const AuthProvider = ({ children }) => {
    let userStorage = localStorage.getItem('user');

    const [user, setUser] = useState(userStorage ? JSON.parse(userStorage) : null);

    const setAuth = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logOut = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <userContext.Provider value={{ user, setAuth, logOut }}>
            {children}
        </userContext.Provider>
    );
}

export { useAuth, AuthProvider };