const express = require("express");
const routes = require("./Routes/authRoute")

const app = express();

//accept JSON
app.use(express.json());

// accept Body
app.use(express.urlencoded({extended: true}));

// accept the HTML
app.use(express.static("public"));

app.use("/api/v1", routes);

const PORT = 1337;


app.listen(PORT, () => console.log("App is running at port", PORT))