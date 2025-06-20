import express from "express";


const app = express();

app.get("/profile/:username/:article", (req, res) => {
  let article = req.params.article;
  let username = req.params.username;

  res.end(`Article is "${article}" and username is "${username}"`)
})


app.listen(8080, () => console.log("Server is live"))