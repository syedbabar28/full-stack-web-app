const { createContext, useState, useContext } = require("react");
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

    const [userDetails, setUserDetails] = useState(null)
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

    const login = (userName, password) => {
        login(userName, password).then((response) => {
            if (response.data.status) {
                setLoggedIn(true)
                setUserDetails(response.data.data)
            } else {
                setErrorMessage(response.data.responseMessage)
            }

            console.log(response)
        }).catch((error) => {
            setErrorMessage(error)
            console.log(error)
        })
    }

    return <AuthContext.Provider value={{ userDetails, isLoggedIn, errorMessage }}>
        {children}
    </AuthContext.Provider>
}
