const express = require("express"); // dependencies
const path = require("path");

const app = express();

app.use("static", express.static(path.resolve(__dirname,"frontend","static"))); //middleware to serve static directory

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
}); // all paths go back to root index.html

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));