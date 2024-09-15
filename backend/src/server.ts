import express from "express"
import cors from "cors"
import { userRouter } from "./Routes/userRoutes"
import { tokenRouter } from "./Routes/tokenRoutes"
import { projectRouter } from "./Routes/projectRoutes"
import { transactionRouter } from "./Routes/transactionRoutes"
import { PrismaClient } from "@prisma/client"
const app = express()

app.use(express.json())
app.use(cors())
const prisma = new PrismaClient()

app.use("/users", userRouter)
app.use("/tokens", tokenRouter)
app.use("/project", projectRouter)
app.use("/transactions", transactionRouter)

app.post('/createTransaction', async (req, res) => {
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

app.listen(3001, () => {
    console.log("Server is running on port 3000")
})