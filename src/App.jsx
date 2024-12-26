import React, { useState } from "react";
import { use } from "react";
const App = () => {
  const [proName, setProName] = useState("")
  const [proPrice, setProPrice] = useState("")
  const [proQuatity, setProQunatity] = useState("")
  const [editName, setEditName] = useState("");
  const [allProduct, setAllProduct] = useState([])

  const addProduct = () => {
    if(proName === "" || proPrice === "" || proQuatity === ""){
      alert("Enter a definite value")
    }else{
      setAllProduct([...allProduct, { proName, proPrice, proQuatity,edit:false }])
      setProName("")
      setProPrice("")
      setProQunatity("")
    }
   
  }
  const removeProduct = (inde) =>{
    const newProduct = allProduct.filter((prod,i) => i !== inde)
    setAllProduct(newProduct)
  }
  const editProName = (inde) =>{
    const newPro = [...allProduct]
    let result = newPro.find((_,i) => inde === i)
    result.edit = true;
    console.log(result);
    
    setAllProduct[newPro]
    // console.log(newPro);
    
  }
  const saveProName = (inde) =>{
    const newPro = [...allProduct]
    let result = newPro.find((_,i) => inde === i)
    result.edit = false;
    result.proName = editName
    console.log(result);
    
    setAllProduct[newPro]
    // console.log(newPro);
    
  }
  return (
    <>
      <div>

        <div className="container">
          <input type="text" value={proName} placeholder="Enter Product" onChange={(e) => setProName(e.target.value)} />

          <input type="text" value={proQuatity} placeholder="Product Quantity" onChange={(e) => setProQunatity(e.target.value)} />

          <input type="text" value={proPrice} placeholder="Product Price" onChange={(e) => setProPrice(e.target.value)} />
          <button onClick={addProduct}>Add Product</button>
        </div>

       {allProduct.length? <table  border={1}>
          <thead>
            <tr>
              <th>S/n</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
              <th>Delete</th>
              <th>Edit/Save</th>
            </tr>
          </thead>
          {
            allProduct.map((product, i) => (
              <tbody key={i}>
                <tr>
                  <td>{i + 1}</td>
                  <td>{product.edit ? <input onClick={(e) =>setEditName(e.target.value)}/> : product.proName}</td>
                  <td>{product.proPrice}</td>
                  <td>{product.proQuatity}</td>
                  <td>
                    <button onClick={()=>removeProduct(i)}>Delete</button>
                  </td>
                  <td>
                    {product.edit ? 
                    <button onClick={()=>saveProName(i)} className="save">Save</button>
                    :
                    <button className="save" onClick={() => editProName(i)}>Edit</button>
                  }
                  </td>
                </tr>
              </tbody>

            ))
          }</table>
        :
        <div className="center">No product yet</div>}
      </div>
    </>
  )
}
export default App