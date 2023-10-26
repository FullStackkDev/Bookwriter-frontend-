/* eslint-disable*/
import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "../src/screens/signIn";
import SignUp from "../src/screens/signUp";
import Books from "./pages/Books";
import Settings from "./pages/Settings";
import { useSelector } from "react-redux"; // Import the functions
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.token);

  return (
    <div>
      {isAuthenticated && <Navbar />}
      <Routes>
        <>
          <Route
            path="/signin"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                path="/signin"
                element={<SignIn />}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                path="/signup"
                element={<SignUp />}
              />
            }
          />

          <Route
            path="/"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                path="/"
                element={<Home />}
                redirectPath="/signin"
              />
            }
          />
          <Route
            path="/books"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                path="/books"
                element={<Books />}
                redirectPath="/signin"
              />
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                path="/settings"
                element={<Settings />}
                redirectPath="/signin"
              />
            }
          />
        </>
      </Routes>
    </div>
  );
}

export default App;
