
import { PrismaClient } from '@prisma/client';
import express from 'express';
const app = express();

const prisma = new PrismaClient();

app.get('/', (req, res) => {

    try {
        const carbonMark = prisma.carbonMark.findMany();

        return res.status(200).json(carbonMark);
    }
    catch(error){
        return res.status(500).json({error: 'Internal Server Error'});
    }
});