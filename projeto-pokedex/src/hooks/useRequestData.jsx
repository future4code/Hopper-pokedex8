import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (url) => {
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setData(res.data.results)
        })
        .catch((err) =>{
            alert('Ocorreu um erro')
        })
    },[url])
    return data
}
export default useRequestData