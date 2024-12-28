import React from "react";
const lists = ['Home','About','Contact']

const Header = () =>{
    return(
        <>
        {
            lists.map((list,i) =>(
                <ul>
                    <li key={i}>{list}</li>
                </ul>
            ))
        } 
        </>
    )
}

export default Header;