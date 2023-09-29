const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const ejs = require("ejs");
const path = require("path");

const pageControllers = require("./controllers/pageControllers");
const postControllers = require("./controllers/postControllers");

const app = express();

mongoose.connect('mongodb://localhost/blog-db', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.get('/', pageControllers.getAllPosts);

app.get("/add", pageControllers.getAddPage);

app.get("/about", pageControllers.getAboutPage);

app.get("/edit/:id", pageControllers.getEditPage);

app.get("/posts/:id", pageControllers.getPost);

app.post("/addpost", postControllers.addPost);

app.put("/posts/:id", postControllers.editPost);

app.delete("/posts/delete/:id", postControllers.deletePost);

const port = 3000;
app.listen(port, () => {
  console.log(`Port: ${port}`);
});
