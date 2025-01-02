import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Photo = () => {
    const[photo,setPhoto] = useState("")
    const [loading,setLoading] = useState(true)
    let {id} = useParams()
    useEffect(
        ()=>{
            const fetchDetails = async() =>{
                const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
                console.log(data);
                setLoading(false)
                setPhoto(data)
                
            }
            fetchDetails()

        },[id]
    )
    return ( 
        <>
            <p>{loading?"loading":photo.title}</p>
            <img src={loading?"Loading":photo.url} alt={photo.title} />
        </>
     );
}
 
export default Photo;