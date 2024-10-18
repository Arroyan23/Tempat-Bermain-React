// Halaman untuk menampilkan movie
import Search from "../../components/searchmovie";
// melakukan fetching data dengan cara react
import { useState, useEffect } from "react";

function MoviePage() {
  // untuk menambahkan dari search

  const [searchMovie, setSearchMovie] = useState("");
  const [movieExternal, setMovieExternal] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=a78cf8b&s=${searchMovie}`)
      .then((response) => response.json({ Search }))
      // ambil responses.Search karena di Jsonnya berbentuk object yang pada awalnya berbentuk
      // Search yang didalamnya terdapat array
      .then((responses) => {
        // cek apakah ada di hasil pencarian
        if (responses.Search) {
          setMovieExternal(responses.Search);
        } else {
          // jika tidak ada maka set movie external nya dengan array kosong
          setMovieExternal([]);
        }
      })
      .catch((err) => console.log(err));
  }, [searchMovie]);

  const handleSearch = (value) => {
    setSearchMovie(value);
  };

  return (
    <>
      <div className="container">
        <h1>Tampilan Film</h1>
        <Search setSearch={handleSearch} />
        <div className="row">
          {movieExternal.map((e, i) => {
            return (
              <div className="col-md-4 my-3">
                <div
                  key={i}
                  class="card bg-dark border border-light"
                  style={{ width: "18rem" }}
                >
                  <img src={e.Poster} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-white">{e.Title}</h5>
                    <p class="card-text text-white">{e.Year}</p>
                    <a href="#" class="btn btn-primary text-white">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MoviePage;
