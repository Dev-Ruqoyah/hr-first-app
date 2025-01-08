import { useDispatch, useSelector } from "react-redux";
import { setDept } from "../App";
import { useState } from "react";

const DisplayDepartment = () => {
    const[newDept,setNewDept] = useState("")
    const {dept} = useSelector(state=>state.person)
    let dispatch =useDispatch()
    return ( 
        <>
            <p>My department is {dept}</p>
            <input type="text" onInput={(e)=>setNewDept(e.target.value)} />
            <button onClick={()=>dispatch(setDept(newDept))}>Change Department</button>
        </>
     );
}
 
export default DisplayDepartment;