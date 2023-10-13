
const { createContext, useContext, useEffect, useReducer } = require("react");

const initialState = {
    user: null,
    role: null,
    token: null,
};

const authContext = createContext(initialState);

export const authReducer = (state, action)=>{
    
    switch(action.type){
        case "LOGIN":
        return {
            user: null,
            role: null,
            token: null,
        };
        case "LOGIN_SUCCESSFULL": 
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

    return (<authContext.Provider value={{user: state.user, token: state.token, role: state.role, dispatch}}>
        {children}
    </authContext.Provider>)
}

export const useAuthContext = () => {
    useContext(authContext)
};