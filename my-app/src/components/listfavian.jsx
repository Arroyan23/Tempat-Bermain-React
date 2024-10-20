// untuk menampilkan list dari kasus favian

import favianData from "../favian.json";

function TampilFavian() {
  return (
    <>
      {favianData.map((element, index) => {
        return (
          <>
            <small>ID: {element.id}</small>
            <h2>Nama: {element.nama}</h2>
            <p>Kasus: {element.kasus.join(", ")}</p>
          </>
        );
      })}
    </>
  );
}

export default TampilFavian;
