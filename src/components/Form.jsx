import React from "react";
import { useState } from "react";
import Filter from "./Filter";
import { ImCross } from "react-icons/im";

const handleSubmit = () => {
  return { item };
};

const Form = ({ onAddItem }) => {
  const [itemInp, setItemInp] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemInp.trim()) {
      onAddItem(itemInp);
      setItemInp("");
    }
  };

  const handleChange = (event) => {
    setItemInp(event.target.value);
  };
  return (
    <div className="container">
      <header>
        <img src="images/note.png" alt="" />
        <h1>Shopper's stop</h1>
      </header>
      <form id="item-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            id="item-input"
            name="item"
            placeholder="Enter Item"
            onChange={handleChange}
            value={itemInp}
          />
        </div>
        <div className="form-control">
          <button type="submit" className="btn">
            <i className="fa-solid fa-plus"></i> Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
