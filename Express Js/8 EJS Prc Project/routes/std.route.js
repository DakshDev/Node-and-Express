import { Router } from "express";

const router = Router();


router.get("/std", (req, res) => {
  const students = [
    {name: "user 1", age: 17, id: Date.now()},
    {name: "user 2", age: 19, id: Date.now() / 1},
    {name: "user 3", age: 23, id: Date.now() / 1.1},
    {name: "user 4", age: 57, id: Date.now() / 1.2},
    {name: "user 5", age: 27, id: Date.now() / 1.3}
  ]
  res.render("index", {students})
})



export {router as stdRoute}