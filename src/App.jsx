import React, { useState } from "react";
const App =()=>{
//  let num = 2
 
let [num, setNum] = useState(3)
const increase =(val) =>{
  setNum(num + val)  
}
const decrease =() =>{
  setNum(num - 1)  
}
  // setNum(num++);
  return(
     <div>
        <p>I have {num} pen</p>
        <button onClick={()=>increase(1)}>Increase by one</button>
        <button onClick={()=>increase(2)}>Increase by two</button>
        <button onClick={()=>increase(3)}>Increase by three</button>
        <button onClick={decrease}>Decrease</button>
     </div>
  )
}

export default App;