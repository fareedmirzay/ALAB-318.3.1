import { Router } from "express";
import { error } from "../utilities/error.js";
import { comments } from "../data/comments.js";

const commentsRouter = Router();

/**
 * GET all comments
 */
commentsRouter.get("/", (req, res) => {
    res.json(comments)
});

/**
 * GET by id
 */
commentsRouter.get("/:id", (req, res, next) => {
    const comment = comments.find((comment) => comment.id == req.params.id) 
        if (comment) {
            res.json(comment);
        } else {
            next(error(404, "Comment Not Found Boss!!!!1"))
        }
});

/**
 * POST
 */

// POST a new comment
commentsRouter.post("/", (req, res) => {
    const { userId, postId, body } = req.body;
    if (userId && postId && body) {
      const newComment = {
        id: comments[comments.length - 1].id + 1,
        userId,
        postId,
        body,
      };
      comments.push(newComment);
      res.status(201).json(newComment);
    } else {
      res.status(400).json({ error: "Missing required fields" });
    }
  });
  
/**
 * PATCH OR UPDATE by id
 */

commentsRouter.patch("/:id", (req, res, next) => {
    const comment = comments.find((c, i) => {
        if (c.id == req.params.id) {
            Object.assign(comments[i], req.body);
            return true;
        }
    });
    comment ? res.json(comment) : next(error(404, "Comment not found bro"))
});


/**
 * DELETE by id
 */
commentsRouter.delete("/:id", (req, res, next) => {
    const index = comments.findIndex((c) => c.id == req.params.id);
    if (index !== -1) {
      const deletedComment = comments.splice(index, 1);
      res.json(deletedComment);
    } else {
      next(error(404, "Post Not Found"));
    }
});

export default commentsRouter;