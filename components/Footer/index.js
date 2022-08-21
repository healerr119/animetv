import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='app footer'>
         <div className='container'>
             <div className='row'>
                  <div className='col-md-4'>
                        <Image
                          src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
                          height={50}
                          width={150}
                          alt=""
                         />
                         <div className='excerp-footer'>
                            <p>
                            Mạng xã hội chia sẻ các nội dung video giải trí chất lượng cao, phù hợp mọi độ tuổi và an toàn cho trẻ em.
                            </p>
                         </div>
                  </div>
                  <div className='col-md-4'>
                      <h3 className='title'>Phim Mới</h3>
                        <ul>
                           <li>Trang chủ</li>
                           <li>Phim lẻ mới</li>
                           <li>Phim bộ mới</li>
                           <li>Phim chiếu rạp</li>
                           <li>Phim thuyết minh</li>
                        </ul>
                  </div>
                  <div className='col-md-4'>
                      <h3 className='title'>Email liên hệ:</h3>
                      <span>animehay.tv@gmail.com</span>
                  </div>
             </div>
         </div>
    </div>
  )
}
