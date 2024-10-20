import { useState } from "react";

function Search(props) {
  const handleInput = (event) => {
    props.setSearch(event.target.value);
  };
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Ketik Judul Film
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleInput}
        />
      </div>
    </>
  );
}

export default Search;
