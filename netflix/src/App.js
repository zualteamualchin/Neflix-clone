import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Netflix } from "./pages/Netflix";
import { Signup } from "./pages/Signup";
import { Register } from "./pages/Register";
import { Video } from "./components/Video";
import { Slider } from "./components/Slider";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="" element={<Signup />} />
          <Route path="netflix" element={<Netflix />} />
          <Route path="register" element={<Register />} />
          <Route path="player" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
