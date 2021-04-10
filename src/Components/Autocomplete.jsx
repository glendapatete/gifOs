import Autosuggest from "react-autosuggest";
import React, { useState } from "react";
const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => {
  return (
    <ul>
      <li>{suggestion.name}</li>
    </ul>
  );
};

export default function Autocomplete({ setValue, value, handleKeypress }) {
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    let request = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?q=${encodeURI(
        value
      )}&api_key=A5t1iCCFtgWnvInllNbtEPCD9ECjDB31&limit=5`
    );
    request
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        setSuggestions(data);
      });
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    value,
    onChange: onChange,
    onKeyDown: handleKeypress
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}
