import express from "express";
import path from 'path';



const app = express();


app.use("/home",express.static(path.join(import.meta.dirname, "public")));

app.get("/home", (req, res) => {
  res.end();
})

app.get("/contact", (req, res) => {
  res.send({"name": "daksh"});
})


// Errors (if all route is fail then this route run)
app.use((req, res) => {
  return res.status(404).sendFile(path.join(import.meta.dirname, "view", "404.html"));
})

app.listen(8080, () => console.log("Listening ..."))