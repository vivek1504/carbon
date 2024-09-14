import { PrismaClient } from "@prisma/client";
import { Router } from "express";

export const transactionRouter = Router();
const prisma = new PrismaClient();
transactionRouter.post('/purchase', async (req, res) => {
    const { id } = req.body.user;
    const { projectId, totalTokens, amount } = req.body;

    if (!projectId || !totalTokens || !amount) {
        return res.status(400).json({ message: "projectId or amount or totalTokens not found" })
    }

    try {
        const isValidToken = await prisma.token.findUnique({
            where: {
                projectId
            }
        })

        if (!isValidToken) {
            return res.status(400).json({ message: "this is not a valid token" })
        }

        const createTransaction = await prisma.transaction.create({
            data: {
                buyerId: id,
                sellerId: isValidToken.generatedbyId,
                amount,
                totalTokens

            }
        })

        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })

        if (!user) {
            return res.status(400).json({ message: "not a valid user" })
        }

        res.status(200).json({ message: "Transaction successful" })
    }
    catch (error) {
        console.log(error)
        res.json({ message: "error creating token" })
    }

})

transactionRouter.get('/userTransactions', async (req, res) => {
    const { id } = req.body.user;
    try {
        const transactions = await prisma.transaction.findMany({
            where: {
                OR: [
                    {
                        buyerId: id
                    },
                    {
                        sellerId: id
                    }
                ]
            }
        })
        res.status(200).json(transactions)
    }
    catch (error) {
        console.log(error)
        res.json({ message: "error fetching transactions" })
    }
})