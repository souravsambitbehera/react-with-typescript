import { useEffect, useState } from "react";
export function useFetch(url:string)
{
    const[apiData,setApiData] = useState<any[]>([]);
    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            setApiData(data)
        })
    },[url]);
    return apiData;
}