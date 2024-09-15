
const { PrismaClient } = require('@prisma/client');


const express = require('express');
const app = express();

const prisma = new PrismaClient();

app.get('/',async (req, res) => {

    try {
        const carbonMark =await prisma.carbonMark.findMany();

        return res.status(200).json(carbonMark);
    }
    catch(error){
        return res.status(500).json({error: 'Internal Server Error'});
    }
});

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});