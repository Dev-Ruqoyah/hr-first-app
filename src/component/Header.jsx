import React from "react";
const lists = ['Home','About','Contact']

const Header = () =>{
    return(
        <>
        {
            lists.map((list,i) =>(
                <ul key={i}>
                    <li >{list}</li>
                </ul>
            ))
        } 
        </>
    )
}

export default Header;