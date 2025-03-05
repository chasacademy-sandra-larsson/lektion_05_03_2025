import {Request, Response } from "express"
import { query } from "./../config/db"
import { User, Post } from "./../types"


// CREATE
export const createPostByUser = async (req: Request, res: Response) => {

    const { title, content, userId } = req.body;
    // TODO: När vi har authentiserin gpå plats (JWT) ska vi hämta userId därifrån istället


    try {

        const userExists = await query<User[]>(
            "SELECT * FROM users WHERE id = ?",
            [userId]
        )

        if(userExists.length === 0) {
            res.status(404).json({error: "User not found"})
        }
      
        const result = await query<Post[]>(
            "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)",
            [title, content, userId]
        )

        res.status(201).json({ message: "Post created successfully", post: result})

    } catch(error) {
        res.status(500).json({error: "Internal Server error"});

    }

};

// READ MANY
export const getPostsByUser = async (req: Request, res: Response) => {




    try {
      

    } catch(error) {

    }

};

// READ ONE
export const getPostByUser = async (req: Request, res: Response) => {




    try {
      

    } catch(error) {

    }

};

// UPDATE
export const updatePostByUser = async (req: Request, res: Response) => {




    try {
      

    } catch(error) {

    }

};

// DELETE
export const deletePostByUser = async (req: Request, res: Response) => {




    try {
      

    } catch(error) {

    }

};