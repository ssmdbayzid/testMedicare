
const { createContext, useContext, useEffect, useReducer } = require("react");

const initialState = {
    user: localStorage.getItem("user") ? 
    JSON.parse(localStorage.getItem("user")) 
    : null,
    role: localStorage.getItem("role"),
    token: localStorage.getItem("token"),
};

export const authContext = createContext(initialState);

export const authReducer = (state, action)=>{
    
    switch(action.type){

        
        case "LOGIN":
        return {
            user: null,
            role: null,
            token: null,
        };
        case "LOGIN_SUCCESSFULL": 
        console.log(action.payload)
        return  {
            user: action.payload.user,
            token: action.payload.token,
            role: action.payload.role,
        };
        case "LOGOUT": 
        return initialState;

        default: 
        return state;
    }
};

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("role", state.role)
        localStorage.setItem("token", state.token)
    },[state])
    
    return (<authContext.Provider value={{user: state.user, token: state.token, role: state.role, dispatch}}>
        {children}
    </authContext.Provider>)
}

