import React, { useState, useEffect } from "react";
import Gifs from "./Gifs";
import "../App.css";
import InputGroup from "./InputGroup";

export default function Search() {
  const [value, setValue] = useState(""); //Estado del input
  const [dataGifs, setDataGifs] = useState([]); //Estado de los datos
  const [category, setCategory] = useState(""); //Estado para el buttom
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(
    "Para buscar un GIF, ingrese su nombre en el buscador."
  );

  const handlerClear = () => {
    setValue("");
    setDataGifs([]);
    setMsg("Para buscar un GIF, ingrese su nombre en el buscador.");
  };

  const handlerSubmit = () => {
    if (value.trim().length > 2) {
      setMsg("");
      setLoading(true);
      setCategory(value);
    }
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handlerSubmit();
    }
  };

  useEffect(() => {
    let request = fetch(
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
      )}&api_key=A5t1iCCFtgWnvInllNbtEPCD9ECjDB31&limit=12`
    );
    request
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        if (data.length > 0) {
          setDataGifs(data);
        } else if (category !== "") {
          setMsg("No se encontraron resultados");
        }
      });
  }, [category]);

  return (
    <>
      <InputGroup
        handleKeypress={handleKeypress}
        setValue={setValue}
        value={value}
        handlerClear={handlerClear}
        handlerSubmit={handlerSubmit}
      />
      <Gifs
        data={dataGifs}
        msg={msg}
        setMsg={setMsg}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
}
