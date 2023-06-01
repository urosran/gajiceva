import React from "react";
import Homepage from "./components/Homepage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import { Navigate } from 'react-router-dom';


function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate to="/home"/>}/>
        <Route exact path={'/home'} element={<Homepage/>}/>
        <Route exact path={'/about'} element={<AboutUs/>}/>
        <Route exact path={'*'} element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
