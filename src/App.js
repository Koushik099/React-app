import "./App.css";
import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Alart from "./components/Alart";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("primary");
  const [alart, setalart] = useState(null);
  const showAlart = (message, type) => {
    setalart({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalart(null);
    }, 4000);
  };
  let toggleMode = () => {
    if (Mode === "primary") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      showAlart("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtils-Dark Mode";
      setInterval(() => {
        document.title = "TextUtils-is Awsome";
      }, 2000);
      setInterval(() => {
        document.title = "TextUtils-Install Now";
      }, 1500);
    } else {
      setMode("primary");
      document.body.style.backgroundColor = "white";
      showAlart("Light Mode Has Been Enabled", "success");
      document.title = "TextUtils-Home";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={Mode}
          toggle={toggleMode}
        />
        <Alart alart={alart} />

        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <TextForm
                heading="Enter the text to analyze"
                mode={Mode}
                showAlart={showAlart}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
