// untuk halaman menampilkan kasus
import TampilFavian from "../../components/listfavian";
import AddForm from "../../components/formadd";
import { useState } from "react";

function Favian() {
    // untuk menampilkan halaman tambah kasus favian
    
  return (
    <>
      <div className="container">
        <h1>ini data untuk kasus favian</h1>
        <TampilFavian />
        <AddForm />
        <button className="btn btn-primary">add case +</button>
      </div>
    </>
  );
}

export default Favian;
