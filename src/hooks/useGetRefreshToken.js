import axios from "axios"
import { BASE_URL } from "utils/config"

export const getRefreshToken = async () =>{
    try {
        const refreshTokenResponse = await axios.post(`${BASE_URL}/auth/refresh-token`, {
            headers:{ 
                "Content-type" : "application.json",
                Authorization: `Bearer ${localStorage.getItem("refresh-token")}`
            }
        })
        console.log(refreshTokenResponse)
        
    } catch (error) {
        
    }
}