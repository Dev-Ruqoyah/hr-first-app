import React, { useState } from "react";
import DisplayGoods from "./DisplayGoods";
import Main from "./Main";
import AddGoods from "./AddGoods";
const Table = () => {
    const [details, setDetails] = useState([
        { name: "Lati", goods: "Phone", qty: 20 },
        { name: "Latri", goods: "Phoner", qty: 22 },
        { name: "Latrif", goods: "Phoner", qty: 22 }
    ])

    const increment = (ind) => {
        const newDetails = [...details]
        const result = newDetails.find((_, i) => ind === i)

        result.qty++;

        //  result.qty = qty+1;
        //  console.log("clicked");

        setDetails(newDetails)


    }
    const deleteProduct = (ind) => {
        const result = details.filter((_, i) => i !== ind)
        setDetails(result);

    }

    return (
        <>
            <AddGoods setDetail={setDetails} detail={details} />
            <table border={1}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Goods name</th>
                        <th>Quantity</th>
                        <th>Increment</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        details.map(({ name, goods, qty }, i) => (
                            <DisplayGoods key={i} name={name} goods={goods} qty={qty} increment={() => increment(i)} delItem={() => deleteProduct(i)} />
                        ))
                    }
                </tbody>
            </table>
            {details.map(({ name, goods, qty }, i) => (
                <Main name={name} items={goods} qty={qty} increase={() => increment(i)} delet={() => deleteProduct(i)} />
            ))}
        </>
    )
}
export default Table