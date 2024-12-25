import React, { useState } from "react";
const App = () =>{
  const[name,setName] = useState("")
  const[dept,setDept] = useState("")
  const[school,setSchool] = useState("")
  const [member,setMember] = useState([])
  const addMember = () =>{
    if(name === "" || dept === "" || school === ""){
      alert("Enter a value")
    }else{
      let student = {
        "name":name,
        "dept": dept,
        "school":school
      }
      console.log(student);
      
      setMember([...member,student])
      console.log([...member,student]);
    }

    
  }
  const remMember = (ind) =>{
    let result = member.filter((mem,i) => i !== ind)
    console.log(ind);
    
    setMember(result)
  }
  return(
    <>
      <div className="container">
        <input type="text" placeholder="Enter a name" onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder="Your Department" onChange={(e)=>setDept(e.target.value)} />
        <input type="text" placeholder="Your School" onChange={(e)=>setSchool(e.target.value)}/>
        {/* <p>{name}</p>
        <p>{dept}</p>
        <p>{school}</p> */}
        <button onClick={addMember}>Add Member</button>
      </div>
       
        <table border={1}>
          <thead>
            <th>s/n</th>
            <th>Name</th>
            <th>Dept</th>
            <th>School</th>
            <th>Action</th>
          </thead>
          {
            member.length ?
            member.map((mem,i) =>(
              
              <tbody key={i}>
                <td>{i+1}</td>
                <td>{mem.name}</td>
                <td>{mem.dept}</td>
                <td>{mem.school}</td>
                <button onClick={() =>remMember(i)}>Delete</button>
              </tbody>
            ))
            :
            <tbody>
              No member Yet
            </tbody>
          }
        </table>
       
      
    </>
  )
}

export default App