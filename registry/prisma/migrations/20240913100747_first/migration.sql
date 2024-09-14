/*
  Warnings:

  - You are about to drop the column `category` on the `Project` table. All the data in the column will be lost.
  - Added the required column `projectType` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verifier` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "category",
ADD COLUMN     "projectType" TEXT NOT NULL,
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "verifier" TEXT NOT NULL;
