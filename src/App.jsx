import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Filter from "./components/Filter";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  const handleRemove = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };
  const handleClear = () => {
    setItems([]);
  };
  return (
    <>
      <Form onAddItem={handleAddItem} />
      <Filter items={items} onRemove={handleRemove} onClear={handleClear} />
    </>
  );
}

export default App;
