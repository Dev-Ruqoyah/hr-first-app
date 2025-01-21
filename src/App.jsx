import React, {  } from "react";

import { Route, Routes } from "react-router-dom";
import Calculator from "./component/Calculator";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Photo from "./component/Photo";
import NavBar from "./component/NavBar";
import About from "./component/About";
import Taye from "./component/Taye";
import Kenny from "./component/Kenny";
import Form from "./component/Form";
import Details from "./component/Details";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import CreateQuestion from "./Pages/CreateQuestions";
import Reduser from "./Pages/UseReducer";
import HandlingForm from "./Pages/FormReducer";



let personSlice = createSlice({
  name:"person ",
  initialState:{name:"Taye",dept: "computer science",age:12, lang: ["English","French","Yoruba"]},
  reducers:{
    setName: (state)=>{
      state.name = "Kenny"
    },
    setDept: (state,actions)=>{
      state.dept = actions.payload
    },
    setAge:(state,actions)=>{
      state.age = actions.payload;
    },
    setLang:(state,actions)=>{
        state.lang = [...state.lang,actions.payload]
    }
  }
})
let store = configureStore({
  reducer:{
    person:personSlice.reducer
  }
})
export const {setName,setDept,setAge,setLang} = personSlice.actions
const App = () => {
  // const [age, setAge] = useState(10);
  // const increment = () => {
  //   setAge(age + 1);
  // };

 
  return (
    <>
      <NavBar />
      {/* <AgeContext.Provider value={{ myAge: age ,increments:increment}}> */}
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/contact/:username?/:id?" element={<Contact />} />
          <Route path="/photos/:id" element={<Photo />} />
          <Route path="*" element={<Error />} />
          <Route path="/reducer" element={<Reduser/>}/>
          <Route path="/form" element={<Form />} />
          <Route path="/createquestion" element={<CreateQuestion/>}/>

          <Route path={"/about"} element={<About />}>
            <Route path="taye" element={<Taye />} />
            <Route path="kenny" element={<Kenny />} />
          </Route>

          <Route path="/details" element={<Details />} />
          <Route path="/form-reducer" element={<HandlingForm/>}/>
          
        </Routes>
        </Provider>
      {/* </AgeContext.Provider> */}
    </>
  );
};
export default App;
