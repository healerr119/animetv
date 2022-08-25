import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import ContentPost from '../ContenPost';
import PlayFilm from '../PlayFilm';

export default function PostFilm(filmDetail) {
  console.log(filmDetail);
  const episodes = filmDetail.filmDetail.data.episodes;
  const movie = filmDetail.filmDetail.data.movie;
  return (
    <div className="app post">
      <div className="container post-detail">
        <div className="row">
          <h1 className="title">{movie.name}</h1>
          <div className="title-en">
            <i> {movie.origin_name}</i>
          </div>
          <div className="col-md-3 image-post">
            <Image
              src={movie.poster_url}
              width={300}
              height={370}
              alt="image film"
            />
            {/* <div className="btn-play">
              <Link className="xem-ngay" href="/xem-phim">
                <span>Xem Ngay</span>
              </Link>
            </div> */}
          </div>
          <div className="col-md-9">
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Trạng thái </th>
                  <td>{episodes[0].server_data[0].name}</td>
                </tr>
                <tr>
                  <th scope="row">Số tập </th>
                  <td> {movie.episode_total} tập</td>
                </tr>
                <tr>
                  <th scope="row">Thời Lượng </th>
                  <td colSpan="2">{movie.time}</td>
                </tr>
                <tr>
                  <th scope="row">Năm Phát Hành </th>
                  <td colSpan="2">{movie.year}</td>
                </tr>
                <tr>
                  <th scope="row">Chất Lượng </th>
                  <td colSpan="2">{movie.quality}</td>
                </tr>
                <tr>
                  <th scope="row">Ngôn Ngữ </th>
                  <td colSpan="2">{movie.lang}</td>
                </tr>
                <tr>
                  <th scope="row">Đạo Diễn </th>
                  <td colSpan="2">{movie.director[0] ? movie.director[0] : 'Đang cập nhật'}</td>
                </tr>
                <tr>
                  <th scope="row">Diễn Viên </th>
                  <td colSpan="2">Đang cập nhật</td>
                </tr>
                <tr>
                  <th scope="row">Thể Loại </th>
                  <td colSpan="2">{movie.category[0] ? movie.category[0].name : 'Đang cập nhật'}</td>
                </tr>
                <tr>
                  <th scope="row">Quốc Gia </th>
                  <td colSpan="2">{movie.country[0] ? movie.country[0].name : 'Đang cập nhật'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PlayFilm video = {episodes} />
          <ContentPost content = {filmDetail} />
        </div>
      </div>
    </div>
  );
}
