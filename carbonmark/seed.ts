import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create dummy locations
  const locations = await Promise.all([
    prisma.location.create({ data: { country: 'Indonesia', region: 'West Kalimantan' } }),
    prisma.location.create({ data: { country: 'India', region: 'Rajasthan' } }),
    prisma.location.create({ data: { country: 'Bangladesh', region: 'Cox\'s Bazar' } }),
    prisma.location.create({ data: { country: 'Brazil', region: 'Bahia' } }),
    prisma.location.create({ data: { country: 'USA', region: 'California' } }),
  ]);

  // Create dummy issuers
  const issuers = await Promise.all([
    prisma.issuer.create({ data: { name: 'EcoProjects Ltd' } }),
    prisma.issuer.create({ data: { name: 'GreenEnergy Corp' } }),
    prisma.issuer.create({ data: { name: 'NatureConserve Ltd' } }),
    prisma.issuer.create({ data: { name: 'WindPower Solutions' } }),
    prisma.issuer.create({ data: { name: 'WasteSolutions Ltd' } }),
  ]);

  // Create dummy market activities
  const marketActivities = await Promise.all([
    prisma.marketActivity.create({ data: { lastTradeDate: new Date('2023-08-20'), lastTradeVolume: 500, totalTrades: 150 } }),
    prisma.marketActivity.create({ data: { lastTradeDate: new Date('2023-07-10'), lastTradeVolume: 200, totalTrades: 80 } }),
    prisma.marketActivity.create({ data: { lastTradeDate: new Date('2023-06-15'), lastTradeVolume: 100, totalTrades: 30 } }),
    prisma.marketActivity.create({ data: { lastTradeDate: new Date('2023-09-01'), lastTradeVolume: 50, totalTrades: 10 } }),
    prisma.marketActivity.create({ data: { lastTradeDate: new Date('2023-08-05'), lastTradeVolume: 300, totalTrades: 120 } }),
  ]);

  // Create dummy projects and credits
  await Promise.all(locations.map((location, index) =>
    prisma.project.create({
      data: {
        name: `Project ${index + 1}`,
        projectType: 'AFFORESTATION', // You can vary this as needed
        locationId: location.id,
        methodology: `Methodology_${index + 1}`,
        coBenefits: [`Benefit_${index + 1}`, `Benefit_${(index + 2) % 5 + 1}`],
        credits: {
          create: {
            id: `credit_${index + 1}`,
            vintageYear: 2023 - index,
            totalCredits: 1000 + index * 100,
            pricePerCredit: 10 + index * 2,
            verificationStandard: 'VERRA', // You can vary this as needed
            status: 'AVAILABLE', // You can vary this as needed
            issuerId: issuers[index].id,
            marketActivityId: marketActivities[index].id,
          },
        },
      },
    })
  ));
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
