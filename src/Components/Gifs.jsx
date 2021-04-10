import React from "react";
import Image from "./Image";
import SubTitle from "./SubTitle";

export default function Gifs({ data, msg, setMsg, loading, setLoading }) {
  return (
    <>
      <SubTitle data={data} msg={msg} />

      {data.length > 0 && (
        <Image
          data={data}
          setMsg={setMsg}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </>
  );
}
