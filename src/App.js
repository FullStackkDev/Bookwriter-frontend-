/*eslint-disable*/
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Switch, Redirect, and BrowserRouter
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Books from "./pages/Books";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Protected Routes */}
          <Route path="/books">
            {/* {authenticated ? <Books /> : <Route component={SignIn} />} */}
          </Route>
          <Route path="/settings">
            {/* {authenticated ? <Settings /> : <Route path="/signin" component={SignIn} />} */}
          </Route>
        </Routes>
      </div>
  );
}

export default App;
