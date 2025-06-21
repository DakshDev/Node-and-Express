import express from "express";
import path from "path";

// Importing Routes
import { contactRoute } from "./routes/contact.route.js";


const app = express();


// Middle Wear
app.use("/", express.static(path.join(import.meta.dirname, "public")));
app.use(express.urlencoded({extended: true}));

// Routes
app.use(contactRoute);

app.listen(3000, () => console.log("live..."));