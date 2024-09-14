const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', async(req,res)=>{
    const project = await prisma.project.findMany();

    return res.json(project)
})

app.get('/info/:projectId', async(req, res) => {
    const { projectId } = req.params;
    console.log(projectId)
    if(!projectId){
        return res.json({message : "projectId not found"})
    }

    try{
        const project = await prisma.project.findUnique({
            where: {
                serialNumber: projectId
            }
        });

        if(!project){
            return res.status(404).json({ error: 'Project not found' });
        }

        res.json(project);
    }
    catch(err){
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/updateTransaction', async (req, res) => {
    const { projectId, govtId, credits } = req.body;

    try {
        const projectInfo = await prisma.project.findFirst({
            where: {
                serialNumber: projectId,
            },
        });

        if (!projectInfo) {
            return res.status(404).json({ error: 'Project not found' });
        }

        const history = projectInfo.history || [];

        history.push({
            action: 'Purchase',
            buyer: govtId,
            seller: projectInfo.owner,
            date: new Date().toISOString(),  
            details: {
                buyerId: govtId,
                project: projectInfo.projectName,
                creditsPurchased: credits,
            },
        });

        const updateProject = await prisma.project.update({
            where: {
                serialNumber: projectId,
            },
            data: {
                owner: govtId,
                availableCredits: {
                    decrement: credits,  
                },
                purchasedCredits: {
                    increment: credits,
                },
                history,
            },
        });

        res.status(200).json({ message: 'Project updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(8080, () => {
    console.log('Server is running');
  });