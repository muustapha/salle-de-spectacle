/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext({
    token: "",
    role: "",
    updateUserContext: () => {}
})

const UserProvider= ({ children }) => {
    const [user, setUser] = useState({
        token: "",
        role: "",
    });

    const updateUserContext = (field, value) => {
        setUser((prevSearch) => ({ ...prevSearch, [field]: value }))
    }

    return (
        <UserContext.Provider value={{...user, updateUserContext}}>
            {children}
        </UserContext.Provider>
    )

}

// eslint-disable-next-line react/prop-types

export default UserProvider;