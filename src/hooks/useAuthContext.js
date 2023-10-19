const { authContext } = require("context/AuthContext");
const { useContext } = require("react");

export const useAuthContext = () =>{
    useContext(authContext);
} 