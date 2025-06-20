import express from "express";
import path from "path";



const app = express();

app.use("/contact", express.static(path.join(import.meta.dirname, "public")));
// [express.urlencoded()] => HTML form submissions ke liye hota hai.
// [extended: true] => nested objects parse karne ki ability deta hai.
// [req.body] => Isse parsed form data milta hai.
app.use("/contact", express.urlencoded({extended: true}));



app.post("/contact", (req, res) => {
  console.log(req.body);
  res.end();
})

app.listen(8080, () => console.log("Live Now"))