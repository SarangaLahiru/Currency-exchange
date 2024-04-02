import { useEffect, useState } from "react"

const useAxios =(url)=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response =await axios(url);
                setData(response)
            }catch{
                console.log(error)

            }

        }


        fetchData();

    },[])

    return data;
}
export default useAxios;