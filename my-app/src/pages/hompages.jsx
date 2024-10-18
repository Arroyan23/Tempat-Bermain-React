import "bootstrap/dist/css/bootstrap.min.css";
// implementasikan ke dalam file
import { useState, useEffect } from "react";
// relatif terhadap folder my-app
import "/public/style/homepages.css";

function HomePage() {
  const [todos, setToDo] = useState([]);
  const [valueToDo, setValueToDo] = useState("");
  // Buat fungsi untuk menyimpan ke dalam storage

  //   untuk mencoreng

  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem("todos"));
    if (savedTodo) {
      setToDo(savedTodo);
    }
  }, []);

  //   handle untuk inputannya

  const handleInput = (event) => {
    setValueToDo(event.target.value);
  };

  // buat fungsi untuk menyimpan ke dalam local storage
  const addToLocalStorage = (pekerjaan) => {
    localStorage.setItem("todos", JSON.stringify(pekerjaan));
  };

  //   buat fungsi untuk pada saat buttonnya di klik
  function addToDo(stringToDo) {
    if (valueToDo.trim()) {
      const newToDo = { text: stringToDo, completed: false };
      const updateTodo = [...todos, newToDo];
      setToDo(updateTodo);
      addToLocalStorage(updateTodo);
      //   set kembali ke 0 agar inputnya kembali ke semula
      setValueToDo("");
    } else {
      alert("Data ini tidak boleh kosong");
    }
  }

  //   untuk mengatur bagian di garisi atau tidak

  const toggleCompleted = (index) => {
    const updateNewTodo = todos.map((todo, idx) => {
      return idx === index ? { ...todo, completed: !todo.completed } : todo;
    });

    setToDo(updateNewTodo);
    addToLocalStorage(updateNewTodo);
  };

  //   saat button di klik maka akan memasukkan value ke dalam to do nya

  //   pada saat di klik akan menjalankan removeToDo nya
  const removeToDo = (index) => {
    // membuat array baru dengan metode filter
    // buat filter yang selain index yang dituju
    // maka akan di buang
    const removedToDo = todos.filter((_, idx) => idx !== index);
    setToDo(removedToDo);
    // masukkan ke dalam local storage
    addToLocalStorage(removedToDo);
  };

  return (
    <>
      <div className="container bg-transparent mt-3">
        <h1>Selamat Datang Di blog kami</h1>
        <div className="col">
          <h2>Untuk Mengatur To-do list</h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan To-Do List anda"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={valueToDo}
              onChange={handleInput}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => addToDo(valueToDo)}
            >
              Button
            </button>
          </div>
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Nomor Urutan</th>
                <th scope="col">First</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => {
                return (
                  <>
                    <tr>
                      <th key={index}>{index + 1}</th>
                      <th
                        key={index}
                        className={`hover-pointer ${
                          todo.completed ? "text-decoration-line-through" : ""
                        }`}
                        onClick={() => toggleCompleted(index)}
                      >
                        {todo.text}
                      </th>
                      <th>
                        <button
                          className="btn btn-danger badge rounded-pill m-3"
                          onClick={() => removeToDo(index)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-primary badge rounded-pill"
                          onClick={() => toggleCompleted(index)}
                        >
                          Done
                        </button>
                      </th>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default HomePage;
