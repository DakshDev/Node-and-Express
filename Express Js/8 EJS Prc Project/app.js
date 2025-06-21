import express from "express"
import {stdRoute} from "./routes/std.route.js"
import path from "path"


const app = express();


// middlewear
app.use(express.static(path.join(import.meta.dirname, "public")))
app.set("view engine", "ejs");

app.use(stdRoute);

app.listen(3000, () => console.log("Live..."));