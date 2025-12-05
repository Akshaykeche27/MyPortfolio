require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const expressLayouts = require("express-ejs-layouts");
const ejsMate = require("ejs-mate");

const indexRoutes = require("./routes/index");


const app = express();
const PORT = process.env.PORT || 3000;

app.engine("ejs", ejsMate);




app.engine("ejs", ejsMate);
app.set("view engine", "ejs"); // fixed typo (no extra space)
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB Error:", err));


app.use("/", indexRoutes);

app.listen(PORT, () => console.log(`http://localhost:3000`));