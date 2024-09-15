/*
  Warnings:

  - You are about to drop the column `buyerId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `sellerId` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `govtId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[walletAddress]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `from` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalTokens` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('trade', 'offset');

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_buyerId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_sellerId_fkey";

-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "buyerId",
DROP COLUMN "sellerId",
ADD COLUMN     "from" TEXT NOT NULL,
ADD COLUMN     "to" TEXT NOT NULL,
ADD COLUMN     "totalTokens" INTEGER NOT NULL,
ADD COLUMN     "type" "Type" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "govtId";

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "numberOfCredits" INTEGER NOT NULL,
    "availableCredits" INTEGER NOT NULL,
    "purchasedCredits" INTEGER NOT NULL,
    "issuanceDate" TIMESTAMP(3) NOT NULL,
    "monitoringPeriod" TEXT NOT NULL,
    "vintage" INTEGER NOT NULL,
    "retirementDate" TIMESTAMP(3),
    "emissionReduction" BOOLEAN NOT NULL,
    "projectType" TEXT NOT NULL,
    "verifier" TEXT NOT NULL,
    "methodology" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "history" JSONB NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_serialNumber_key" ON "Project"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_walletAddress_key" ON "User"("walletAddress");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_from_fkey" FOREIGN KEY ("from") REFERENCES "User"("walletAddress") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_to_fkey" FOREIGN KEY ("to") REFERENCES "User"("walletAddress") ON DELETE RESTRICT ON UPDATE CASCADE;
