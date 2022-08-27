import React, { useState } from 'react'
import useSWR from 'swr';

export default function Pagination(pagination) {
    const [pageIndex, setPageIndex] = useState(1);
    const {data} = useSWR(`https://ophim.tv/_next/data/jMo1r8lC0F6IGwkz0ayh-/danh-sach/phim-moi.json?page=6&slug=phim-moi`, 
    fetcher,
    {
        fallbackData: pagination
    }
    )
  return (
    <div className='container list-film'>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}
