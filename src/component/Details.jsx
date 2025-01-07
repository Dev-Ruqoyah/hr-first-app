import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAge } from "../App";
// import { AgeContext } from "./context";

const Details = () => {
    // useSelector to select the values
    // useDispatch to change the values
    // const {myAge} = useContext(AgeContext)
    const[newName,setNewName] = useState("")
    let {age} = useSelector(state=>state.person)
    let dispatch = useDispatch()
    console.log(age);
   let myfunc = ()=>{
        dispatch(setAge(newName))
    }
    
    return ( <>
        <p>I am years {age} old</p>
        <input type="text" onChange={(e)=>setNewName(e.target.value)} />
        <button onClick={myfunc}>Grow</button>
    </> );
}
 
export default Details;