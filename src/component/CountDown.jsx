import React, { useEffect, useState } from 'react';
const CountDown = () => {
    const[timeLap,setTime] = useState("")
    const [det,setDet] = useState("")

    useEffect(()=>{
        let myInterval;
        if(det>0){
            myInterval = setInterval(() => {
                setDet(det-1)
            }, 1000);
        }
      

        return()=>{
            clearInterval(myInterval)
        }
    },[det])
   
              
    
    return ( 
        <>
            <input type="text" onInput={(e)=>setTime(e.target.value)} />
            <button onClick={()=>setDet(timeLap)}>Set CountDown</button>
            <p>{det}</p>
        </>
     );
}
 
export default CountDown;