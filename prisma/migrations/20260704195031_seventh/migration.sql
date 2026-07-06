/*
  Warnings:

  - The primary key for the `artifacts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `artifact` on the `artifacts` table. All the data in the column will be lost.
  - You are about to drop the column `artifactId` on the `artifacts` table. All the data in the column will be lost.
  - The required column `artefactId` was added to the `artifacts` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "artifacts" DROP CONSTRAINT "artifacts_pkey",
DROP COLUMN "artifact",
DROP COLUMN "artifactId",
ADD COLUMN     "artefact" TEXT,
ADD COLUMN     "artefactId" TEXT NOT NULL,
ADD CONSTRAINT "artifacts_pkey" PRIMARY KEY ("artefactId");
