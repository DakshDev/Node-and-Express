import express from "express";


const app = express();

app.get("/profile", (req, res) => {
  let productName = req.query.name;
  let productId = req.query.id;
  
  res.end(`Hi Product Name is "${productName}" and its id is "${productId}"`);
})


app.listen(8080, () => console.log("Server is live"))