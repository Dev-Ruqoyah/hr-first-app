import { useReducer, useState } from "react";

const Reduser = () => {
    const[inp,setInp] = useState("")
    const myReducerFunc = (state,action)=>{
        switch (action.type) {
            case "CHANGENAME":
                return {...state,name:action.payload}
            case "CHANGEDEPT":
                return {...state, dept: action.payload}    
                
        
            default:
               return state;
        }
    }
    const[val,dispatch] = useReducer(myReducerFunc,{name: "Ruqoyah", dept:"CSC"})
    const changeName = ()=>{
        dispatch({type: "CHANGENAME",payload:inp})
        setInp("")
    }
    const changeDept = () =>{
        dispatch({type:"CHANGEDEPT",payload:inp})
        setInp("")

    }
    return ( 
        <>
            <p>my name is {val.name} studying {val.dept}</p>
            <input onChange={(e)=>setInp(e.target.value)} type="text" value={inp} />
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeDept}>Change Dept</button>
        </>
     );
}
 
export default Reduser;