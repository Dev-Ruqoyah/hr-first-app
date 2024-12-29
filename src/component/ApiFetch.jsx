import axios from "axios";
import React, { useState } from "react";
const ApiFetch = () => {
  const [users, setUsers] = useState([]);
  const fetchApi = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    let res = data.map((person) => {
      return { username: person.username };
    });
    console.log(res);

    setUsers(res)
  };
  return (
    <>
      <button onClick={fetchApi}>Fetch</button>
      {users.map(({ username}, id) => (
        <h4 key={id}>{username}</h4>
      ))}
    </>
  );
};

export default ApiFetch;
