/*
  Warnings:

  - You are about to drop the `artifacts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "artifacts" DROP CONSTRAINT "artifacts_userId_fkey";

-- DropTable
DROP TABLE "artifacts";

-- CreateTable
CREATE TABLE "artefacts" (
    "artefactId" TEXT NOT NULL,
    "artefact" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "artefacts_pkey" PRIMARY KEY ("artefactId")
);

-- AddForeignKey
ALTER TABLE "artefacts" ADD CONSTRAINT "artefacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
