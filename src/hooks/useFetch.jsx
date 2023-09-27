import { useEffect, useState } from "react";

const useFetch = async (url)=> {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            
            try {
                const res = await fetch(url);
                if(!res.ok){
                    setError("Feild to fetch")
                    setLoading(false)
                }
                const result = await res.json()
                setData(result.data)
            } catch (error) {
                // dsfasf
                setError(error.message)
                setLoading(false)

            }
        }
        fetchData()
    },[url])
    console.log(data)
    return {
        data,
        error,
        loading

    }
}

export default useFetch;