
export default function handler(req, res) {
    const page = req.query.page;
     return fetch(`https://ophim.tv/_next/data/jMo1r8lC0F6IGwkz0ayh-/danh-sach/phim-le.json?page=${page}&slug=phim-le`)
     .then(data => data.json())
     .then(result => {
       return res.status(200).send(result)
     })
   }