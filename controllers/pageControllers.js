const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render("index", { posts });
};

exports.getAddPage = (req, res) => {
  res.render("add");
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getEditPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("edit", { post });
};

exports.getPost = async(req, res) => {
    const post = await Post.findById(req.params.id)
    res.render('post', {post});
};
