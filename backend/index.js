const express = require("express");
const app = express();
const cors = require("cors");
const GetAllRecipes = require("./routes/GetAllRecipes");
const GetAllAlcoholicRecipes = require("./routes/GetAllAlcoholicRecipes");
const GetAllNonAlcoholicRecipes = require("./routes/GetAllNonAlcoholicRecipes");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
GetAllRecipes(app);

GetAllAlcoholicRecipes(app);

GetAllNonAlcoholicRecipes(app);

app.listen(8000, () => {
  console.log("Server has started on port 8000");
});
