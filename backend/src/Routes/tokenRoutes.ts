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

tokenRouter.put('/retire', async (req, res) => {
    const { noOfTokens, country, startDate, endData, purpose } = req.body;

    try {
        const tokens = await prisma.token.findMany({
            where: {
                available: true,
                country: country
            }
        })

        if (tokens.length < noOfTokens) {
            res.status(400).json({ error: 'Not enough tokens available' })
        }

        for (let i = 0; i < noOfTokens; i++) {
            await prisma.token.update({
                where: {
                    id: tokens[i].id
                },
                data: {
                    available: false,
                    startDate: startDate,
                    endDate: endData,
                    purpose: purpose
                }
            })
        }

        res.status(200).json({ message: 'Tokens retired successfully' })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }

})