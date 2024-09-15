import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { authMiddleware } from "../middleware/authmiddleware";

export const transactionRouter = Router();
const prisma = new PrismaClient();

// route to hit buy rahul's blockchain
transactionRouter.post('/purchase', authMiddleware, async (req, res) => {
    const { id } = req.body.user;
    const { projectId, totalTokens, amount, to, from, type } = req.body;

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
                to,
                from,
                amount,
                totalTokens,
                type

            }
        })



        res.status(200).json({ message: "Transaction successful" })
    }
    catch (error) {
        console.log(error)
        res.json({ message: "error creating token" })
    }

})

transactionRouter.get('/userTransactions', authMiddleware, async (req, res) => {
    const { id } = req.body.user;
    try {
        const userDetails = await prisma.user.findUnique({
            where: {
                id
            }
        })

        if (!userDetails) {
            return res.status(400).json({ message: "cannot find the user" })
        }
        const transactions = await prisma.transaction.findMany({
            where: {
                OR: [
                    {
                        to: userDetails.walletAddress
                    },
                    {
                        from: userDetails.walletAddress
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