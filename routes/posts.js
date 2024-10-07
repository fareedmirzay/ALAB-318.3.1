import { Router } from "express";
import { error } from "../utilities/error.js";
import { posts } from "../data/posts.js";

const postsRouter = Router();

/**
 * GET
 */
postsRouter.get("/", (req, res) => {
  res.json(posts);
});

/**
 * GET id
 */
postsRouter.get("/:id", (req, res, next) => {
  console.log(req.params);
  const post = posts.find((post) => post.id == req.params.id);
  post ? res.json(post) : next(error(404, "Post Not Found"));

});


/**
 * POST
 */
postsRouter.post("/", (req, res) => {
  console.log(req.query);
  
  const { userId, title, content } = req.body;
  if (userId && title && content) {
    const newPost = {
      id: posts[posts.length - 1].id + 1,
      userId,
      title,
      content,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  } else {
    res.status(400).json({ error: "DUMBASS YOUR Missing VERY IMPORTANT required fields" });
  }
})


/**
 * PATCH OR UPDATE by id
 */
postsRouter.patch("/:id", (req, res, next) => {
  const post = posts.find((p, i) => {
    if (p.id == req.params.id) {
      Object.assign(posts[i], req.body);
      return true;
    }
  });
  post ? res.json(post) : next(error(404, "Post Not Found"));
});

/**
 * DELETE by id
 */

postsRouter.delete("/:id", (req, res, next) => {
  const index = posts.findIndex((p) => p.id == req.params.id);
  if (index !== -1) {
    const deletedPost = posts.splice(index, 1);
    res.json(deletedPost);
  } else {
    next(error(404, "Post Not Found"));
  }
});




export default postsRouter;