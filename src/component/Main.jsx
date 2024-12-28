import React from "react";
const Main = ({name,items,qty,increase,delet}) =>{
    return(
        <>
            <p>my name is {name}</p>
            <p>I sell {items}</p>
            <p>We have {qty}</p>
            <button onClick={increase}>Increment</button>
            <button onClick={delet}>Delete</button>
        </>
    )
}
export default Main