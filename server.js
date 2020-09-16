const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3868;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});


app.listen(PORT, () => console.log(`Portfolio is up on http://localhost:"${PORT}`));

