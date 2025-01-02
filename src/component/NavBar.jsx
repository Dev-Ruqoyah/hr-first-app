import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/about"}>About</Link>
                
                <Link to={"/photos/1"}>Picture1</Link>
                <Link to={"/photos/2"}>Picture2</Link>
                <Link to={"/photos/3"}>Picture3</Link>
            </div>
        </>
     );
}
 
export default NavBar;