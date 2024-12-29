import axios from "axios";
import React, { useState } from "react";
import "./ApiFetch2.css";
const ApiFetch2 = () => {
  const [users, setUsers] = useState([]);
  const[eachUser,setEachUser] = useState([])
  const[isloading,setLoading] = useState(true)
  const[isloadings,setLoadings] = useState(true)
  const fetchApi = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    console.log("click");

    setUsers(data);
    setLoading(false)
  };
  const getFullDetails = async(ind) =>{
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${ind}`)

    setEachUser(data)
    setLoadings(false)
    console.log(data);
    
  }
  return (
    <>
      <button onClick={fetchApi}>Fetch</button>
      <div className="cards">
        {!isloading?
        (users.map((user) => (
          <div className="card" key={user.id} >
            <h4>{user.name}</h4>
            <p>{user.username}</p>
            <button onClick={()=>getFullDetails(user.id)} >See More</button>
          </div>
        ))):
        (<div>Loading Details</div>)
        }
      </div>
      <div className="card-each">
        {
            !isloadings?(
         
                <div className="cardss">
                    <p>Name: <span>{eachUser.name}</span></p>
                    <p>Username: <span>{eachUser.username}</span></p>
                    <p>Email: <span>{eachUser.email}</span></p>
                    <p>Phone: <span>{eachUser.phone}</span></p>
                    <p>Website: <span>{eachUser.website}</span></p>
                    <p>Company: <span>{eachUser.company.name}</span></p>
                    <p>CatchPhrase: <span>{eachUser.company.catchPhrase}</span></p>
                </div> ):
                (
                    <div className="d-none"></div>
                )
        
        }
      </div>
    </>
  );
};
export default ApiFetch2;
