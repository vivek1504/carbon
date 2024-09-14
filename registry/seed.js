"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.project.createMany({
            data: [
                {
                    serialNumber: 'PROJ001',
                    projectName: 'Solar Energy Initiative',
                    status: 'Active',
                    owner: 'Green Power Corp',
                    numberOfCredits: 10000,
                    availableCredits: 8000,
                    purchasedCredits: 2000,
                    issuanceDate: new Date('2023-01-01T00:00:00Z'),
                    monitoringPeriod: '2022-01-01 to 2022-12-31',
                    vintage: 2022,
                    emissionReduction: true,
                    projectType: 'Renewable Project',
                    verifier: 'Verra',
                    methodology: 'Methodology 101',
                    region: 'Asia',
                    history: JSON.stringify([
                        { retiredBy: 'Company A', retiredCredits: 500, date: new Date('2023-05-01T00:00:00Z').toISOString() },
                        { retiredBy: 'Company B', retiredCredits: 100, date: new Date('2023-06-10T00:00:00Z').toISOString() }
                    ])
                },
                {
                    serialNumber: 'PROJ002',
                    projectName: 'Wind Power Development',
                    status: 'Retired',
                    owner: 'EcoTech Solutions',
                    numberOfCredits: 5000,
                    availableCredits: 0,
                    purchasedCredits: 5000,
                    issuanceDate: new Date('2022-09-15T00:00:00Z'),
                    monitoringPeriod: '2021-01-01 to 2021-12-31',
                    vintage: 2021,
                    emissionReduction: true,
                    projectType: 'Renewable Project',
                    verifier: 'Gold Standard',
                    methodology: 'Methodology 202',
                    region: 'Africa',
                    history: JSON.stringify([
                        { retiredBy: 'Company C', retiredCredits: 3000, date: new Date('2023-03-25T00:00:00Z').toISOString() },
                        { retiredBy: 'Company D', retiredCredits: 2000, date: new Date('2023-07-15T00:00:00Z').toISOString() }
                    ])
                },
                {
                    serialNumber: 'PROJ003',
                    projectName: 'Reforestation Program',
                    status: 'Active',
                    owner: 'Forest Friends Initiative',
                    numberOfCredits: 8000,
                    availableCredits: 8000,
                    purchasedCredits: 0,
                    issuanceDate: new Date('2023-02-10T00:00:00Z'),
                    monitoringPeriod: '2022-03-01 to 2022-12-31',
                    vintage: 2022,
                    emissionReduction: true,
                    projectType: 'Afforestation',
                    verifier: 'Verra',
                    methodology: 'Methodology 303',
                    region: 'South America',
                    history: JSON.stringify([])
                },
                {
                    serialNumber: 'PROJ004',
                    projectName: 'Waste Management Solutions',
                    status: 'Retired',
                    owner: 'Urban Eco Services',
                    numberOfCredits: 6000,
                    availableCredits: 0,
                    purchasedCredits: 6000,
                    issuanceDate: new Date('2021-12-01T00:00:00Z'),
                    monitoringPeriod: '2021-01-01 to 2021-11-30',
                    vintage: 2021,
                    emissionReduction: true,
                    projectType: 'Waste Management',
                    verifier: 'Gold Standard',
                    methodology: 'Methodology 404',
                    region: 'Europe',
                    history: JSON.stringify([
                        { retiredBy: 'Company E', retiredCredits: 6000, date: new Date('2023-04-12T00:00:00Z').toISOString() }
                    ])
                },
                {
                    serialNumber: 'PROJ005',
                    projectName: 'Biomass Energy Project',
                    status: 'Active',
                    owner: 'BioEnergy Group',
                    numberOfCredits: 12000,
                    availableCredits: 10000,
                    purchasedCredits: 2000,
                    issuanceDate: new Date('2022-07-01T00:00:00Z'),
                    monitoringPeriod: '2021-01-01 to 2021-12-31',
                    vintage: 2021,
                    emissionReduction: true,
                    projectType: 'Renewable Project',
                    verifier: 'Verra',
                    methodology: 'Methodology 505',
                    region: 'North America',
                    history: JSON.stringify([
                        { retiredBy: 'Company F', retiredCredits: 2000, date: new Date('2023-08-20T00:00:00Z').toISOString() }
                    ])
                },
                {
                    serialNumber: 'PROJ006',
                    projectName: 'Hydro Power Generation',
                    status: 'Active',
                    owner: 'HydroWorld',
                    numberOfCredits: 15000,
                    availableCredits: 14000,
                    purchasedCredits: 1000,
                    issuanceDate: new Date('2023-03-05T00:00:00Z'),
                    monitoringPeriod: '2022-02-01 to 2022-12-31',
                    vintage: 2022,
                    emissionReduction: true,
                    projectType: 'Renewable Project',
                    verifier: 'Gold Standard',
                    methodology: 'Methodology 606',
                    region: 'Asia',
                    history: JSON.stringify([])
                },
                {
                    serialNumber: 'PROJ007',
                    projectName: 'Carbon Capture Initiative',
                    status: 'Retired',
                    owner: 'Carbon Solutions Ltd',
                    numberOfCredits: 20000,
                    availableCredits: 0,
                    purchasedCredits: 20000,
                    issuanceDate: new Date('2021-04-20T00:00:00Z'),
                    monitoringPeriod: '2020-01-01 to 2020-12-31',
                    vintage: 2020,
                    emissionReduction: true,
                    projectType: 'Carbon Capture',
                    verifier: 'Verra',
                    methodology: 'Methodology 707',
                    region: 'Australia',
                    history: JSON.stringify([
                        { retiredBy: 'Company G', retiredCredits: 15000, date: new Date('2023-06-25T00:00:00Z').toISOString() },
                        { retiredBy: 'Company H', retiredCredits: 5000, date: new Date('2023-09-10T00:00:00Z').toISOString() }
                    ])
                },
                {
                    serialNumber: 'PROJ008',
                    projectName: 'Mangrove Restoration Project',
                    status: 'Active',
                    owner: 'Coastal Resilience Inc.',
                    numberOfCredits: 7000,
                    availableCredits: 7000,
                    purchasedCredits: 0,
                    issuanceDate: new Date('2022-11-01T00:00:00Z'),
                    monitoringPeriod: '2021-01-01 to 2021-12-31',
                    vintage: 2021,
                    emissionReduction: true,
                    projectType: 'Afforestation',
                    verifier: 'Gold Standard',
                    methodology: 'Methodology 808',
                    region: 'Africa',
                    history: JSON.stringify([])
                },
                {
                    serialNumber: 'PROJ009',
                    projectName: 'Geothermal Energy Production',
                    status: 'Active',
                    owner: 'GeoThermal Energy Corp',
                    numberOfCredits: 9000,
                    availableCredits: 8000,
                    purchasedCredits: 1000,
                    issuanceDate: new Date('2022-05-10T00:00:00Z'),
                    monitoringPeriod: '2021-01-01 to 2021-12-31',
                    vintage: 2021,
                    emissionReduction: true,
                    projectType: 'Renewable Project',
                    verifier: 'Verra',
                    methodology: 'Methodology 909',
                    region: 'North America',
                    history: JSON.stringify([
                        { retiredBy: 'Company I', retiredCredits: 1000, date: new Date('2023-11-01T00:00:00Z').toISOString() }
                    ])
                },
                {
                    serialNumber: 'PROJ010',
                    projectName: 'Urban Green Spaces',
                    status: 'Active',
                    owner: 'CityGreens Initiative',
                    numberOfCredits: 5000,
                    availableCredits: 4000,
                    purchasedCredits: 1000,
                    issuanceDate: new Date('2022-06-15T00:00:00Z'),
                    monitoringPeriod: '2021-01-01 to 2021-12-31',
                    vintage: 2021,
                    emissionReduction: true,
                    projectType: 'Afforestation',
                    verifier: 'Gold Standard',
                    methodology: 'Methodology 1010',
                    region: 'Europe',
                    history: JSON.stringify([])
                }
            ]
        });
    });
}
main()
    .catch(e => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
