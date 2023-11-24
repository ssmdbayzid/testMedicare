
const { createContext, useEffect, useReducer} = require("react");

const initialState = {
    user: localStorage.getItem("user")  
    ? JSON.parse(localStorage.getItem("user")) : null,
    role: localStorage.getItem("role") || null,
    accessToken: localStorage.getItem("access-token") || null,
    refreshToken: localStorage.getItem("refresh-token") || null,
}
export const authContext = createContext(initialState);

const authReducer = (state, action) =>{
    switch (action.type) {
        // case "LOGIN_START" :
        //     return {
        //         user:null,
        //         token:null,
        //         role:null,
        //     }
        case "LOGIN_SUCCESS" :
            return {
                user: action.payload.user,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                role: action.payload.role,
            };
            case "LOG_OUT":
            return  {
                user:null,
                accessToken:null,
                refreshToken:null,
                role: null
               };
               default: 
               return state;
    }
}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user))
        localStorage.setItem("access-token", state.accessToken)
        localStorage.setItem("refresh-token", state.refreshToken)
        localStorage.setItem("role", state.role)
    },[state])

    
    const userInfo = {
        user: state.user, 
        token:state.accessToken, 
        role:state.role,         
        dispatch,
    }
    
    return (<authContext.Provider value={userInfo}>
        {children}
    </authContext.Provider>)
}
