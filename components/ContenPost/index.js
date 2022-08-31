import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
export default function ContentPost(content) {
  const episodes = content.content.filmDetail.data.episodes;
  const movie = content.content.filmDetail.data.movie;
  const innerHTMLs = (data) => {
      if (data) {
          return { __html: data };
      } else {
          return { __html: "" };
      }
  };
  return (
    <div className="post-content">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Nội Dung Phim
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body" dangerouslySetInnerHTML={innerHTMLs(movie.content)}>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Danh Sách Tập
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>{episodes ? episodes[0].server_name: ''}</strong>{" "}
                    <div className='container main-Episodes'>
                      {movie.type === "series" || movie.type === "hoathinh"   ? episodes[0].server_data?.map((episode, index) => {
                        return (
                              <Link  href={episode.link_embed} key={index}>
                                <a target='_blank' rel="noopener noreferrer nofollow">
                                  <span className='Episodes'>
                                  {episode.name }
                                  </span>
                                  </a>
                              </Link>
                          )
                        }) : movie.type === "single" ? episodes[0].server_data[0].name : ''
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Bình Luận
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                      <div className='comment'>
                          <div className='row'>
                              <div className='col-md-1'>
                                  <Image 
                                  src="https://popsimg.akamaized.net/api/v2/containers/file2/cms_topic/slidebanner_mobile-bf469bc2c94a-1658393342344-KGV4vMQL.jpg?v=0&maxW=300&format=webp" 
                                  width={60}
                                  height={60}
                                  alt="a"
                                />
                              </div>
                              <div className='col-md-10'>
                                  <h5 className='avatar-name'>Thế Anh Lv.17</h5>
                                  <div className='content-comment'>
                                  Các đạo hữu cho hỏi khi hàn lập xuất hiện cứ Vk NCU thi là tu vi gì , vk Main tu vi j
                                  </div>
                                  <div className='date-comment'>
                                      1 giờ trước
                                  </div>    
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
