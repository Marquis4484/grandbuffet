const express = require("express"); // dependencies
const path = require("path");
PORT = process.env.PORT || 5060;
const app = express();

app.use(
   "static",
   express.static(path.resolve(__dirname, "frontend", "static"))
); //middleware to serve static directory

app.get("/*", (req, res) => {
   res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
}); // all paths go back to root index.html

app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
