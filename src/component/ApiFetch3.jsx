import React, { useState } from "react";
import axios from "axios";
const ApiFetch3 = () =>{
    const [detail,setDetail] = useState("")
    const[dataId,setDataId] = useState("")
    const fetchDetails = async(id) =>{
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        setDetail(data)
        console.log(data);
        
        console.log(id);
        
    }
    return(
        
        <>
        <div>
            <input type="text" onChange={(e) => setDataId(e.target.value)} placeholder="Type an Id" />
            <button onClick={(e)=>fetchDetails(dataId)}>Fetch</button>
        </div>
        <div className="container">
            <h3>{detail.title}</h3>
            <p>{detail.body}</p>
        </div>
        </>
    )
}
export default ApiFetch3