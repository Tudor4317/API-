/*
  Warnings:

  - You are about to drop the `artefacts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "artefacts" DROP CONSTRAINT "artefacts_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "description" TEXT;

-- DropTable
DROP TABLE "artefacts";

-- CreateTable
CREATE TABLE "public_artefacts" (
    "artefactId" TEXT NOT NULL,
    "artefact" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "public_artefacts_pkey" PRIMARY KEY ("artefactId")
);

-- CreateTable
CREATE TABLE "private_artefacts" (
    "artefactId" TEXT NOT NULL,
    "artefact" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "private_artefacts_pkey" PRIMARY KEY ("artefactId")
);

-- AddForeignKey
ALTER TABLE "public_artefacts" ADD CONSTRAINT "public_artefacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "private_artefacts" ADD CONSTRAINT "private_artefacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
