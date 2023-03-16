const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const store = require("session-file-store");
const authRouter = require("./routes/authRouter");
const shopRouter = require("./routes/shopRouter");
const apiProductRouter = require("./routes/adminPanelRoutes/apiProducts");
const apiCategoriesRouter = require("./routes/adminPanelRoutes/apiCategories");
const userRouter = require("./routes/adminPanelRoutes/apiUsers");
const apiOrderRouter = require("./routes/adminPanelRoutes/apiOrders");
const apiSubCategoryRouter = require("./routes/adminPanelRoutes/apiSubCategory")

require("dotenv").config();

const PORT = process.env.DB_PORT || 3001;
const app = express();

const FileStore = store(session);

const sessionConfig = {
  name: "user_sid",
  secret: process.env.SESSION_SECRET ?? "test",
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(cors({ origin: true, credentials: true }));
// app.use(cors());
app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
// app.use(express.static("public"));

app.use("/shop", shopRouter);
app.use("/api/auth/", authRouter);
app.use("/api/products", apiProductRouter);
app.use("/api/categories", apiCategoriesRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", apiOrderRouter);
app.use("/api/subcategories", apiSubCategoryRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
