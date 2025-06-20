import express from "express";
import path from "path";



const app = express();

// middlewear
app.use("/", (req, res, next) => {
  if(Object.keys(req.query).length > 0){
    next()
  }else{
    res.end("Reject");
  }
})

// Serve CLient TO Server
app.use("/", (req, res, next) => {
  next()
  return express.static(path.join(import.meta.dirname, "public"))
});


app.get("/", (req, res) => {
  console.log(req.query.user);
  res.end();
})


// Listening
app.listen(8080, () => console.log("live now"));