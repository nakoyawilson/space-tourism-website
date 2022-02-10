// import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  // const [backgroundClass, setBackgroundClass] = useState("home-page");

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
