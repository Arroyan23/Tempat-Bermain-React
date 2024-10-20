// ini untuk mengisi halaman input search
import { useState } from "react";

function SearchLocation(props) {
  const [search, setSearch] = useState("");
  const onSetSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    props.onSearch(search);
  };

  return (
    <>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Tulis kota di Indonesia"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={onSetSearch}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Button
        </button>
      </div>
    </>
  );
}

export default SearchLocation;
