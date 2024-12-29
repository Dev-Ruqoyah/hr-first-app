import axios from "axios";
import React, { useEffect, useState } from "react";
const ApiFetch = () => {
  const [users, setUsers] = useState([]);
  const [userId,setUserId] = useState('1')
  const[detail,setDetail] = useState()

  useEffect(
    ()=>{
        const fetchApi = async()=>{
            let {data} = await axios.get(  "https://jsonplaceholder.typicode.com/users")
            setUsers(data)
        };
        fetchApi()
    }, []
  )
  useEffect(()=>{
    const singleUser = async() =>{
        let {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        console.log(data);
        setDetail(data)
        
    }
    singleUser()
  },[userId])
//   const fetchApi = async () => {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     let res = data.map((person) => {
//       return { username: person.username };
//     });
//     console.log(res);

//     setUsers(res)
//   };
 
  return (
    <>
      {/* <button onClick={fetchApi}>Fetch</button> */}
      <input type="text" onInput={(e) =>setUserId(e.target.value)} />
      {users.map(({ username}, id) => (
        <h4 key={id}>{username}</h4>
      ))}
      {detail?(
        <div>
            <p>{detail.name}</p>
            <p>{detail.username}</p>
            <p>{detail.phone}</p>

        </div>):
        (<p>No details found</p>)
      }
    </>
  );
};

export default ApiFetch;
