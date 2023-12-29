const { createContext, useContext, useState } = require("react");
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setLoggedIn] = useState(false)

    const getUserDetailsFromCache = () => {
        let data = localStorage.getItem("userDetails")
        if (data !== null) {
            let userDetails = JSON.parse(data)
            setLoggedIn(true)
            console.log(`user data: ${userDetails}`)

            return userDetails

        } else {
            return null
        }
    }

    const setUserDetailsInCache = (values) => {
        setLoggedIn(true)
        localStorage.setItem("userDetails", JSON.stringify(values))
    }

    const logout = () => {
        setLoggedIn(false)
        localStorage.removeItem("userDetails")
    }

    return <AuthContext.Provider value={{ setUserDetailsInCache, logout, getUserDetailsFromCache, isLoggedIn }}>
        {children}
    </AuthContext.Provider>
}
