import React from "react";
import ReactLoading from "react-loading";

export default function Image({ data, loading, setLoading, setMsg }) {
  let imgs = [];
  if (data.length > 0) {
    imgs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.fixed_height.url
      };
    });
  }

  let counter = 0;
  const imageLoaded = () => {
    counter += 1;
    if (counter >= imgs.length) {
      setLoading(false);
      setMsg("");
    }
  };

  return (
    <>
      <div
        className="content-load"
        style={{ display: loading ? "flex" : "none" }}
      >
        <ReactLoading type="spokes" id="loading" color="#6809e1" />
      </div>
      <div style={{ display: loading ? "none" : "block" }}>
        {imgs.length > 0 && (
          <>
            <h2> Resultados de la búsqueda </h2>
            <ul className="content-gifs">
              {imgs.map((img) => {
                return (
                  <li key={img.id}>
                    <img src={img.url} alt="" onLoad={imageLoaded} />
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
