import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/Register';
import Main from '../pages/Main'
import MovieDetails from '../pages/MovieDetails'
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/details/:id" element={<MovieDetails/>}/>
  </Routes>
  </BrowserRouter>
  )
};

export default AppRouter;
