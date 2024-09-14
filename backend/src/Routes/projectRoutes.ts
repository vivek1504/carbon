import axios from "axios";
import { Router } from "express";
import { authMiddleware } from "../middleware/authmiddleware";
import { PrismaClient } from "@prisma/client";

export const projectRouter = Router();
const prisma = new PrismaClient();

projectRouter.get('/:id', authMiddleware, async (req, res) => {
    const projectId = req.params
    try {
        const checkingRegistry = await axios.get(`http://localhost:8080/info/${projectId}`)
        res.status(200).json(checkingRegistry.data)
    }
    catch (error) {
        return res.status(400).json({ error: "error while fetching project" })
    }
})

projectRouter.get('/list', authMiddleware, async (req, res) => {
    try {
        const checkingRegistry = await prisma.project.findMany();
        res.status(200).json(checkingRegistry)
    }
    catch (error) {
        return res.status(400).json({ error: "error while fetching projects" })
    }
});



