import { useState } from "react";
import * as SC from "./styles";

export const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <SC.Input type="text" placeholder="Введите название" onChange={handleInputChange} value={searchValue}></SC.Input>
  );
};
