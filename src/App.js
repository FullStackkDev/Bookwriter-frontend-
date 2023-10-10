/* eslint-disable*/
import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "../src/screens/signIn";
import SignUp from "../src/screens/signUp";
import Books from "./pages/Books";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(
    window.localStorage.getItem("user")
  );

  useEffect(() => {
    setAuthenticated(window.localStorage.getItem("user"));
  }, [window.localStorage.getItem("user")]);
  return (
    <div className="App">
      {authenticated && <Navbar />}
      <Routes>
        {authenticated ? (
          <>
            <Route path="/signin" element={<Navigate to="/" />} />
            <Route path="/signup" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/settings" element={<Settings />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/books" element={<Navigate to="/signin" />} />
            <Route path="/home" element={<Navigate to="/signin" />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
