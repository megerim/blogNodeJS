const Post = require("../models/Post");

exports.addPost = async (req, res) => {
    await Post.create(req.body)
    res.redirect("/");
  };


exports.editPost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
  
    post.title = req.body.title;
    post.description = req.body.description;
    post.save();
  
    res.redirect(`/posts/${req.params.id}`);
  }

  exports.deletePost = async (req, res) => {
    await Post.findByIdAndDelete(req.params.id)
    res.redirect("/");
  }