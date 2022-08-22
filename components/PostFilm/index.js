import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import ContentPost from '../ContenPost';

export default function PostFilm() {
  return (
    <div className="app post">
      <div className="container post-detail">
        <div className="row">
          <h1 className="title">DIỆP VẤN 4: HỒI CUỐI </h1>
          <div className="title-en">
            <i> Ip Man 4: The Finale</i>
          </div>
          <div className="col-md-3 image-post">
            <Image
              src="https://popsimg.akamaized.net/api/v2/containers/file2/cms_topic/slidebanner_mobile-9b0471102a38-1659949080108-QXKzN1Bx.jpg?v=0&maxW=300&format=webp"
              width={300}
              height={370}
              alt="image film"
            />
            <div className="btn-play">
              <Link className="xem-ngay" href="/xem-phim">
                <span>Xem Ngay</span>
              </Link>
            </div>
          </div>
          <div className="col-md-9">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Trạng thái </th>
                  <td>Full</td>
                </tr>
                <tr>
                  <th scope="row">Số tập </th>
                  <td> 1 tập</td>
                </tr>
                <tr>
                  <th scope="row">Thời Lượng </th>
                  <td colspan="2">30 Phút</td>
                </tr>
                <tr>
                  <th scope="row">Năm Phát Hành </th>
                  <td colspan="2">2002</td>
                </tr>
                <tr>
                  <th scope="row">Chất Lượng </th>
                  <td colspan="2">HD</td>
                </tr>
                <tr>
                  <th scope="row">Ngôn Ngữ </th>
                  <td colspan="2">Vietsub</td>
                </tr>
                <tr>
                  <th scope="row">Đạo Diễn </th>
                  <td colspan="2">Đang cập nhật</td>
                </tr>
                <tr>
                  <th scope="row">Diễn Viên </th>
                  <td colspan="2">Đang cập nhật</td>
                </tr>
                <tr>
                  <th scope="row">Thể Loại </th>
                  <td colspan="2">Tâm Lý, Võ Thuật</td>
                </tr>
                <tr>
                  <th scope="row">Quốc Gia </th>
                  <td colspan="2">Hồng Kông</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ContentPost />
        </div>
      </div>
    </div>
  );
}
