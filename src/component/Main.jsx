import React from "react";
const Main = ({name,items,qty,increase}) =>{
    return(
        <>
            <p>my name is {name}</p>
            <p>I sell {items}</p>
            <p>We have {qty}</p>
            <button onClick={increase}>Increment</button>
        </>
    )
}
export default Main