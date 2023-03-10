const cors = require("cors");
const express = require("express");
const axios = require("axios");
const morgan = require("morgan");
const apiProductRouter = require("./routes/adminPanelRoutes/apiProducts");
const apiCategoriesRouter = require("./routes/adminPanelRoutes/apiCategories");
require("dotenv").config();

const app = express();
const PORT = process.env.DB_PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api/products", apiProductRouter);
app.use('/api/categories', apiCategoriesRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
