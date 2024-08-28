import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Filter from "./components/Filter";

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState("");
  return (
    <div className="container">
      <header>
        <img src="./images/note.png" alt="" />
        <h1>Shopper's stop</h1>
      </header>
      <Form />
      <Filter />
    </div>
  );
}

export default App;
