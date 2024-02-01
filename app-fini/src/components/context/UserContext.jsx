/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext({
    token: null,
    role: "false",
    updateUserContext: () => {}
})

const UserProvider= ({ children }) => {
    const [user, setUser] = useState({
        token: null,
        role: "false",
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