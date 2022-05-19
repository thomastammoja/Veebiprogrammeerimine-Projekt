const express = require("express");
const app = express();
const cors = require("cors");
const GetAllRecipes = require("./routes/GetAllRecipes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
GetAllRecipes(app);

app.listen(8000, () => {
  console.log("Server has started on port 8000");
});
