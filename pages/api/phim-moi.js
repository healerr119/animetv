
export default function handler(req, res) {
  //  console.log(req.query.page);
   const page = req.query.page;
    return fetch(`https://ophim.tv/_next/data/jMo1r8lC0F6IGwkz0ayh-/danh-sach/phim-moi.json?page=${page}&slug=phim-moi`)
    .then(data => data.json())
    .then(result => {
      return res.status(200).send(result)
    })
  }