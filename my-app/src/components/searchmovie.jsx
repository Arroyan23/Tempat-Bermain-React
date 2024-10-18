import { useState } from "react";

function Search(props) {
  const handleInput = (event) => {
    props.setSearch(event.target.value);
  };
  return (
    <>
      <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">
          Ketik Judul Film
        </span>
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={handleInput}
        />
      </div>
    </>
  );
}

export default Search;
