import { PrismaClient } from '@prisma/client';
import { Router } from 'express'

export const tokenRouter = Router();
const prisma = new PrismaClient();

tokenRouter.get('/available', async (req, res) => {
    try {

        const tokens = await prisma.token.findMany({
            where: {
                available: true
            }
        })

        res.status(200).json(tokens)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }

})

tokenRouter.get('/user', async (req, res) => {
    const { id } = req.body.user;

    try {
        const tokens = await prisma.token.findMany({
            where: {
                generatedbyId: id
            }
        })

        res.status(200).json(tokens)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})