import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./home";
import Post from "./post";
import Write from "./write";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
