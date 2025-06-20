import express from "express";




const app = express();


app.get("/", (req, res) => res.send(`<h1>Hello</h1>`));

app.get("/about", (req, res) => {
    res.setHeader("content-Type", "application/json")
    return res.send(`{"PAGE": "ABOUT"}`)
});



app.listen(8080, () => console.log(`Server is Listen http://localhost:8080`));