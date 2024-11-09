import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SlowComponent from "./SlowComponent";
import Modal from "./Modal";
import RefactorComponent from "./RefactorComponent";

function App() {
  return (
    <>
      <RefactorComponent>
        <h1>I am rendered</h1>
        <div>I am again here</div>
        <SlowComponent />
        <Modal />
      </RefactorComponent>
    </>
  );
}

export default App;
