import axios from "axios"
import { toast } from "react-toastify"

import { BASE_URL } from "utils/config"

export const getRefreshToken = async () =>{    
    try {
        const refreshTokenResponse = await axios.get(`${BASE_URL}/auth/refresh-token`, {
            headers:{ 
                "Content-type" : "application.json",
                "Authorization": `Bearer ${localStorage.getItem("refreshToken")}`
            }
        })
        toast.success("got accessToken")
        console.log(refreshTokenResponse?.data?.accessToken)
        return refreshTokenResponse;
        
    } catch (error) {
        return {error: {messge: "Token expired, please login again"}}
        toast.error("Token expired, please login again")           
    }
}