
export default function handler(req, res) {
    //  console.log(req.query.page);
     const search = req.query.search;
     const url = encodeURI(search)
      return fetch(` https://ophim.tv/_next/data/jMo1r8lC0F6IGwkz0ayh-/tim-kiem.json?keyword=${url}`)
      .then(data => data.json())
      .then(result => {
        return res.status(200).send(result)
      })
    }