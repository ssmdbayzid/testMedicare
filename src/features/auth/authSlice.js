const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: localStorage.getItem("user")  
    ? JSON.parse(localStorage.getItem("user")) : null,
    role: localStorage.getItem("role") || null,
    token: localStorage.getItem("access-token") || null,
    refreshToken: localStorage.getItem("refresh-token") || null,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials : (state, action)=>{
            const {accessToken, refreshToken, role, data} = action.payload;
            state.user = data
            state.token = accessToken
            state.refreshToken = refreshToken
            state.role = role

            localStorage.setItem("user", JSON.stringify(state.user))
            localStorage.setItem("accessToken", state.token)
            localStorage.setItem("refreshToken", state.refreshToken)
            localStorage.setItem("role", state.role)
        },
        logOut:  (state, action)=>{
            state.user = null
            state.token = null
            state.refreshToken = null
            state.role = null

            localStorage.removeItem("user")
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("role")
        }
    }
})

export const {setCredentials, logOut} = authSlice.actions;
export default authSlice.reducer

export const selectCurrentUser  =  state.auth.user
export const selectCurrentToken  =  state.auth.token
export const selectCurrentrole  =  state.auth.role