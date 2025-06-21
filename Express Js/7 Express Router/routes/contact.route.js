import { Router } from "express";
const router = Router();



router.post("/contact", (req, res) => {
  let data = req.body;
  console.log(data);
  res.redirect("/");
  res.end();
})



export {router as contactRoute}