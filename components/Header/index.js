import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from 'next/router';
export default function Header() {

  const [search, setSearch] = useState('')
  const router = useRouter()
  const {query, pathname} = router;
  const handleSearch = (e) => {
    e.preventDefault()
    if(pathname !== "/") return;
    router.replace(`?timkiem=${search}`)
    setSearch('')
  }
  return (
    <>
      <header className='w-100'>
        <nav className="container navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className="navbar-brand" href="./">
                <Image src='https://phimhayhd.b-cdn.net/phimhaydd.png' width={170} height={40} alt="logo" />
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
                  <Link className="nav-link active" aria-current="page" href="/phim-moi">
                    Phim Mới
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/phim-bo">
                    Phim Bộ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/phim-le">
                    Phim Lẻ
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    href="/anime"
                    id="navbarDropdown"
                    role="button"
                    aria-expanded="false"
                  >
                    Anime Hay
                  </Link>
                </li>
           
              </ul>
              <form className="d-flex search-header" onSubmit={handleSearch}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Tên phim..."
                  aria-label="Search"
                  value={search}
                  onChange={e => setSearch( e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                  Tìm kiếm
                </button> 
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
