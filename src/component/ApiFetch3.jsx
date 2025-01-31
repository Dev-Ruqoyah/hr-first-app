import React, { useEffect, useState } from "react";
import axios from "axios";
const ApiFetch3 = () =>{
    const [detail,setDetail] = useState("")
    const[dataId,setDataId] = useState("1")
    useEffect(()=>{
        
        const fetchDetails = async() =>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${dataId}`)
            setDetail(data)
            console.log(data);
            
            // console.log(id);
            
        }
        // fetchDetails()
        let timeOut = setTimeout(()=>{
            fetchDetails()
        },3000)
        return()=>{
            clearTimeout(timeOut)
        }
    },[dataId])
  
    return(
        
        <>
        <div>
            <input type="text" onChange={(e) => setDataId(e.target.value)} placeholder="Type an Id" />
            {/* <button onClick={(e)=>fetchDetails(dataI d)}>Fetch</button> */}
        </div>
        <div className="container">
            <h3>{detail.title}</h3>
            <p>{detail.body}</p>
        </div>
        </>
    )
}
export default ApiFetch3