
export default function handler(req, res) {
    const page = req.query.page;
     return fetch(`https://ophim.tv/_next/data/jMo1r8lC0F6IGwkz0ayh-/danh-sach/phim-bo.json?page=${page}&slug=phim-bo`)
     .then(data => data.json())
     .then(result => {
       return res.status(200).send(result)
     })
   }