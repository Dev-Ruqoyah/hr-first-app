import { Link, Outlet } from "react-router-dom";

const About = () => {
    return ( 
        <>
            <p>This is the About Page</p>
            <Link to={"taye"}>Taye</Link>
            <Link to={"kenny"}>Kenny</Link>
            <Outlet/>
        </>
     );
}
 
export default About;