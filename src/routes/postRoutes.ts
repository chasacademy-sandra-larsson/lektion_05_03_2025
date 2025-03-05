import express from "express";
import { createPostByUser, getPostByUser, getPostsByUser, updatePostByUser, deletePostByUser } from "../controllers/postController"

const router = express.Router();


// CRUD för en resurs posts
router.post("/", createPostByUser);
router.get("/", getPostsByUser);
router.get("/:id", getPostByUser);
router.put("/:id", updatePostByUser);
router.delete("/:id", deletePostByUser);

export default router;


