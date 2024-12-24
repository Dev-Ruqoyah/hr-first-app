import React, { useState } from "react";
const App = () =>{
  const [name,setName] = useState("")
  const myFunc2 = (e) =>{
    setName(e.target.value)
  }
  const[num,setNum] = useState("")
  const myFunc = (e,val) =>{
    console.log(e,val);
    let a = val + 1
    setNum(a)
    
  }

  const [names,setNames] = useState([]);
  const getName = () =>{
    setNames([...names,name])
  }

  
  return(
    <>
       <button onClick={(e) =>myFunc(e,5)}>Click me</button> 
      <p>{num}</p>
      <input type="text" placeholder="Type a name" onChange={(e) =>myFunc2(e)} />
      <p>{name}</p>
      <button onClick={getName}>Get name</button>
      <p>{names.map(name =>(
        <li>{name}</li>
      ))}</p>

    </>
  )
}

export default App;