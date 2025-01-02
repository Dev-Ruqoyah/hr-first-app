import { useParams } from "react-router-dom";
const Contact = () => {
    let obj = useParams()
    console.log(obj);
    
    return ( 
        <>
            <div>
                <p>This is the contact page of {obj.username}</p>
                <p>With an id of {obj.id}</p>
            </div>
        </>
     );
}
 
export default Contact;