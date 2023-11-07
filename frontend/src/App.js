import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppBar from "./Components/AppBar";
import NavBar from "./Components/NavBar";
import { AppRoutes } from "./Components/NavBar";
import { Home, Products, Services, Contact_US } from "./Components/list";

function App() {
  return (
    <div className="App ">
      <AppBar />

      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
