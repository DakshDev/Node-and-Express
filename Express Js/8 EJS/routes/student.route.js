import { Router } from "express";

const router = Router();


router.get("/std", (req, res) => {
  const students = {
    name: `<span>daksh</span>`,
    id: 1,
    age: 17,
  }

  const teacher = {
    name: "pagal",
  }
  res.render("student", {students})
})


export {router as studentRoute}