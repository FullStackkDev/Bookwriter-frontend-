/* eslint-disable*/
import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Books from "./pages/Books";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <div className="App">
      {authenticated && <Navbar />}
      <Routes>
        {authenticated ? (
          <>
            <Route path="/signin" element={<Navigate to="/" />}  />
            <Route path="/signup" element={<Navigate to="/" />}  />
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/settings" element={<Settings />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/home" element={<Navigate to="/signin" />} />
            <Route path="/books" element={<Navigate to="/signin" />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
