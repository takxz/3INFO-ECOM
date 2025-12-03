import { createContext, useContext, useState } from "react";

const userContext = createContext();
const useAuth = () => useContext(userContext);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    const setAuth = (userData) => {
        setUser(userData);
    };

    const logOut = () => {
        setUser(null);
    };

    return (
        <userContext.Provider value={{ user, setAuth, logOut }}>
            {children}
        </userContext.Provider>
    );
}

export { useAuth, AuthProvider };