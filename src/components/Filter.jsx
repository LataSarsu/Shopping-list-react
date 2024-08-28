import React from "react";
import Form from "./Form";



const Filter = ({ item }) => {
  return (
    <>
      <Form />
      <div className="filter">
        <input
          type="text"
          className="form-input-filter"
          id="filter"
          placeholder="Filter Items"
        />
      </div>

      <ul id="item-list" className="items">
        <li>
          {item}
          <button className="remove-item btn-link text-red">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </li>
        <li>
          Orange Juice
          <button className="remove-item btn-link text-red">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </li>
      </ul>
      <button id="clear" className="btn-clear">
        Clear All
      </button>
    </>
  );
};

export default Filter;
