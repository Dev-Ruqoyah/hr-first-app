import React, { useContext, useState } from "react";
import './calculator.css'
import { AgeContext } from "./context";

const Calculator = () => {
  const{increments} = useContext(AgeContext)
  const [num,setNum] = useState("0")
  const handleNum = (number) =>{
    // setNum(num + number)

    if(num === "0"){
      setNum(number)
    }else{
      setNum(num + number)
    }
   
   
  }
  const actionNum = () =>{
    let calculatedValues = eval(num)
    setNum(calculatedValues)
    // setNum(num act num )
  }
  const clearScreen = () =>{
    setNum("")
  }
  const removeLast = () =>{
    if(num.length === 1){
      setNum("0")
    }else{
      let result = num.slice(0,-1)
      setNum(result)
    }
  
  }
 
  return (
    <>
    <button onClick={increments}>Increase</button>
      <div className="container">
        <div className="calculator">
          <div className="screen" >
            <p>{num}
            </p>
          </div>
          <div className="content">
            <div className="one">
              <button className="action" onClick={clearScreen}>AC</button>
              <button className="action" onClick={removeLast}>Del</button>
              <button className="action"  onClick={() =>{handleNum("%")}}>%</button>
              <button className="num"  onClick={() =>{handleNum(7)}}>7</button>
              <button className="num" onClick={() =>{handleNum(8)}} >8</button>
              <button className="num" onClick={() =>{handleNum(9)}}>9</button>
              <button className="num" onClick={() =>{handleNum(4)}}>4</button>
              <button className="num" onClick={() =>{handleNum(5)}}>5</button>
              <button className="num" onClick={() =>{handleNum(6)}}>6</button>
              <button className="num" onClick={() =>{handleNum(1)}}>1</button>
              <button className="num" onClick={() =>{handleNum(2)}}>2</button>
              <button className="num" onClick={() =>{handleNum(3)}}>3</button>
              <button className="num nu0" onClick={() =>{handleNum(0)}}>0</button>
              <button className="num" onClick={() =>{handleNum(".")}}>.</button>
            </div>
            <div className="two">
            <button className="num1"  onClick={() =>{handleNum("/")}}>/</button>
            <button className="num1"  onClick={() =>{handleNum("*")}}>*</button>
            <button className="num1"  onClick={() =>{handleNum("-")}}>-</button>
            <button className="num1"  onClick={() =>{handleNum("+")}}>+</button>
            <button className="num1" onClick={actionNum} >=</button>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Calculator