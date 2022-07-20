import React from "react";
import { useState } from "react";
import PropType from 'prop-types';

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
    <form className="d-flex" onSubmit={handleSubmit} aria-label='form'>
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

SearchBar.propType = {
  addSearch: PropType.func.isRequired,
}
