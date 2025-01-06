import { useContext } from "react";
import { AgeContext } from "./context";

const Details = () => {
    const {myAge} = useContext(AgeContext)
    
    return ( <>
        <p>I am {myAge} years old</p>
    </> );
}
 
export default Details;