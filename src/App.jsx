import React, { useState } from "react";
const App = ()=>{
  // false,0,undefined,null,"",NAN
  const [nums,setNum] = useState([2,4,5,6,7])
  const [val,setVal] = useState("")
  const addNum = () =>{
    // console.log(e);
    
    setNum([...nums,val])
    // console.log(addNum);
    
  }
  const deleteNum = (ind) =>{
    let result = nums.filter((num,index) => index !== ind)
    console.log(result);
    // console.log(num);
    
    
    setNum(result)
  }
  return(
    <>
      <div>
        {nums.length ?nums.map((num,i) =>(
          <div>
          <p key={i}>I have {num} {num >1? "hijabs":"hijab"}</p>
          <button onClick={()=>deleteNum(i)}>Delete</button>
          </div>
        ))
      :
      <p>No Values Added Yet</p>
      }
      </div>

      <div>
        <input type="text" onChange={(e)=>setVal(e.target.value)} />
        <button onClick={addNum}>Add num</button>
      </div>
    </>
  )
}
export default App;