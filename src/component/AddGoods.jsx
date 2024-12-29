import React, { useState } from "react";
// import { use } from "react";
const AddGoods =({setDetail,detail})=>{
    const[uname,setUname] = useState("")
    const[goods,setGoods] = useState("")
    const[qty,setQty] = useState("")
    const addGoods = () =>{
        setDetail([...detail,{name:uname,goods:goods,qty:qty}])
    }
    
    
    
    return(
    <>
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUname(e.target.value)} />
            {uname}
            <input type="text" placeholder="Goods" onChange={(e) => setGoods(e.target.value)} />
            <input type="text" placeholder="QTY" onChange={(e) => setQty(e.target.value)} />
            <button onClick={addGoods} >Add Goods</button>
        </div>
    </>
    )
}

export default AddGoods