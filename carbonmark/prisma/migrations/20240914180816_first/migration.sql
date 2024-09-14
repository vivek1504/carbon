-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('AFFORESTATION', 'RENEWABLE_ENERGY', 'WASTE_MANAGEMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "VerificationStandard" AS ENUM ('VERRA', 'GOLD_STANDARD', 'OTHER');

-- CreateEnum
CREATE TYPE "CreditStatus" AS ENUM ('AVAILABLE', 'RETIRED', 'PENDING');

-- CreateTable
CREATE TABLE "Credit" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "issuerId" TEXT NOT NULL,
    "vintageYear" INTEGER NOT NULL,
    "totalCredits" INTEGER NOT NULL,
    "pricePerCredit" DOUBLE PRECISION NOT NULL,
    "marketActivityId" TEXT,
    "verificationStandard" "VerificationStandard" NOT NULL,
    "status" "CreditStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Credit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "projectType" "ProjectType" NOT NULL,
    "locationId" TEXT NOT NULL,
    "methodology" TEXT NOT NULL,
    "coBenefits" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Issuer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Issuer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketActivity" (
    "id" TEXT NOT NULL,
    "lastTradeDate" TIMESTAMP(3) NOT NULL,
    "lastTradeVolume" INTEGER NOT NULL,
    "totalTrades" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MarketActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Credit" ADD CONSTRAINT "Credit_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credit" ADD CONSTRAINT "Credit_issuerId_fkey" FOREIGN KEY ("issuerId") REFERENCES "Issuer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credit" ADD CONSTRAINT "Credit_marketActivityId_fkey" FOREIGN KEY ("marketActivityId") REFERENCES "MarketActivity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
