import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { authMiddleware } from '../middleware/authmiddleware';
import axios from 'axios';
export const userRouter = Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
}

userRouter.post('/register', async (req, res) => {
    const { name, email, walletAddress } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(name, 10);

        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword, walletAddress }
        });

        const token = sign({ email: user.email, id: user.id }, JWT_SECRET as string);
        res.status(201).json(token);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
    }
});

userRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = sign({ email: user.email, id: user.id }, JWT_SECRET as string);
        res.status(200).json(token);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
    }
});

userRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const userDetails = await prisma.user.findUnique({
            where: {
                id
            },
            include: {
                token: true,
                transaction: true
            }

        })

        res.status(200).json(userDetails)
    }
    catch (error) {
        return res.status(400).json({ error: "user not found" })
    }


})

userRouter.post('/listToken', authMiddleware, async (req, res) => {
    const { user } = req.body;
    // somewhat fucked up
    const { projectId , country, startDate, purpose } = req.body;

    try {
        const existingToken = await prisma.token.findFirst({
            where: {
                projectId
            }
        });

        if (existingToken) {
            return res.status(400).json({ error: "Token already exists" });
        }

        const checkingRegistry = await axios.get(`http://localhost:8080/info/${projectId}`)

        if (!checkingRegistry) {
            return res.status(400).json({ error: "Project does not exist" });
        }

        const userdetails = await prisma.user.findUnique({
            where: { email: user.email }
        });

        if (!userdetails) {
            return res.status(400).json({ error: "User does not exist" });
        }

        //const verifyOwnership = userdetails.govtId === checkingRegistry.data.owner;
        //verification logic pending

        // if (!verifyOwnership) {
        //     return res.status(400).json({ error: "User is not the owner of the project" });
        // }

        // logic to mint token and add to user wallet

        const token = await prisma.token.create({
            data: {
                projectId,
                generatedbyId: userdetails.id,
                country,
                startDate,
                purpose
            }
        });

        res.status(200).json({ messsage: "token created successfully" })
    }
    catch (error) {

        console.log(error)
        res.json({ message: "error creating token" })
    }

});

// userRouter.post("/buytoken", authMiddleware, async (req, res) => {
//     const { id, projectId, amount, numberOfTokens } = req.body


//     if (!projectId) {
//         return res.status(400).json({
//             message: "project id not found"
//         })
//     }

//     try {
//         const isValidToken = await prisma.token.findUnique({
//             where: {
//                 projectId
//             }
//         })

//         if (!isValidToken) {
//             return res.status(400).json({ message: "this is not a valid token" })
//         }

//         // logic to buy the token.
//         console.log(isValidToken.generatedbyId)

//         const createTransaction = await prisma.transaction.create({
//             data: {
                
//                 amount,
//                 totalTokens: numberOfTokens

//             }
//         })

//         const user = await prisma.user.findUnique({
//             where: {
//                 id
//             }
//         })

//         if (!user) {
//             return res.status(400).json({ message: "not a valid user" })
//         }
//         // currently just sending tokens but need to update it in future.
//         // either store 1 credit as 1000 don't change the registry until all the tokens are purchased
//         // problem ====> if one credit is broken down into multipe tokens how will its ownership be calculated
//         const updateRegistry = await axios.put("http://localhost:8080/updateTransaction", {
//             projectId,

//             credits: numberOfTokens
//         })

//         if (updateRegistry.status !== 200) {
//             return res.json({ message: "unable to update the registry" })
//         }

//         res.status(200).json({ message: "token purchased successfully" })
//     }
//     catch (error) {
//         console.log(error);
//         res.status(400).json({ message: "internal server error" })
//     }
// })