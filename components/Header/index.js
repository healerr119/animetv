import Image from 'next/image';
import React from 'react'

export default function Header() {
  return (
    <>
      <header className='w-100'>
        <nav className="container navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="./">
                <Image src='https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp' width={120} height={40} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/phim-bo">
                    Phim Bộ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/phim-le">
                    Phim Lẻ
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="/anime"
                    id="navbarDropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Anime Hay
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    href="/shows"
                    aria-disabled="true"
                  >
                    Shows
                  </a>
                </li>
              </ul>
              <form className="d-flex search-header">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Tên phim"
                  aria-label="Search"
                />
                {/* <button className="btn btn-outline-success" type="submit">
                  Search
                </button> */}
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
