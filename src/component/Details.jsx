import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAge, setLang } from "../App";
import DisplayDepartment from "./DisplayDepartment";
// import { AgeContext } from "./context";

const Details = () => {
    // useSelector to select the values
    // useDispatch to change the values
    // const {myAge} = useContext(AgeContext)
    const[newName,setNewName] = useState("")
    let {age,lang} = useSelector(state=>state.person)
    console.log(lang);
    
    let dispatch = useDispatch()
    console.log(age);
   let myfunc = ()=>{
        dispatch(setAge(newName))
    }
    let myLang = ()=>{
        dispatch(setLang("Russian"))
    }
    
    return ( <>
        <p>I am years {age} old</p>
        <p>{lang.map((lan,i)=>(
            <li key={i}>{lan}</li>
        ))}</p>
        <input type="text" onChange={(e)=>setNewName(e.target.value)} />
        <button onClick={myfunc}>Grow</button>
        <button onClick={myLang}>Add Lang</button>
        <DisplayDepartment/>
    </> );
}
 
export default Details;