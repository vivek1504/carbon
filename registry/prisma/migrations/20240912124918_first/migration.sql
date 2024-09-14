-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "numberOfCredits" INTEGER NOT NULL,
    "issuanceDate" TIMESTAMP(3) NOT NULL,
    "monitoringPeriod" TEXT NOT NULL,
    "vintage" INTEGER NOT NULL,
    "retirementDate" TIMESTAMP(3),
    "emissionReduction" BOOLEAN NOT NULL,
    "category" TEXT NOT NULL,
    "methodology" TEXT NOT NULL,
    "history" JSONB NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_serialNumber_key" ON "Project"("serialNumber");
