// Halaman untuk menampilkan movie
import Search from "../../components/searchmovie";

function MoviePage() {
  const handleSearch = (value) => {
    console.log(value);
  };
  return (
    <>
      <div className="container">
        <h1>Tampilan Film</h1>
        <Search setSearch={handleSearch} />
      </div>
    </>
  );
}

export default MoviePage;
