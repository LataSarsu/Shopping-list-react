import React from "react";
import { useState } from "react";

const handleSubmit = () => {
  return { item };
};

const Form = ({handleSubmit}) => {
  const [item, setItem] = useState("");
  return (
    <form id="item-form">
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          id="item-input"
          name="item"
          placeholder="Enter Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className="form-control">
        <button type="submit" className="btn" onSubmit={handleSubmit}>
          <i className="fa-solid fa-plus"></i> Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
