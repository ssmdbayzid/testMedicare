import { AuthContext } from "context/AuthProvider"
import { useContext } from "react"

export const useFirebaseAuthContext = () =>{
    useContext(AuthContext)
}