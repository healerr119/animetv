import Image from 'next/image';
import React from 'react'

export default function Header() {
  return (
    <>
      <header className='w-100'>
        <nav class="container navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <Image src='https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp' width={120} height={40} alt="logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Trang Chủ
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Anime Mới
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Anime Hot
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Anime Hay
                  </a>
                </li>
              </ul>
              <form class="d-flex search-header">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Tên phim"
                  aria-label="Search"
                />
                {/* <button class="btn btn-outline-success" type="submit">
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
