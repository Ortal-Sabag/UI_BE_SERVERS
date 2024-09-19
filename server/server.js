//init the app
const express = require("express");
const app = express();
//allow localhost:5173 call localhost:8080
const cors = require ("cors");
const corsOptions = {
    origin: ["http://localhost:5173"]
}
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json(
        {"fruits": ["apple", "orange", "banana", "strawberry", "pineapple"]}
    );
});

app.listen(8080, () => {
    console.log("Server started on port 8080")
});