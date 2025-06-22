import express from "express";
import {authRoute} from "./routes/auth.route.js"

const app = express();


// middlewear
app.set("view engine", "ejs");


// Routes
app.use(authRoute)


app.listen(3000, () => console.log("Live..."))