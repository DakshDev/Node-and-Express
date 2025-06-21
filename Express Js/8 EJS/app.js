import express from "express"
import {studentRoute} from "./routes/student.route.js"

const app = express();


// setup EJS
app.set("view engine", "ejs");
app.set("views", "./views")
// app.set("name", "user")



// Routers
app.use(studentRoute)


app.listen(3000, () => console.log("listening..."));






// ============ Starting Tag ============
// <% 'Scriptlet' tag, for control-flow, no output  ✅
// <%= Outputs the value into the template (HTML escaped) ✅
// <%- Outputs the unescaped value into the template ✅
// <%# Comment tag, no execution, no output ✅
// <%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
// <%% Outputs a literal '<%'

// ============ Ending Tag ============
// %> Plain ending tag
// -%> Trim-mode ('newline slurp') tag, trims following newline
// _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it