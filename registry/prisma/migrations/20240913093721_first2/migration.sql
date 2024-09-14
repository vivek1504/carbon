/*
  Warnings:

  - Added the required column `availableCredits` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchasedCredits` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "availableCredits" INTEGER NOT NULL,
ADD COLUMN     "owner" TEXT NOT NULL,
ADD COLUMN     "purchasedCredits" INTEGER NOT NULL;
