import React from "react";
import Autocomplete from "./Autocomplete";

export default function InputGroup({
  handleKeypress,
  setValue,
  value,
  handlerClear,
  handlerSubmit
}) {
  return (
    <div className="content-input">
      <Autocomplete
        handleKeypress={handleKeypress}
        setValue={setValue}
        value={value}
      />
      <button className="clear" onClick={handlerClear}>
        <img src="./images/times-solid.svg" alt="" />
      </button>
      <button
        className={`button-search  ${value ? "left" : ""}`}
        onClick={handlerSubmit}
      >
        <img
          src={`${
            value
              ? "./images/icon-search.svg"
              : "./images/icon-search-mod-noc.svg"
          }`}
          alt=""
        />
      </button>
    </div>
  );
}
