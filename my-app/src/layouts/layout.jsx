// halaman untuk navbarnya itu sendiri

import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg color-white border-bottom border-light">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  To-Do-List App
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Movie API App
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Kasus Favian
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default RootLayout;
