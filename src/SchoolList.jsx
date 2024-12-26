import React, { useState } from "react";
const App = () => {
  const [name, setName] = useState("")
  const [dept, setDept] = useState("")
  const [school, setSchool] = useState("")
  const [editName, setEditName] = useState("")

  const [member, setMember] = useState([])

  const addMember = () => {
    if (name === "" || dept === "" || school === "") {
      alert("Enter a value")
    } else {
      let student = {
        "name": name,
        "dept": dept,
        "school": school,
        "edit": false
      }
      console.log(student);

      setMember([...member, student])
      setName("")
      setDept("")
      setSchool("")
      console.log([...member, student]);
    }


  }

  const remMember = (ind) => {
    let result = member.filter((mem, i) => i !== ind)
    console.log(ind);

    setMember(result)
  }

  const editNameFunc = (ind) => {
    let newMember = [...member]
    let result = newMember.find((_, i) => ind === i)
    result.edit = true
    console.log(result);
    setMember(newMember)

  }

  const saveEdit = (ind) => {
    let newMember = [...member]
    let result = newMember.find((_, i) => ind === i)
    result.edit = false
    result.name = editName
    setEditName("")
    console.log(result);
    setMember(newMember)
  }
  return (
    <>
      <div className="container">
        <input value={name} type="text" placeholder="Enter a name" onChange={(e) => setName(e.target.value)} />
        <input value={dept} type="text" placeholder="Your Department" onChange={(e) => setDept(e.target.value)} />
        <input value={school} type="text" placeholder="Your School" onChange={(e) => setSchool(e.target.value)} />
        {/* <p>{name}</p>
        <p>{dept}</p>
        <p>{school}</p> */}
        <button onClick={addMember}>Add Member</button>
      </div>
      {member.length ?
        <table border={1}>
          <thead>
            <tr>
              <th>s/n</th>
              <th>Name</th>
              <th>Dept</th>
              <th>School</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          {

            member.map((mem, i) => (

              <tbody key={i}>
                <tr>
                  <td>{i + 1}</td>
                  <td>{mem.edit ? <input onChange={(e) => setEditName(e.target.value)} /> : mem.name}</td>
                  <td>{mem.dept}</td>
                  <td>{mem.school}</td>

                  <td>
                    {mem.edit ? <button className="save" onClick={() => saveEdit(i)}>Save</button>
                      :
                      <button className="save" onClick={
                        () => editNameFunc(i)}>Edit</button>
                    }
                  </td>
                  <td> <button onClick={() => remMember(i)}>Delete</button></td>

                </tr>
              </tbody>
            ))


          }
        </table>
        :
        <div className="center">No member Yet</div>
      }


    </>
  )
}

export default App