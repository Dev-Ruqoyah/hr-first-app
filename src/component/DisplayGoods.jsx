import React from "react";
const DisplayGoods = ({name,goods,qty,increment,delItem}) =>{
    return(
        <>
            <tr>
                <td>{name}</td>
                <td>{goods}</td>
                <td>{qty}</td>
                <td><button onClick={increment}>increment</button></td>
                <td><button onClick={delItem}>Delete</button></td>
            </tr>
        </>
    )
}
export default DisplayGoods