import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/form"}>Form</Link>
                
                <Link to={"/photos/1"}>Picture1</Link>
                <Link to={"/photos/2"}>Picture2</Link>
                <Link to={"/photos/3"}>Picture3</Link>
                <Link to={"/details"}>Details</Link>
                <Link to={"/reducer"}>Reducer</Link>
                <Link to={"/createquestion"}>Create Question</Link>
                <Link to={"/form-reducer"}>Form Hadling</Link>
            </div>
        </>
     );
}
 
export default NavBar;