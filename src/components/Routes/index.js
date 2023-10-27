import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import SignIn from "../../screens/signIn";
import SignUp from "../../screens/signUp";
import Books from "../../pages/Books";
import Settings from "../../pages/Settings";
import ProtectedRoute from "../ProtectedRoutes";

const AppRoutes = ({ isAuthenticated }) => {
  return (
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
  );
};

export default AppRoutes;
