// form untuk menambahkan component
import "../../public/style/formadd.css";

function AddForm() {
  return (
    <>
      <div className="login-dark mb-3">
        <form>
          <h2 className="sr-only">Tambahkan Kasus</h2>

          <div className="form-group">
            <label htmlFor="">Nama Tersangka</label>
            <input className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="">Kasus</label>
            <input className="form-control" placeholder="Password" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Tambahkan Kasus
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddForm;
