import React, { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
const App = () =>{
  // const details =
  const [details,setDetails] = useState( [
    {name : "Lati",goods:"Phone",qty:20},
    {name : "Latri",goods:"Phoner",qty:22},
    {name : "Latrif",goods:"Phoner",qty:22}
  ])
  const increment = (ind) =>{
    const newDetails= [...details]
   const result= newDetails.find((_,i) => ind === i)
   setDetails(result)


  }
  return(
    <>
      <Header/>
      {details.map(({name,goods,qty,i},i)=>(
        <Main name={name} items={goods} qty={qty} increase={increment}/>
      ))}
    </>
  )
}
export default App