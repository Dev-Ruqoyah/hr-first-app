import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";
import Calculator from "./component/Calculator";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Photo from "./component/Photo";
import NavBar from "./component/NavBar";
import About from "./component/About";
import Taye from "./component/Taye";
import Kenny from "./component/Kenny";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/contact/:username?/:id?" element={<Contact />} />
        <Route path="/photos/:id" element={<Photo />} />
        <Route path="*" element={<Error />} />

        <Route path={"/about"} element={<About />}>
          <Route path="taye" element={<Taye />} />
          <Route path="kenny" element={<Kenny />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
