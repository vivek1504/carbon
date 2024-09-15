/*
  Warnings:

  - You are about to drop the `Credit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Issuer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MarketActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Credit" DROP CONSTRAINT "Credit_issuerId_fkey";

-- DropForeignKey
ALTER TABLE "Credit" DROP CONSTRAINT "Credit_marketActivityId_fkey";

-- DropForeignKey
ALTER TABLE "Credit" DROP CONSTRAINT "Credit_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_locationId_fkey";

-- DropTable
DROP TABLE "Credit";

-- DropTable
DROP TABLE "Issuer";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "MarketActivity";

-- DropTable
DROP TABLE "Project";

-- DropEnum
DROP TYPE "CreditStatus";

-- DropEnum
DROP TYPE "ProjectType";

-- DropEnum
DROP TYPE "VerificationStandard";

-- CreateTable
CREATE TABLE "CarbonMark" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "asset" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "wallet" TEXT NOT NULL,
    "availableToken" INTEGER NOT NULL,
    "vintage" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "CarbonMark_pkey" PRIMARY KEY ("id")
);
