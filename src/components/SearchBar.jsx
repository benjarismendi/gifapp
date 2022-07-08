import React from "react";
import { useState } from "react";

export const SearchBar = ({ addSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;
    addSearch(inputValue.trim());
    setInputValue("");
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleInputChange}
        className="form-control"
      />
      <button className="btn btn-danger " type="submit">
        Buscar
      </button>
    </form>
  );
};
